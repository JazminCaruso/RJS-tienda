import Topics from '../Topics/Topics';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Detail.scss"

function Detail({item}) {
  return (
    <div  className="detalles">
        <p className='texto'> {item.descripcion}</p>
        <p className='texto'>{ item.resumen}</p>
        <Topics item={item}></Topics>
        <ListGroup className="list">
            <ListGroup.Item className="list-item"><span class="bold-word">Cupos disponibles:</span> {item.cupos}</ListGroup.Item>
            <ListGroup.Item className="list-item"><span class="bold-word">Precio:</span> ${item.precio}</ListGroup.Item>
        </ListGroup>
    </div>
  );
}

export default Detail;