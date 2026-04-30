import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
    // El método .map() en un array vacío no hace nada y no da error,
    // por lo que es seguro de usar.
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
            {products.map((product) => (
                // La prop "key" es crucial para React al renderizar listas.
                <Item key={product.id} {...product} />
            ))}
        </div>
    );
};