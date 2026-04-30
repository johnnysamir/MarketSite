import { Link } from "react-router-dom";
import "./Nav.css";
import styles from "./Nav.module.css";

export const Nav = () => {
    return (
        <nav>
            {/* <ul className={styles["nav-list"]}> */}
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/products"}>Productos</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>Carrito</Link>
                </li>
            </ul>
        </nav>
    );
};
