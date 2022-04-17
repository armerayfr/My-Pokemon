const pokemon = require("../models/pokemon");

const catchingPokemon = async (req, res, next) => {
  try {
    if (!pokemon.isGetPokemon(0.5)) {
      res.status(404).send("Gagal mendapatkan Pokemon");
    }

    res.status(201).send(`Berhasil mendapatkan ${req.query.name}`);
  } catch (err) {
    console.log(err);
  }
};

const releasePokemon = async (req, res, next) => {
  try {
    if (!pokemon.isPrimeNumber()) {
      res.status(404).send("Gagal melepas Pokemon");
    }

    res
      .status(200)
      .send({ message: "sukses melepas pokemon", id: req.query.id });
  } catch (err) {
    console.log(err);
  }
};

const renamePokemon = async (req, res, next) => {
  try {
    const fibSeq = pokemon.fibonacci(+req.query.versionName);
    const nickname = req.query.nickname.replace("Rename", `-${fibSeq}`);
    res.status(200).send({ nickname, versionName: ++req.query.versionName });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { catchingPokemon, releasePokemon, renamePokemon };
