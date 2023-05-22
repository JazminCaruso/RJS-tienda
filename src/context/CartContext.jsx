import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const aggCarrito = (item) => {
    setCart([...cart, item]);
  };

  const inCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const totalCantidad = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const totalCompra = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
  };

  const aumentarCantidad = (itemId) => {
    const newCart = cart.map((item) =>
      item.id === itemId && item.cantidad < item.cupos ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCart(newCart);
  };

  const disminuirCantidad = (itemId) => {
    const newCart = cart.map((item) =>
      item.id === itemId && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
    );
    setCart(newCart);
  };

  const eliminarProducto = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        aggCarrito,
        inCart,
        vaciarCarrito,
        totalCantidad,
        totalCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};