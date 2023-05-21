import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Topics.scss'

function Topics({item}) {
  return (
    <div>
      <h2 className='titulo-temario'>Temario:</h2>
      <ListGroup as="ol" numbered className="topic">
        <ListGroup.Item as="li" className="topic-item">{item.tema1}</ListGroup.Item>
        <ListGroup.Item as="li" className="topic-item">{item.tema2}</ListGroup.Item>
        <ListGroup.Item as="li" className="topic-item">{item.tema3}</ListGroup.Item>
        <ListGroup.Item as="li" className="topic-item">{item.tema4}</ListGroup.Item>
        <ListGroup.Item as="li" className="topic-item">{item.tema5}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Topics;