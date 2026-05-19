import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
    return (
        <article className="item-detail-card">
            <img src={item.image} alt={`foto de ${item.name || item.title}`} />

            <div className="item-detail-info">
                <h2>{item.name || item.title}</h2>
                <p className="item-detail-description">{item.description}</p>
                <p className="item-detail-price">${item.price}</p>

                <button className="btn-carrito-detail">Agregar al carrito</button>
            </div>
        </article>
    );
};