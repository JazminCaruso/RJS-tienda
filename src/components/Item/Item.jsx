import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './Item.scss'

function Item({item}) {
  return (
        <Card className='item-card'>
          <Card.Img variant="top" src={item.img} />
          <Card.Body className='bg'>
              <Card.Title className='bg titulo'>{item.nombre}</Card.Title>
              <Card.Text className='bg descripcion'>{item.descripcion}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush bg">
              <ListGroup.Item className='bg'>Precio: ${item.precio}</ListGroup.Item>
              <ListGroup.Item className='bg'>Cupos: {item.cupos}</ListGroup.Item>
          </ListGroup>
          <Card.Body className='bg'>
              <Link to={`/item/${item.id}`}><Button className='btn'>Ver más</Button></Link>
          </Card.Body>
        </Card>
  );
}

export default Item;