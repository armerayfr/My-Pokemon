class Pokemon {
  isGetPokemon(prob) {
    return Math.random() < prob;
  }
}

module.exports = new Pokemon();
