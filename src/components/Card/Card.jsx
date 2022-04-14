import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function ListCard(props) {
  return (
    <div>
      <Link to={`/pokemon-detail/${props.name}`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img height={100} width={100} variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default ListCard;
