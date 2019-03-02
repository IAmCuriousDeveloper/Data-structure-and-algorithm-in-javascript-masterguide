//The sorting algorithms we've learned so far don't scale well
//Try out bubble sort on an array of 100000 elements, it will take quite some time!
//We need to be able to sort large arrays more quickly
//There is a family of sorting algorithms that can improve time complexity from O(n  ) to O(n log n)
//There's a tradeoff between efficiency and simplicity
//The more efficient algorithms are much less simple, and generally take longer to understand

//what is mergesort and how it works?
//It's a combination of two things - merging and sorting!
//Exploits the fact that arrays of 0 or 1 element are always sorted
//Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

//we will make a helper function through which we can merge two sorted array
//we take two array we continue loop the two array until one of them finished then we return the result array

// Create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't looked at...
// If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// Once we exhaust one array, push in all remaining values from the other array


function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
    } else if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr1[i]);
      results.push(arr2[j]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

//the below function has just one method recursively split the two array until they have the lenght of 1 then pass the halves (left and right) to the merge function above
 function mergeSort(arr){
     if(arr.length<=1) return arr; 
     let mid = Math.floor(arr.length/2);
     let left = mergeSort(arr.slice(0,mid));
     let right = mergeSort(arr.slice(mid));
 }

//  In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
//  Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
//  This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

//time complexity O(nlogn) space complexity O(n). 

//why O(nlogn)? coz O(logn) decomposition and O(n) comparision per decompostion