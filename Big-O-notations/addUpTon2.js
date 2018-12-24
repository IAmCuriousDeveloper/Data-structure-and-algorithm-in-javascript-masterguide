function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
//O(n) coz it contains a loop which runs the n times depend on input which inventually do the n operations within it.
  