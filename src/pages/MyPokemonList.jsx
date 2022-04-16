import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Card, Container, Button, Row, Stack } from "react-bootstrap";

function MyPokemonList() {
  const pokemon = useSelector((state) => state.myPokemonReducer.myPokemonList);
  console.log(pokemon);

  const renderMyPokemons = () => {
    return pokemon.map((el, i) => {
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            height={100}
            width={100}
            variant="top"
            src={el.sprites.other.dream_world.front_default}
          />
          <Card.Body>
            <Stack gap={2}>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>{el.nickname}</Card.Text>
              <Stack direction="horizontal" gap={3}>
                <Button variant="primary">Rename</Button>
                <Button variant="primary">Release</Button>
              </Stack>
            </Stack>
          </Card.Body>
        </Card>
      );
    });
  };

  return (
    <div className="col-md-12 col-lg-12 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Your Pokemon List</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2"></div>
        </div>
      </div>

      <Card body className="mb-3">
        <div className="container-fluid">
          {/* <div className="row"></div> */}
          <Container>
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {/* render pokemon list */}
                {/* <Link to={`/pokemon-detail/${props.name}`}> */}
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    height={100}
                    width={100}
                    variant="top"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                  />
                  <Card.Body>
                    <Stack gap={2}>
                      <Card.Title>Ditto</Card.Title>
                      <Card.Text>Kaizooo</Card.Text>
                      <Stack direction="horizontal" gap={3}>
                        <Button variant="primary">Rename</Button>
                        <Button variant="primary">Release</Button>
                      </Stack>
                    </Stack>
                  </Card.Body>
                </Card>
                {/* </Link> */}

                {renderMyPokemons()}
              </div>
            </div>
          </Container>
        </div>
      </Card>
    </div>
  );
}

export default MyPokemonList;
