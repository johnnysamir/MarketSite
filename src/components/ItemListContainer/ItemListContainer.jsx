import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";


//CON LA API FAKESTORE
// useEffect(() => {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => setProducts(data))
//     .catch((err) => console.log(err))
//     .finally(() => setLoading(false));
// }, []);

//CON LA API DUMMYJSON (OJO con respuesta en objeto. Atributo de imagen en array)
// useEffect(() => {
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => setProducts(data.products)) //dummyjson devuelve un objeto con clave products que tiene el array
//     .catch((err) => console.log(err))
//     .finally(() => setLoading(false));
// }, []);

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch("/data/products.json")
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error(`Error HTTP: ${resp.status} - No se encontró el archivo o hubo un error en el servidor.`);
                }
                return resp.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error detallado al cargar productos:", error);
                setError("No se pudieron cargar los productos. Revisa la consola para más detalles.");
            })
            .finally(() => setLoading(false));
    }, []);

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