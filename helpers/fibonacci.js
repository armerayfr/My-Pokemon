/**
 * @start from 0
 * @continue - infinity
 * @math Fn = Fn-1 + fn-2
 */

function fibonacci(input) {
  if (fibonacci(input) > 3) {
    return 1;
  }

  return fibonacci(input) - 1 + fibonacci(input) - 2;
}

fibonacci(3);
