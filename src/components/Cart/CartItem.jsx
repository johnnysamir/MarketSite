import { useCart } from '../../context/useCart.jsx';
import { Item } from '../Item/Item.jsx';


export const CartItem = ({ item }) => {
    const { removeItem } = useCart();

    return (
        <Item {...item}>
            <button
                onClick={() => removeItem(item.id)}
                className="btn bg-delete primary">
                Eliminar
            </button>
        </Item>
    )

};