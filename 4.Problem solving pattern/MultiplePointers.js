//MULTIPLE POINTERS
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

// Very efficient for solving problems with minimal space complexity as well

//AN EXAMPLE
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

function sumZero(arr){
    //starts with the first element 
    for(let i = 0; i < arr.length; i++){
        //checks with every other elements after the ith one 
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
    return undefined;
}
//Time Complexity - O(N^2)
//Space Complexity - O(1)
//the above is a naive approach coz of easy looking but nested loop (cost is more)

//refactored one (this approach is applicable only if we have sorted array.)
//otherwise we have to do it in above manner.

//in this approach we are using two pointers at left(start) and at right(end) of the array .we keep on checking wether left<right or not also we are keep track of the sum of both the values if sum = 0 then we found our elements if sum > 0 then we decrement right(from end) else increment from the left(start) and working towards the middle.

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
    return undefined;
}


