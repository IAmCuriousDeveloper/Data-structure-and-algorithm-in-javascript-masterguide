//there is one senario when our array is almost sorted then we can drastically reduced the time complexity of the bubblesort
function bubblesort(arr){
    var noswapshappen;
    for(var i = arr.length; i>0; i--){
        noswapshappen = true;
        for(var j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noswapshappen = false;
            }
        }
        if(noswapshappen) break;
    }
    return arr;
}
bubblesort([7,1,2,3,4,5,6])
//[1,2,3,4,5,6,7]
//here we use noswapshappen variable to check whether thee swaps happen or not if happen then we assign the noswapshappen variable to false;otherwise it will be true and the array is sorted 