import React, { useState, useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Detail.scss';

function Detail({ item }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleDateSelect = (date) => {
    if (!addedToCart) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time) => {
    if (!addedToCart) {
      setSelectedTime(time);
    }
  };

  const getCuposDisponibles = () => {
    if (selectedDate && selectedTime) {
      const fecha = item.fechas.find((f) => f.fecha === selectedDate);
      if (fecha) {
        const horario = fecha.horarios.find((h) => h.hora === selectedTime);
        if (horario) {
          return horario.cupos;
        }
      }
    }
    return '';
  };

  const { aggCarrito, inCart } = useContext(CartContext);

  const agregarAlCarrito = () => {
    const nuevoItem = {
      ...item,
      fecha: selectedDate,
      hora: selectedTime,
      cantidad: 1,
    };
    aggCarrito(nuevoItem);
    setAddedToCart(true);
  };

  return (
    <div className="seleccion">
      <div className="date-selector">
        <span className="bold-word">Seleccionar fecha:</span>
        <div className="date-buttons">
          {item.fechas.map((fecha) => (
            <button
              key={fecha.fecha}
              className={`date-button ${
                selectedDate === fecha.fecha ? 'selected' : ''
              }`}
              onClick={() => handleDateSelect(fecha.fecha)}
              disabled={addedToCart}
            >
              {fecha.fecha}
            </button>
          ))}
        </div>
      </div>
      {selectedDate && (
        <div className="time-selector">
          <span className="bold-word">Seleccionar horario:</span>
          <div className="time-buttons">
            {item.fechas
              .find((fecha) => fecha.fecha === selectedDate)
              .horarios.map((horario) => (
                <button
                  key={horario.hora}
                  className={`time-button ${
                    selectedTime === horario.hora ? 'selected' : ''
                  }`}
                  onClick={() => handleTimeSelect(horario.hora)}
                  disabled={addedToCart}
                >
                  {horario.hora}
                </button>
              ))}
          </div>
        </div>
      )}
      <ListGroup className="list">
        {selectedTime && (
          <ListGroup.Item className="list-item">
            <span className="bold-word">Cupos disponibles: </span>
            {getCuposDisponibles()}
          </ListGroup.Item>
        )}
        <ListGroup.Item className="list-item">
          <span className="bold-word">Precio:</span> ${item.precio}
        </ListGroup.Item>
      </ListGroup>
      {selectedTime && (
        inCart(item.id)
          ? <Link className="boton" to="/cart">Ver carrito</Link>
          : <div className="botones">
              <Link className="boton" onClick={agregarAlCarrito} disabled={addedToCart}>Agregar al carrito</Link>
              <Link to="/" className="boton">Comprar ya</Link>
            </div>
      )}
    </div>
  );
}

export default Detail;