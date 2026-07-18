import { useCart } from '../../context/useCart.jsx';
import { CartItem } from './CartItem';

export const CartList = () => {
    const { cart } = useCart();

    return (
        <>
            <div className="cart-list">
                {cart.map(element => (
                    <CartItem key={element.id} item={element} />
                ))}
            </div>
        </>
    );
};