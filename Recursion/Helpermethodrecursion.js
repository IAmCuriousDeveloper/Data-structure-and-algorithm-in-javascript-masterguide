function outer(input){
    
    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    
    helper(input)

    return outerScopedVariable;

}

//what is helper function lets see this first
//in this we have two function 1st is outer function then one inside it which recurse(iterate) itself 
//we call the outer function only inside one called itself.

//if you are familier with closure of javascript it something like it only (but not closure).we remember the outerscopedvariable if we call iterative(inside) function again and again. 

//lets see one example
//we are collecting odd values and manupulate the result array again and again by inner function.
function collectOddValues(arr){
    
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;

}