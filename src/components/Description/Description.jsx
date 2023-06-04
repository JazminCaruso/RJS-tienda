import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ReadMore from '../ReadMore/ReadMore';
import './Descrption.scss'

function Description({item}) {
  return (
    <div>
      <h3 className='titulo-description'>Descripción e información del curso:</h3>
      <ListGroup as="ol" className="description">
        <ListGroup.Item as="li" className="description-item"><ReadMore item={item}></ReadMore></ListGroup.Item>
        <ListGroup.Item as="li" className="topic-item">Requisitos: {item.requisitos}</ListGroup.Item>
        <ListGroup.Item as="li" className="topic-item">Cantidad de clases: {item.cantClases}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Description;