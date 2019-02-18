
function sumRange(num){
    if(num === 1) return 1; //base case 
    return num + sumRange(num-1);
 }

 //have a little practice with it.
 //what is the base case and what if we didn't return  think about it.

 //see this and run this too and look what happen?
 
 function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num);
}

function factorial(num){
    if(num === 1) console.log(1) ;
    return num * factorial(num-1);
}

//Note above two recursive function is wrong.

//1st one didn't have good input while calling it again(logic is wrong)
//2nd one doesn't have base case (break value);