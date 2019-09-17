// Call Stack Game
// 1. Push called Fn on stack.

// 2. Execute Fn body.

// until...

// ... another fn is called:

//      Pause the current execution and start at step 1.

// ... a return is hit:

//      Pop the current Fn off the stack.

//      Resume executing the previous Fn.
var tracker = 0;
const callMe = () => {
  tracker++;
  if (tracker === 3) {
    return console.log("loop completed");
  } else {
    console.log("looping again");
    callMe();
  }
};
callMe();

//pattern for recursion
//wrapper function
//accumulators

//lets see wrapper function
function wrapperFnLoop(start, end) {
  function recurse(i) {
    console.log(`looping from ${start} until ${end}`);

    if (i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}

function MemoFnLoop(i, end) {
  console.log(`looping from ${i} until ${end}`);
  if (i < end) {
    MemoFnLoop(i + 1, end);
  }
}

console.log("~~~ wrapperFnLoop ~~~");
wrapperFnLoop(1, 5);
console.log("~~~ MemoFnLoop ~~~");
MemoFnLoop(1, 6);

//using accumulator recursion
function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, "");
}

joinElements(["s", "cr", "t cod", " :) :)"], "e");
