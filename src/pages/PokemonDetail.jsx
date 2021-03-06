import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import {Re} from 'react-router'
import { useParams, Navigate } from "react-router-dom";
import { Card, Container, Button, Row, Badge, Stack } from "react-bootstrap";

import { gotPokemon } from "../redux/actions/pokemonActions";
import { URL_API } from "../helper";
import popUp from "../utility/swalfire";

function PokemonDetail(props) {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  const fetchPokemon = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      setPokemon(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokemon]);

  const renderTypes = () => {
    if (pokemon.types !== undefined) {
      return pokemon.types.map((el) => {
        return (
          <Badge bg="secondary" text="white">
            {el.type.name}
          </Badge>
        );
      });
    }
  };

  const renderMoves = () => {
    if (pokemon.moves !== undefined) {
      return pokemon.moves.map((el, i) => {
        return (
          <div className="bg-light border">
            {i + 1}. {el.move.name}
          </div>
        );
      });
    }
  };

  const catchPokemon = async () => {
    try {
      const result = await axios.get(
        `${URL_API}/catch-pokemon?name=${pokemon.name}`
      );

      const nickName = await popUp.renameResponse(result.data, pokemon);
      setRedirect(true);
      dispatch(gotPokemon(pokemon, nickName));
    } catch (e) {
      popUp.failedResponse(e.response.data.name);
    }
  };

  return (
    <>
      {redirect ? <Navigate replace to={"/my-pokemon-list"} /> : null}
      <Stack gap={3}>
        <div className="col-md-12 col-lg-12 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Tangkap Pokemon Ini!</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2"></div>
            </div>
          </div>
          <Card body className="mb-3">
            <div className="card-body">
              <div className="container">
                <div className="row mt-3">
                  <div className="col-6">
                    <img
                      height={200}
                      width={100}
                      style={{ width: "100%" }}
                      src={
                        pokemon.sprites !== undefined
                          ? pokemon.sprites.other.dream_world.front_default
                          : null
                      }
                      alt=""
                    />
                  </div>
                  <div className="col-6 d-flex flex-column justify-content-center">
                    <h4>{pokemon.name}</h4>
                    {/* <h5>${"Price"}</h5> */}
                    <Stack gap={3}>
                      <Stack direction="horizontal" gap={2}>
                        {renderTypes()}
                      </Stack>

                      <div className="d-flex flex-row align-items-center ">
                        <button
                          onClick={catchPokemon}
                          className="btn btn-outline-success me-4"
                          style={{ marginRight: "20px" }}
                        >
                          Tangkap
                        </button>
                      </div>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="col-md-12 col-lg-12 px-md-4">{renderMoves()}</div>
      </Stack>
    </>
  );
}

export default PokemonDetail;
