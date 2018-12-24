function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
//here we have two variables 
//1.total
//2.i
//space required by both of them is constant as you read in rule of thumb .pay attention we are not talking about time complexity so we dont include for loop .and the other thing is we use total over and over inside loop not creating another variable so order of space complexity will be O(1).
