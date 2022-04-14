import React, { useState, useEffect } from "react";
import { Card, Container, Button, Row } from "react-bootstrap";
import ListCard from "../components/Card/Card";
import axios from "axios";

function PokemonLists() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const callApiPokemon = async () => {
    try {
      console.log(offset);
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`
      );

      data.results.forEach((pokemon) => {
        fetchPokemon(pokemon.url);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPokemon = async (url) => {
    try {
      const { data } = await axios.get(url);
      setPokemons((prevState) => [...prevState, data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callApiPokemon();
  }, [offset]);

  const renderPokemons = () => {
    return pokemons.map((pokemon, i) => {
      return (
        <ListCard
          key={i}
          name={pokemon.name}
          img={pokemon.sprites.other.dream_world.front_default}
          url={pokemon.url}
        />
      );
    });
  };

  const offsetHandle = () => {
    setOffset(offset + 10);
  };

  return (
    <>
      {/* <Stack direction="horizontal" gap={3}>
        <ListCard />
      </Stack> */}
      <Container>
        <Row>
          <Card body className="mb-3">
            <div className="container-fluid">
              {/* <div className="row"></div> */}
              <Container>
                <div class="container">
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {renderPokemons()}
                  </div>
                </div>
              </Container>
            </div>
          </Card>
        </Row>
        <Row>
          <Button onClick={offsetHandle}>load more</Button>
        </Row>
      </Container>
    </>
  );
}

export default PokemonLists;
