/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

// Euclid's algorithm
function gcd(num1, num2) {
  var min = Math.min(num1, num2);
  var max = Math.max(num1, num2);
  if (max % min === 0) return min;
  else return gcd(min, max % min);
}

// Dijkstra's algorithm
function gcd(num1, num2) {
  if (num1 === num2) return num1;
  else if (num1 > num2) return gcd(num1 - num2, num2);
  else return gcd(num1, num2 - num1);
}

//iterative method (not complete)
function GCD(num1, num2) {
  if (num1 === 1 && num2 === 1) return 1;
  if (num1 === 0 || num2 === 0) return "you can't have the GCD of 0";

  let small, big;
  //checking small and big
  if (num1 > num2) {
    big = num1;
    small = num2;
  }
  let memo = {
    small: [],
    big: []
  };
  if (big % small === 0) return small;
  //collecting small number factor
  for (let i = 2; i <= small; i++) {
    if (small % i === 0) {
      memo.small.push(i);
    }
  }
  //collecting big number factor
  for (let j = 2; i <= big; i++) {
    if (big % j === 0) {
      memo.big.push(j);
    }
  }
  console.log(memo);
  //checking for the highest factor in both the array in memo
  for (let k = memo.small.length - 2; k >= 0; k--) {
    if (memo.big.includes(memo.small[k])) return memo.small[k];
  }
}
