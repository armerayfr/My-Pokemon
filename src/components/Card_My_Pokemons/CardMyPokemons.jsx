import React from "react";
import axios from "axios";
import { Card, Container, Button, Row, Stack } from "react-bootstrap";

function CardMyPokemons(props) {
  const getIdBtn = (e) => {
    console.log(e.target.value);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img height={100} width={100} variant="top" src={props.img} />
      <Card.Body>
        <Stack gap={2}>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.nickname}</Card.Text>
          <Stack direction="horizontal" gap={3}>
            <Button value={props.idx} variant="primary">
              Rename
            </Button>
            <Button
              value={props.idx}
              onClick={(e) => getIdBtn(e)}
              variant="primary"
            >
              Release
            </Button>
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default CardMyPokemons;
