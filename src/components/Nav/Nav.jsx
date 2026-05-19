import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart.jsx";
import "./Nav.css";

export const Nav = () => {
    // este es el custom hook que se va a usar para acceder al contexto y obtener el total de items en el carrito     
    const totalItems = useCart().getTotalItems(); // se obtiene el total de items en el carrito usando el custom hook
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/products"}>Productos</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>
                        Carrito
                        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
