function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
  }
  //see here there are two loops and it doesn't mean that its order is O(n^2) both the above loops are independent(that is not nested) so the big-O will be O(n).only actually O(2n). and we can neglect the constant part. 