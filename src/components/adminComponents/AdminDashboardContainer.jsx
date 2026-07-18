/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { useAuth } from "../../context/useAuth";
import { getProducts, deleteProduct } from "../../services/productsService";
import { AdminDashboardUI } from "./AdminDashboardUI";
import "./productContainer.css";

export const AdminDashboardContainer = () => {
    const { logout } = useAuth();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (err) {
            console.error("Error fetching products:", err);
            setError("No se pudieron cargar los productos.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
        if (!confirmDelete) return;

        try {
            await deleteProduct(id);
            setProducts((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            console.error("Error deleting product:", err);
            alert("Hubo un error al intentar eliminar el producto.");
        }
    };

    return (
        <AdminDashboardUI
            products={products}
            loading={loading}
            error={error}
            onDelete={handleDelete}
            onLogout={logout}
        />
    );
};
