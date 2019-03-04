// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// In order to implement quick sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
// Given an array, this helper function should designate an element as the pivot
// It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
// The order of elements on either side of the pivot doesn't matter!
// The helper should do this in place, that is, it should not create a new array
// When complete, the helper should return the index of the pivot

function pivot (arr,first,last){
    let mainpivot = first;
    let pivot = first;
    for(let i =1;i<last-1;i++){
        if(arr[pivot]<arr[i]) continue;
        else {
        swap(pivot,i);
        pivot++;
        }
    }

    function swap(a,b){
        let temp;
        temp = arr[a];
        arr[a] = arr[b] ;
        arr[b] = temp;
    }
    return pivot;
}
