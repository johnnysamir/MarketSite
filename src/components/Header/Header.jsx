import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <Link to="/" className="logo-container">
                <img src={logo} />
                <span>ReacTivate</span>
            </Link>
            <Nav />
        </header>
    );
};