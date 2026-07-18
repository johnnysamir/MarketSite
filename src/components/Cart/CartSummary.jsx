import { useCart } from "../../context/useCart.jsx";

export const CartSummary = () => {
    const { getTotalCart, checkout } = useCart();

    const total = getTotalCart();
    return (
        <>
            <p>TOTAL A PAGAR: ${total.toFixed(2)}</p>
            <button onClick={checkout} className="btn bg-success primary">
                Finalizar Compra
            </button>
        </>
    );
};