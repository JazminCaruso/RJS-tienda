import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { BsTrash } from 'react-icons/bs';
import "./Cart.scss"

const Cart = () => {
  const { cart, aumentarCantidad, disminuirCantidad, eliminarProducto, totalCompra, vaciarCarrito } =
    useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <p className="parrafo">Elige el curso que quieres adquirir</p>
                <Link to="/" className="btn">Ver cursos</Link>
            </div>
        )
    }

  return (
    <div className="container my-5">
        <h2>Tu carrito:</h2>
        {cart.map((item) => (
            <div key={item.id} className="item-carrito">
                <hr/>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 className="titulo-curso">Curso de {item.nombre}</h3>
                    <BsTrash onClick={() => eliminarProducto(item.id)} className="trash"></BsTrash>
                </div>
                <p className="parrafo"><span className="bold-word">Cantidad:</span> {item.cantidad}</p>
                <button className="btn boton" onClick={() => disminuirCantidad(item.id)}>- u.</button>
                <button className="btn boton" onClick={() => aumentarCantidad(item.id)}>+ u.</button>
                <p className="parrafo"><span className="bold-word">Subtotal:</span> ${item.cantidad * item.precio}</p>
                <div>
                    <Link to={`/item/${item.id}`} className="btn">Ver detalles del curso</Link>
                </div>
            </div>
        ))}

        <div>
            <hr/>
            <h4>Total: ${totalCompra()}</h4>
            <div className="botones">
                <button onClick={vaciarCarrito} className="btn boton2">Vaciar carrito</button>
                <Link to="/" className="btn boton2">Agregar otro curso!</Link>
            </div>
        </div>

    </div>
  );
};

export default Cart;