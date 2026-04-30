import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
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
        <section>
            <h1>{product.name || product.title}</h1>
            <div className="products-container">
                <ItemDetail item={product} />
            </div>
        </section>
    );
};
