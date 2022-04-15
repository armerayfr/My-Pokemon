/**
 * @start from 0
 * @continue - infinity
 * @math Fn = Fn-1 + fn-2
 */

function fibonacci(input) {
  if (input < 3) {
    return 1;
  } else {
    return fibonacci(input - 1) + fibonacci(input - 2);
  }
}

console.log(fibonacci(4));
