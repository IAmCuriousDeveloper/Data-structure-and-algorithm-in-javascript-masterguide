function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
      console.log(i);
    }
  }

  //it will not log more than 5 so constant term and gives O(1).