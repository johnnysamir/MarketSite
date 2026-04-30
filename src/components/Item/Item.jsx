import "./Item.css"

// FakeStore y dummyjson utilizan clave "title" para el nombre de producto
// Dummyjson tiene las imagenes en array bajo clave "images"⚠️

export const Item = ({ name, title, description, price, image, images, children }) => {
    // Usamos short-circuit (||) para soportar dinámicamente tu JSON local o las APIs externas
    return (
        <article className="card">
            <img src={image || (images && images[0])} alt={`foto de ${name || title}`} />
            <h2>{name || title}</h2>
            <p>{description}</p>
            <p>${price}</p>
            {children}
        </article>
    );
};