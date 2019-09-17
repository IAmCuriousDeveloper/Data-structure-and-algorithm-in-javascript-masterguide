// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// In order to implement quick sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
// Given an array, this helper function should designate an element as the pivot
// It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
// The order of elements on either side of the pivot doesn't matter!
// The helper should do this in place, that is, it should not create a new array
// When complete, the helper should return the index of the pivot

// The runtime of quick sort depends in part on how one selects the pivot
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
// For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)

//================================================================================================
//pseudocode
// It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index
// Return the pivot index

function pivot(arr, left = 0, right = arr.length - 1) {
  //regular swap function
  function swap(arr, index, i) {
    let temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }
  let pivot = arr[left]; //value
  let index = left; //index (it defines how many elements are there which are smaller)
  for (let i = 1; i < arr.length; i++) {
    //if pivot is smaller don't do anything
    //if greater ,increment the index(i.e one element we found which is smaller and swap it with current element i )
    if (pivot > arr[i]) {
      index++;
      swap(arr, index, i);
    }
  }
  //after loop swap it and return it
  swap(arr, index, left);
  return index;
}

//lets implement the quicksort

function quicksort(arr, left = 0, right = arr.length - 1) {
  //continue till we have single element left in the array
  if (left < right) {
    pivotindex = pivot(arr, left, right);
    //quicksorting the left side
    quicksort(arr, left, pivotindex - 1);
    //quicksorting the right side
    quicksort(arr, right, pivotindex + 1);
  }
  return arr;
}

let arr = [3, 4, 5, 6, 8, 1, 0, 8];

//time complexity of quick sort
//best case ->O(nlogn)
//avg case ->O(nlogn) logn decomposition and n comparision
//worst case ->O(n^2);
//space complexity ->O(logn) its a stack space
//worst space complexity is ->O(n^2);

//its very important to choose pivot widely coz if in any case our array is already sorted then we divide the array in one side only (i.e) either left or right
//there is one more thing you can do while making quicksort which i learned in my made easy classes is use randomized quick sort
