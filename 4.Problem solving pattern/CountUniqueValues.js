//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

//i am using two pointer here. 'i' is pointing to the starting of the array and the j is pointing to the second num of the array if both num matches we simply move the j if they not match we increment the i and  copy the element of the j to the ith index of the array so that at last we return the number of element on the array.
//its a bit tricky right? it takes me 20 min to solve this question at first.
