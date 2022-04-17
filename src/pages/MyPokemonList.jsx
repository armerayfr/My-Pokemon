import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Card, Container, Button, Row, Stack } from "react-bootstrap";

import { URL_API } from "../helper";
import popUp from "../utility/swalfire";

function MyPokemonList() {
  const pokemon = useSelector((state) => state.myPokemonReducer.myPokemonList);
  localStorage.setItem("dataPokemon", JSON.stringify(pokemon));

  const releasePokemonBtn = async (e) => {
    try {
      const id = e.target.value;
      const { data } = await axios.get(`${URL_API}/release-pokemon?id=${id}`);
      const output = pokemon.filter((el, i) => i !== +data.id);
      localStorage.setItem("dataPokemon", JSON.stringify(output));
      popUp.successResponse(data.message);
      window.location.reload();
    } catch (err) {
      popUp.failedResponse(err.response.data.name);
    }
  };

  const renameNicknameBtn = async (e) => {
    try {
      const id = e.target.value;
      const el = pokemon.filter((el, i) => +id === i)[0];
      if (el.versionName === undefined) el.versionName = 0;
      const nickname = (await popUp.rename(el.name)) + "Rename";
      const { data } = await axios.get(
        `${URL_API}/rename-pokemon?versionName=${el.versionName}&nickname=${nickname}`
      );
      el.versionName = data.versionName;
      el.nickname = data.nickname;
      localStorage.setItem("dataPokemon", JSON.stringify(pokemon));

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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
                <Button
                  value={i}
                  onClick={(e) => renameNicknameBtn(e)}
                  variant="primary"
                >
                  Rename
                </Button>
                <Button
                  value={i}
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
    });
  };

  return (
    <>
      <div className="col-md-12 col-lg-12 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Your Pokemon List</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2"></div>
          </div>
        </div>

        <Card body className="mb-3">
          <div className="container-fluid">
            <Container>
              <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {/* render pokemon list */}

                  {renderMyPokemons()}
                </div>
              </div>
            </Container>
          </div>
        </Card>
      </div>
    </>
  );
}

export default MyPokemonList;
