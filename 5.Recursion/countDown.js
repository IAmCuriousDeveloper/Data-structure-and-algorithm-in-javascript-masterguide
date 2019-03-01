function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return; //base case
    }
    console.log(num);
    num--;
    countDown(num);
}

//there is two thing to note here the input and the base 
//we have to terminate the iteration by base case ,if we dont do that it will ran to infinite loop
