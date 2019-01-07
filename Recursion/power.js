//Write a function which accepts a base an an exponent.  It should return the result of raising the base to that exponent.

power(2,4) //16
power(3,2) //9
power(3,3) //27

 function power(b,e){
var result ;
if(e===0) return 1;

return b * power(b,e-1);
}
