import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // La carpeta public se sirve en la raíz ("/"), sin importar dónde esté el componente
        fetch("/data/products.json")
            .then((resp) => resp.json())
            .then((data) => {
                const item = data.find((element) => String(element.id) === String(id));
                if (item) {
                    setProduct(item);
                    return;
                }
                throw new Error("Producto no encontrado");
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [id]); // Es buena práctica incluir 'id' en las dependencias

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
