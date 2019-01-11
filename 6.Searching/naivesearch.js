//Suppose you want to count the number of times a smaller string appears in a longer string
//A straightforward approach involves checking pairs of characters individually

//ex iamthegreatasiam (seach for iam) there are two at the starting and the last.

//Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

function naivesearch(long,short){
    var count = 0;
    for(var i=0;i<long.length;i++){
        for(var j= 0;j<short.length;j++){
            if(short[j]!==long[i+j]){
                break;
            }
            if(j===short.length - 1){
                count++;
            }
        }
    }
    return count;
}

//there is one better approach than this naive search kmp method
// The Knutt-Morris-Pratt algorithm offers an improvement over the naive approach
// Published in 1977
// This algorithm more intelligently traverses the longer string to reduce the amount of redundant searching
