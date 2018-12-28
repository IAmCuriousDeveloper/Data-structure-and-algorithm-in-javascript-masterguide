// This pattern uses objects or sets to collect values/frequencies of values

// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// AN EXAMPLE
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

//The naive approach
function same(arr1, arr2){
    //taking two arrays as the parameter
    if(arr1.length !== arr2.length){
        return false;
        //if the length of two arrays are not equal then return false
    }
    for(let i = 0; i < arr1.length; i++){
        //looping through array one and checking if there's an index is there or not for respective value.(for 2 = 4 ,for 3 = 9 etc)
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //now correctIndex contains some index if value present
        if(correctIndex === -1) {
            //if not then return false
            return false;
        }
        //if its there's a value then remove that value from array2
        arr2.splice(correctIndex,1)
    }
    return true
}
//O(n^2) because of indexOf checks which loops array 2 for all the keys in array 1

//now lets see the refactored version

function same(arr1, arr2){
    //if length is unequal return false
    if(arr1.length !== arr2.length){
        return false;
    }
    //making two obejcts to store the frequency of the respective elements in the array
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //storing frequency of array1
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    //storing frequency of array2
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    //logic below for every key in frequencyccounter1 obj 
    //if there exists a squaredkey in frequencyccounter2 obj if yes then check the value of respective key in both the objects.if true return true else false.
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2],[9,1,4,4]) //true

//NOTE: the above approach may looks scary/complex to you at the first glance but its quite fast than the previous approach.  O(n).  because of only one time looping

//we breaks the inputs (array/string) into the objects so that we compare it quickly later its the backbone of this approach

