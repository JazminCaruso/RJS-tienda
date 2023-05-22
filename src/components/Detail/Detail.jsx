import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Topics from "../Topics/Topics";
import ListGroup from "react-bootstrap/ListGroup";
import "./Detail.scss";

function Detail({ item }) {
  const { cart } = useContext(CartContext);

  // Obtener la cantidad de cursos en el carrito
  const getCantidadCursosEnCarrito = (itemId) => {
    const cursoEnCarrito = cart.find((curso) => curso.id === itemId);
    return cursoEnCarrito ? cursoEnCarrito.cantidad : 0;
  };

  // Calcular la cantidad de cupos disponibles
  const getCuposDisponibles = () => {
    const cantidadEnCarrito = getCantidadCursosEnCarrito(item.id);
    return item.cupos - cantidadEnCarrito;
  };

  return (
    <div className="detalles">
      <p className="texto">{item.descripcion}</p>
      <p className="texto">{item.resumen}</p>
      <Topics item={item}></Topics>
      <ListGroup className="list">
        <ListGroup.Item className="list-item">
          <span className="bold-word">Cupos disponibles:</span>{" "}
          {getCuposDisponibles()}
        </ListGroup.Item>
        <ListGroup.Item className="list-item">
          <span className="bold-word">Precio:</span> ${item.precio}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Detail;