// //Start looping from with a variable called i (the end of the array) towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

function bubblesort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
bubblesort([4, 7, 9, 21, 4, 6, 7, 8]);
//(8) [4, 4, 6, 7, 7, 8, 9, 21]

//we are moving from the last towards the beginning because we removed the redundant check with the undefined(it will happen if we move from beginning to end)

//wortscase o(n^2) bestcase with almostsorted O(n) linear time
