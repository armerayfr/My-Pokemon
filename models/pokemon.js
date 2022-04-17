class Pokemon {
  isGetPokemon(prob) {
    return Math.random() < prob;
  }

  isPrimeNumber(input = Math.ceil(Math.random() * 10 + 11)) {
    const modulus = [2, 3, 5, 6, 11];

    for (let i = 1; i < modulus.length; i++) {
      if (input % modulus[i] === 0) return false;

      return true;
    }
  }

  fibonacci(input) {
    if (input === 0) {
      return 0;
    } else if (input < 3) {
      return 1;
    } else {
      return this.fibonacci(input - 1) + this.fibonacci(input - 2);
    }
  }
}

module.exports = new Pokemon();
