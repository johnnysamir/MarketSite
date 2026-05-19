import "./Item.css"
import { Link } from "react-router-dom";

// FakeStore y dummyjson utilizan clave "title" para el nombre de producto
// Dummyjson tiene las imagenes en array bajo clave "images"⚠️

export const Item = ({ id, name, title, description, price, image, images, children }) => {
    return (
        <article className="card">
            <img src={image} alt={`foto de ${name || title}`} />
            <h2>{name || title}</h2>
            <p>${price}</p>
            <div className="card-buttons">
                <button className="btn-carrito">Agregar al carrito</button>
                <Link to={`/product/${id}`} className="btn-detalle">
                    Ver detalles
                </Link>
            </div>
            {children}
        </article>
    );
};