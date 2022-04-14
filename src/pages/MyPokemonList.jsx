import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Button, Row } from "react-bootstrap";

function MyPokemonList() {
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
              </div>
            </div>
          </Container>
        </div>
      </Card>
    </div>
  );
}

export default MyPokemonList;
