const pokemon = require("../models/pokemon");
const { Api404Error } = require("../utils/Error");

const catchingPokemon = async (req, res, next) => {
  try {
    if (!pokemon.isGetPokemon(0.5)) {
      throw new Api404Error("Gagal mendapatkan pokemon");
    }

    res.status(201).send(`Berhasil mendapatkan ${req.query.name}`);
  } catch (err) {
    next(err);
  }
};

const releasePokemon = async (req, res, next) => {
  try {
    if (!pokemon.isPrimeNumber()) {
      throw new Api404Error("Gagal melepaskan pokemon");
    }

    res
      .status(200)
      .send({ message: "sukses melepas pokemon", id: req.query.id });
  } catch (err) {
    next(err);
  }
};

const renamePokemon = async (req, res, next) => {
  try {
    const fibSeq = pokemon.fibonacci(+req.query.versionName);
    const nickname = req.query.nickname.replace("Rename", `-${fibSeq}`);
    res.status(200).send({ nickname, versionName: ++req.query.versionName });
  } catch (err) {
    next(err);
  }
};

module.exports = { catchingPokemon, releasePokemon, renamePokemon };
