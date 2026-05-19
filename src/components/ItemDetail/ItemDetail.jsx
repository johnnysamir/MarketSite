import "./ItemDetail.css";
import { useCart } from "../../context/useCart.jsx"; // se importa el hook useCart para acceder al contexto del carrito de compras

export const ItemDetail = ({ item }) => {
    const { addCart } = useCart(); // se importa la funcion addCart del contexto para agregar el item al carrito de compras
    return (
        <article className="item-detail-card">
            <img src={item.image} alt={`foto de ${item.name || item.title}`} />

            <div className="item-detail-info">
                <h2>{item.name || item.title}</h2>
                <p className="item-detail-description">{item.description}</p>
                <p className="item-detail-price">${item.price}</p>

                <button className="btn-carrito-detail" onClick={() => addCart(item)}>
                    Agregar al carrito</button>
            </div>
        </article>
    );
};
