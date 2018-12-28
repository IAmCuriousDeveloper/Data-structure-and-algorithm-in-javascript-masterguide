function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(2 * arr[i]);
    }
    return newArr;
  }
  //here we initialise one array newarr which takes constant space 
  //but inside loop this array is being used over and over again and push operation is happening which depends on the input we provide to the double function as an array 
  //so order of space complexity is O(n). clearly depend on inputs .

