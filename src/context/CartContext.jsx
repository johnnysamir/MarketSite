import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./useCart.jsx";

export const CartProvider = ({ children }) => { // este es el provider que se va a usar para envolver la aplicacion
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const somethingCart = (item) => {
        const insideCart = cart.some((element) => element.id === item.id); // verificamos si un item ya esta en el carrito
        return insideCart; // retorna true o false dependiendo de si el item esta en el carrito o no
    }

    const clearCart = () => {
        setCart([]); // limpia el carrito de compras
    }

    const addCart = (item) => {
        if (somethingCart(item)) { // si el item ya esta en el carrito, se actualiza la cantidad
            alert("El producto ya esta en el carrito"); // se muestra una alerta si el item ya esta en el carrito
            return; // se retorna para evitar que se agregue el item nuevamente
        }
        setCart([...cart, { ...item, quantity: item.quantity || 1 }]); // si el item no esta en el carrito, se agrega al carrito
        alert("Producto agregado al carrito"); // se muestra una alerta si el item se agrego al carrito
    }

    const removeItem = (id) => {
        //setCart(cart.filter((item) => item.id !== id));
        const actCart = cart.filter((element) => element.id !== id); // esta funcion elimina un item del carrito de compras
        setCart(actCart);
        alert("Producto eliminado del carrito"); // se muestra una alerta si el item se elimino del carrito
    }

    const getTotalItems = () => {
        const totalItems = cart.reduce((total, element) => total + element.quantity, 0); // esta funcion calcula el total de items en el carrito de compras
        return totalItems; // retorna el total de items en el carrito
    }
    const getTotalCart = () => {
        const totalCart = cart.reduce((total, element) => total + element.price * element.quantity, 0); // esta funcion calcula el total del carrito de compras
        return totalCart; // retorna el total del carrito
    }

    const checkout = () => {
        alert("Gracias por su compra"); // esta funcion simula el proceso de compra
        clearCart(); // limpia el carrito después de la compra
        navigate("/"); // redirige al usuario a la página principal después de la compra
    }

    const values = { addCart, clearCart, somethingCart, cart, setCart, removeItem, getTotalItems, getTotalCart, checkout }; // estos son los valores que se van a compartir en el contexto
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};


