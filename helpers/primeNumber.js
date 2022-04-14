/**
 *
 * @param {*} input (a number of char)
 * @constrait input 1 - 100
 * @input is random 12 - 100
 * @step1 check if number is prime
 * @primeNumber = number % 2, 3, 5, 7, 11 !== 0
 *
 */

function primeNumber(input = Math.ceil(Math.random() * 10 + 11)) {
  const modulus = [2, 3, 5, 6, 11];

  for (let i = 1; i < modulus.length; i++) {
    if (input % modulus[i] === 0) return false;

    return true;
  }
}

console.log(primeNumber());
