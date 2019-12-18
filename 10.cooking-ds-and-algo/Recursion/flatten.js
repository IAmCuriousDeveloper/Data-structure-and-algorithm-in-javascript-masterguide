/*
Implement a function that flattens a nested array.
flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/
//important question

function flatten(arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      output.push(arr[i]);
    } else if (Array.isArray(arr[i])) {
      output = output.concat(flatten(arr[i]));
    }
  }
  return output;
}

console.log(flatten([1, [2], [3, [[4]]]]));
