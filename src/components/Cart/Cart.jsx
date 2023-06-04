import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { BsTrash } from 'react-icons/bs';
import "./Cart.scss"
import { AuthContext } from "../../context/AuthContext";

const Cart = () => {
  const { cart, eliminarProducto, totalCompra, vaciarCarrito } = useContext(CartContext);

  const { user } = useContext(AuthContext)

  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <h2>Tu carrito está vacío</h2>
        <hr />
        <p className="parrafo">Elige el curso que quieres adquirir</p>
        <Link to="/" className="btn">Ver cursos</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2>Tu carrito:</h2>
      {cart.map((item) => (
        <div key={item.id} className="item-carrito">
          <h3 className="titulo-curso">Curso de {item.nombre}</h3>
          <BsTrash onClick={() => eliminarProducto(item.id)} className="trash" />
          <div className="info-container">
            <div className="img-container">
              <img src={item.img} className="img-item" alt="Imagen del curso" />
            </div>
            <div className="details-container">
                <p>Fecha de inicio: {item.fecha}</p>
                <p>Horario: {item.hora}</p>
                <p>Precio: {item.precio}</p>
            </div>
          </div>
          <Link to={`/item/${item.id}`} className="btn">Ver detalles del curso</Link>
        </div>
      ))}

      <div>
        <hr />
        <h4>Total: ${totalCompra()}</h4>
        <div className="botones">
          <button onClick={vaciarCarrito} className="btn boton2">Vaciar carrito</button>
          <Link to="/" className="btn boton2">Agregar otro curso</Link>
          {
            user.logged 
              ? <Link to="/checkout" className="btn boton2">Finalizar mi compra</Link>
              : <p className="texto-final">¡Debe iniciar sesión para realizar la compra!</p>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Cart;