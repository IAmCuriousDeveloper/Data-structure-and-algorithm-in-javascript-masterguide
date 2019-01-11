// Binary search is a much faster form of search
// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
// Binary search only works on sorted arrays!

//This function accepts a sorted array and a value
//Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
// Create a pointer in the middle
// If you find the value you want, return the index
// If the value is too small, move the left pointer up
// If the value is too large, move the right pointer down
// If you never find the value, return -1




//Divide and Conquer
//lets search for the number 15 here 
//[ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ]
//first we take the center of the array and check that the no contains 15 or not .if it is 15 then return the index.
//then we will check the no is greater than 15 or less than 15 and according to that we select the half of the array
//lets say we get the center 11 here and its not 15 ,then we know that 15 is greater than 11 so we ignore the left side of the array and search for the right part
//[ 11, 12, 15, 16, 17, 18, 19 ]
//then again we select the middle ,lets say this time we get 16 then we know that 15 is less than 16 and we can ignore the right part
//[ 11, 12, 15, 16]
//lets say now the middle is 15 and we get the no. 
//isn't it so less searchs than linear search

function binarySearch(arr,num){
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor(start + end)/2;
    while(arr(middle)!==num && start <= end){
        if(num < arr[middle]){
            end = middle-1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start+end)/2);
    }
    if(arr[middle] === num){
        return middle;
    }
    return -1;
}

//time complexity worst case O(nlogn) 
//best o(1)