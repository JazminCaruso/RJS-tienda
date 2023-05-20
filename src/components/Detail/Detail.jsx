import Topics from '../Topics/Topics';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Detail.scss"

function Detail({item}) {
  return (
    <div  className="detalles">
        <Accordion className="accordion" alwaysOpen>
            <Accordion.Item className='accordion-item' eventKey="0">
                <Accordion.Header className='accordion-item'>Resumen</Accordion.Header>
                <Accordion.Body className='accordion-item-item'>{item.descripcion}  {item.resumen}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordion-item' eventKey="1">
                <Accordion.Header className='accordion-item'>Temario</Accordion.Header>
                <Accordion.Body className='accordion-item-item'>
                <Topics item={item}></Topics>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <ListGroup className="list">
            <ListGroup.Item className="list-item"><span class="bold-word">Categoría:</span> {item.categoria}</ListGroup.Item>
            <ListGroup.Item className="list-item"><span class="bold-word">Cupos disponibles:</span> {item.cupos}</ListGroup.Item>
            <ListGroup.Item className="list-item"><span class="bold-word">Precio:</span> ${item.precio}</ListGroup.Item>
        </ListGroup>
    </div>
  );
}

export default Detail;