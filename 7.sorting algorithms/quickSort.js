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