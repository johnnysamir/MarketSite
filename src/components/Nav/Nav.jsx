import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart.jsx";
import { useAuth } from "../../context/useAuth.jsx";
import "./Nav.css";

export const Nav = () => {
    const totalItems = useCart().getTotalItems();
    const { user, logout } = useAuth();

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
                    <Link to={"/category/dama"}>Dama</Link>
                </li>
                <li>
                    <Link to={"/category/hombre"}>Hombre</Link>
                </li>
                <li>
                    <Link to={"/category/infantil"}>Infantil</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>
                        Carrito
                        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                    </Link>
                </li>
                {user && (
                    <>
                        <li>
                            <Link to="/admin" style={{ color: "#3b82f6", fontWeight: "bold" }}>
                                Admin
                            </Link>
                        </li>
                        <li>
                            <button onClick={logout} className="nav-logout-btn">
                                Salir
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};
