import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart.jsx";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";


export const CartView = () => {
    const { cart } = useCart();

    return <section>
        <h1>Tu Carrito de Compras</h1>

        {cart.length ? (
            <>
                <CartList />
                <CartSummary />
            </>
        ) : (
            <>
                <p>Tu carrito está vacío</p>
                <Link to="/" className="btn primary bg-primary" >
                    Volver
                </Link>
            </>
        )}



    </section>


};