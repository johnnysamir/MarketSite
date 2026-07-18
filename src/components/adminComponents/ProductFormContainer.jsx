/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../utils/validateProduct";
import { uploadImage } from "../../services/uploadImage";
import { createProduct, getProductById, updateProduct } from "../../services/productsService";
import { useAuth } from "../../context/useAuth";
import "./productContainer.css";

export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { logout } = useAuth();
    const isEditMode = Boolean(id);

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [currentImageUrl, setCurrentImageUrl] = useState("");
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
    });

    useEffect(() => {
        if (isEditMode) {
            setLoading(true);
            getProductById(id)
                .then((data) => {
                    if (data) {
                        setProduct({
                            name: data.name,
                            price: String(data.price),
                            description: data.description,
                            category: data.category,
                        });
                        setCurrentImageUrl(data.image);
                    } else {
                        setErrors((prev) => ({
                            ...prev,
                            general: "El producto solicitado no existe.",
                        }));
                    }
                })
                .catch((err) => {
                    console.error("Error loading product:", err);
                    setErrors((prev) => ({
                        ...prev,
                        general: "Error al cargar la información del producto.",
                    }));
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [id, isEditMode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files && e.target.files[0];
        setFile(selectedFile || null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        // Validar incluyendo la nueva imagen o la existente
        const validationErrors = validateProduct({
            ...product,
            image: file || currentImageUrl,
        });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        try {
            let imageUrl = currentImageUrl;

            // Si el usuario seleccionó un archivo nuevo, subirlo a imgBB
            if (file) {
                imageUrl = await uploadImage(file);
            }

            // Armar el producto final
            const finalProduct = {
                ...product,
                price: Number(product.price),
                image: imageUrl,
            };

            if (isEditMode) {
                // Actualizar producto en Firestore
                await updateProduct(id, finalProduct);
                navigate(`/success/${id}?mode=edit`, { replace: true });
            } else {
                // Crear nuevo producto en Firestore
                const docId = await createProduct(finalProduct);
                navigate(`/success/${docId}?mode=create`, { replace: true });
            }
        } catch (error) {
            console.error("Submit error:", error);
            setErrors((prev) => ({
                ...prev,
                general: `Error al ${isEditMode ? "actualizar" : "crear"} el producto. Inténtalo de nuevo.`,
            }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductFormUI
            product={product}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
            isEditMode={isEditMode}
            currentImageUrl={currentImageUrl}
            onLogout={logout}
        />
    );
};
