import { ItemListContainer } from "../../components/ItemListContainer/ItemListContainer";
import "./Products.css";

export const Products = () => {
    return (
        <div className="products-page-container">
            <h1>Todos los productos</h1>
            <p>Aquí puedes ver nuestro catálogo completo.</p>
            <ItemListContainer />
        </div>
    );
};