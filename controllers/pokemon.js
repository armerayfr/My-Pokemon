const pokemon = require("../models/pokemon");

const catchingPokemon = async (req, res, next) => {
  try {
    if (!pokemon.isGetPokemon(0.5)) {
      console.log("gagal");
      res.status(404).send("Gagal mendapatkan Pokemon");
    }

    res.status(201).send(`Berhasil mendapatkan ${req.query.name}`);
  } catch (err) {
    console.log(err);
  }
};

const releasePokemon = async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const renamePokemon = async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

module.exports = { catchingPokemon, releasePokemon, renamePokemon };
