import "./ItemDetail.scss";
import { useContext, useState } from "react";
import Detail from "../Detail/Detail";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { aggCarrito, inCart } = useContext(CartContext);

  const agregarAlCarrito = () => {
    const nuevoItem = {
      ...item,
      cantidad: 1,
    };
    aggCarrito(nuevoItem);
  };

  return (
    <div className="item-detail">
      <div className="titulo">
        <h2 className="titulo-curso">{item.nombre}</h2>
      </div>
      <div className="imagenes">
        <img src={item.img} alt={item.nombre} />
        <img src={item.img} alt={item.nombre} />
        <img src={item.img} alt={item.nombre} />
      </div>
      <Detail item={item} />
      <br />
      {
            inCart(item.id)
                ? <Link className="btn" to="/carrito">Ver carrito</Link>
                : <button className="btn" onClick={agregarAlCarrito}>
                    Agregar al carrito
                </button>
        }

    </div>
  );
};

export default ItemDetail;