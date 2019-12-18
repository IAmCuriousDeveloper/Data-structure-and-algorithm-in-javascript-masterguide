//write a factorial function recursively so that it accept a arument and return the factorial of that number

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
