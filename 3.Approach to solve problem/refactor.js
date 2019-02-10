//making solution for the alphanumeric input by using regular expression
function charCount(str){
    //made a object to return 
   var obj = {}
   //looping through the string char by char
   for (let i = 0; i < str.length; i++) {
       const char = str[i].toLowerCase();
       //checking char present or not
       if(/[a-z0-9]/.test(char)) {
           if(obj[char] > 0){
           obj[char]++;
           }
           else{
            obj[char] = 1;
       }
       }
   }
   //returning obj.
   return obj;}
//to be honest i would be able to do it upto here only.
//but we can improve it even further. i have done quite a research.

//solution 2
//changed the for loop to forof loop coz it reduce space complexity
function charCount(str){
   var obj = {}
   for (var char of str) {
       char = char.toLowerCase();
       if(/[a-z0-9]/.test(char)) {
          obj[char] = ++obj[char] || 1;
       }
   }
   return obj;}
//solution 3. using ascii code 
//every alphabet/number has some code associated with it which we can check via charCodeAt() function .also using ascii code to verify letter/number is way more faster than regular expression.
//so we are making alpanumeric function which takes each char and checks whether its alphaumeric or not.
function charCount(str){
    var obj = {}
    for (var char of str) {
        if(alphanumeric(char)) {
        char = char.toLowerCase();
           obj[char] = ++obj[char] || 1;
        }
    }
    return obj;}

    function alphanumeric(char){
        var code = char.charCodeAt(0);
        if(!(code> 47 && code < 58)&& //numeric [0-9]
        !(code> 64 && code < 91)&& //uppercase
        !(code> 96 && code <123)){//lowercase
            return false
        }
        return true;
    }

//thats it for the final solution i came up with right now.i will appreciate the other solution also please Pull request me.