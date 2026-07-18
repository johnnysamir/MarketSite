import "./Item.css"
import { Link } from "react-router-dom";


// FakeStore y dummyjson utilizan clave "title" para el nombre de producto
// Dummyjson tiene las imagenes en array bajo clave "images"⚠️

export const Item = ({ id, name, title, price, image, children }) => {
    return (
        <article className="card">
            <img src={image} alt={`foto de ${name || title}`} />
            <h2>{name || title}</h2>
            <p>${price}</p>
            <div className="card-buttons">
                <Link to={`/product/${id}`} className="btn-detalle">
                    Ver detalles
                </Link>
            </div>
            {children}
        </article>
    );
};
