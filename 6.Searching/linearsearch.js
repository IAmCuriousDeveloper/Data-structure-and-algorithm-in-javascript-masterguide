//Linear Search Pseudocode
//This function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1

function linearSearch (arr,num){
    for(var i=0;i<arr.Length;i++){
      if(arr[i] === num) return i;  
    }
    return -1;
}
linearSearch([1,2,3,4,54,57],2); //1

//time complexity ->
//Worst O(n) 
//Average O(n)
//best O(1)      




  