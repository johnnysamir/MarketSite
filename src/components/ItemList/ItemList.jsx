import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
    // El método .map() en un array vacío no hace nada y no da error,
    // por lo que es seguro de usar.
    return (
        <div className="item-list">
            {products.map((product) => (
                // La prop "key" es crucial para React al renderizar listas.
                <Item key={product.id} {...product} />
            ))}
        </div>
    );
};