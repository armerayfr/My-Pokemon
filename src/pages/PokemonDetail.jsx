import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Container, Button, Row, Badge, Stack } from "react-bootstrap";

function PokemonDetail(props) {
  const { name } = useParams();

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
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
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                  <h4>Nama Pokemon</h4>
                  {/* <h5>${"Price"}</h5> */}
                  <Stack gap={3}>
                    <div>
                      <Badge bg="primary">Grass</Badge>
                    </div>

                    <div className="d-flex flex-row align-items-center ">
                      <button
                        onClick={Event}
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

      <div className="col-md-12 col-lg-12 px-md-4">
        <div className="bg-light border">Third item</div>
        <div className="bg-light border">First item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">First item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Second item</div>

        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Second item</div>
      </div>
    </Stack>
  );
}

export default PokemonDetail;
