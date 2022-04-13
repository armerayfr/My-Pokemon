import React from "react";
import { Card } from "react-bootstrap";

function ListCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img height={100} width={100} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ListCard;
