// Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
// Fibonnaci's sequence:
// input    0 1 2 3 4 5 6  7  8  9 ...
// output   0 1 1 2 3 5 8 13 21 34 ...

function fibonacci(n) {
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));
// O(2^n) implementation

//using dynamic programming
// O(n) implementation

function fibonnaciDP(n) {
  //memo hold the number to directly return
  var memo = {
    0: 0,
    1: 1
  };
  function recurse(m) {
    if (memo[m] === undefined) {
      memo[m] = recurse(m - 1) + recurse(m - 2);
    }
    return memo[m];
  }
  return recurse(n);
}
