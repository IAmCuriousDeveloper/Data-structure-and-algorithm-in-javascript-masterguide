//Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

function maxSubarraySum(arr,num){
if(num > arr.length){
    return null;
}
var max = -Infinity;
for(let i = 0; i < arr.length-num+1;i++){
   var temp = 0;
   for(j=0;j<num;j++){
       temp += arr[i+j];
   }
   if(temp>max){
       max = temp;
   }
}
return max;
}

//O(n^2)

//above function takes two argument array and the num if num is greater than array's length then we simply return null .then we set max variable to -infinity (to cover the edge case of negative no. i.e if we are not only deal with the positive no. then we are using another loop for the second argument(num) so that we add that much number each time.) then at last we use 'if' statement to check temp is greater than max or not if it is we set max with temp. 
//one thing to notice that we are using two loops thats a naive solution and the second thing is (in the first loop we set the condition so that we are not over passing the boundary of the array.) 

//now lets see the sliding window solution i know its a lot but keep practicing

function maxSubarraySumq(arr,num){
    let maxsum = 0;
    let tempsum = 0;
    if(arr.length<num) return null;
    for(let i = 0;i<num;i+=i){
        maxsum += arr[i];
    }
    tempsum = maxsum;
    for(let i = num;i<arr.length ;i++){
        tempsum = tempsum - arr[i -num] + arr[i];
        maxsum = Math.max(maxsum,tempsum);
    }
    return maxsum;
}

//explanation -> in this approach we act smartly we have two variable maxsum and tempsum and we loop one time to add all the number (provided by the second argument) to maxsum .then instead of increment from the beginning and adding allover again we simply add from the right and subtract from the left and keep on checking for the maxsum. 

//O(n)