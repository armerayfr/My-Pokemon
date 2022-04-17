import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Card, Container, Button, Row, Stack } from "react-bootstrap";

import { URL_API } from "../../helper";
import popUp from "../../utility/swalfire";

function CardMyPokemons(props) {
  const pokemon = useSelector((state) => state.myPokemonReducer.myPokemonList);

  const releasePokemonBtn = async (e) => {
    try {
      const id = e.target.value;
      const { data } = await axios.get(`${URL_API}/release-pokemon?id=${id}`);
      const output = pokemon.filter((el, i) => i !== +data.id);
      localStorage.setItem("dataPokemon", JSON.stringify(output));
      popUp.successResponse(data.message);
    } catch (err) {
      popUp.failedResponse(err.response.data);
    }
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
              onClick={(e) => releasePokemonBtn(e)}
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
