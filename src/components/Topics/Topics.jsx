import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Topics({item}) {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item as="li" className="topic-item">{item.tema1}</ListGroup.Item>
      <ListGroup.Item as="li" className="topic-item">{item.tema2}</ListGroup.Item>
      <ListGroup.Item as="li" className="topic-item">{item.tema3}</ListGroup.Item>
      <ListGroup.Item as="li" className="topic-item">{item.tema4}</ListGroup.Item>
      <ListGroup.Item as="li" className="topic-item">{item.tema5}</ListGroup.Item>
    </ListGroup>
  );
}

export default Topics;