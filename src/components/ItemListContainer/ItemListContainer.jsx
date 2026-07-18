import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory } from "../../services/productsService";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { category } = useParams();
    const [prevCategory, setPrevCategory] = useState(category);

    if (category !== prevCategory) {
        setPrevCategory(category);
        setLoading(true);
    }

    useEffect(() => {
        getByCategory(category)
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error detallado al cargar productos:", error);
                setError("No se pudieron cargar los productos. Revisa la consola para más detalles.");
            })
            .finally(() => setLoading(false));
    }, [category]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section>
            {/* <h1>Componente ItemListContainer</h1>
      <p>Este componente a futuro tendra logica y conexion a API</p>

      <button onClick={getProducts}>Traer productos</button>
      <button onClick={clearProducts}>Vaciar productos</button> */}

            <ItemList products={products} />
        </section>

    );

};
