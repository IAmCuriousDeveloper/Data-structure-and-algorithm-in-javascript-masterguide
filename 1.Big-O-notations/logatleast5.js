function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
      console.log(i);
    }
  }
  //O(n).coz it will run upto n times for the bigger value.
  