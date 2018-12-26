 function charCount(str){
     //made a object to return 
    var obj = {}
    //looping through the string char by char
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        //checking char present or not
        if (obj[char] > 0) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    //returning obj.
    return obj;
}
//the above example is case sensitive (i.e it stores the upper/lowercase different)
//we will make for only lower or only uppercase. also we will add the alphanumeric part

