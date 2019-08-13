//there is one senario when our array is almost sorted then we can drastically reduced the time complexity of the bubblesort
function bubblesort(arr) {
  var noSwapHappen;
  for (var i = arr.length; i > 0; i--) {
    noSwapHappen = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwapHappen = false;
      }
    }
    if (noSwapHappen) break;
  }
  return arr;
}
bubblesort([7, 1, 2, 3, 4, 5, 6]);
//[1,2,3,4,5,6,7]
//here we use noSwapHappen variable to check whether thee swaps happen or not if happen then we assign the noSwapHappen variable to false;otherwise it will be true and the array is sorted
