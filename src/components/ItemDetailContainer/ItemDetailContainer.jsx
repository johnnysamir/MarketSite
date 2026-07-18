import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [prevId, setPrevId] = useState(id);

    if (id !== prevId) {
        setPrevId(id);
        setLoading(true);
    }

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                if (data) {
                    setProduct(data);
                } else {
                    setProduct(null);
                }
            })
            .catch((error) => {
                console.error("Error al obtener detalle del producto:", error);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (!product) return <p>Producto no encontrado</p>;

    return (
        <section className="item-detail-section">
            {/* Contenedor extra para alinear el botón con la tarjeta */}
            <div className="item-detail-header">
                <button className="btn-back" onClick={() => navigate(-1)}>← Volver</button>
            </div>

            <h1>{product.name || product.title}</h1>
            <div className="products-container">
                <ItemDetail item={product} />
            </div>
        </section>
    );
};
