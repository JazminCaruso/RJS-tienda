import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

function KitchenSinkExample({item}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>{item.descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cupos: {item.cupos}</ListGroup.Item>
        <ListGroup.Item>Precio: ${item.precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to={`/item/${item.id}`}><Button variant="primary">Ver más</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;