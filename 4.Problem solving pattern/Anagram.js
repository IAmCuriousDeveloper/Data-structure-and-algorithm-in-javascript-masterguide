//ANAGRAMS? WHAT IS ANAGRAMS
//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//ex.
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

 function validAnagram(str1,str2){
     if(str1.length !== str2.length){
         return false;
     }

     const lookup = {}

     for (let i = 0; i < str1.length; i++) {
         let letter = str1[i];
         //if the letter is in the lookup then increment one otherwise initialize it to 1
         lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
     }
     for (let i = 0; i <str2.length; i++) {
         const letter = str2[i];
         //checks if its there or not 
         if(!lookup[letter]){
             return false;
         }else{
             // decrement one from the lookup for each letter present
             lookup[letter] -= 1;
         }
         
     }
     return true;
 }

 //O(n) is the time complexity

 //note there can be some edge cases upper/lowercase,or numbers ,empty string etc here we are taking lowercase alphabets only.