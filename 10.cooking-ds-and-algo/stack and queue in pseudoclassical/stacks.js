//LIFO
//in workshop they have used the string for the storage and i have used the array because its more convenient to use also push and pop methods are inbuilt so we dont have to write methods for string manupulation

//array as an underlying datastucture
// var Stack = function() {
//   this.storage = [];
//   this.size = this.storage.length;
// };

// Stack.prototype.push = function(val) {
//   this.storage.push(val);
//   this.size += 1;
//   console.log("item added successfully");
// };

// Stack.prototype.pop = function() {
//   if (this.size === 0) {
//     console.log("stack is already empty");
//   } else {
//     let popped = this.storage.pop();
//     this.size -= 1;
//     console.log(`${popped} has been removed`);
//   }
// };

// Stack.prototype.stackSize = function() {
//   if (this.size === 0) return console.log("you stack is empty");
//   console.log(`the size of your stack is ${this.size}`);
// };

// var mystack = new Stack();

// mystack.push("tomato");
// mystack.push("garlic");
// mystack.push("spinach");
// mystack.push("salt");
// mystack.pop();

// mystack.stackSize();

//lets implement this stack and using object(linklist) as a underlying Datastructure

//[ 1 , 2 , 3 , 4 ]
//  last       first
var Node = function(value) {
  this.value = value;
  this.next = null;
};

var Stack = function() {
  this.first = null;
  this.size = 0;
  this.last = null;
};

Stack.prototype.push = function(value) {
  var newNode = new Node(value);
  if (!this.first) {
    this.first = newNode;
    this.last = newNode;
  } else {
    var temp = this.first;
    temp.next = newNode;
    this.first = newNode;
  }
  console.log(`${newNode.value} inserted successfully`);
  this.size++;
};

Stack.prototype.pop = function() {
  if (!this.first) return "stack is already empty";
  this.size--;
  console.log(`${this.first.value} popped`);
};

Stack.prototype.Stacksize = function() {
  console.log(`the size of your stack is ${this.size}`);
};

Stack.prototype.peek = function() {
  if (!this.first) return null; //this line is just for minStack(remove it for simple stack)
  return this.first.value;
};

var mystack = new Stack();
// mystack.push("milk");
// mystack.push("cheese");
// mystack.push("butter");
// mystack.push("soya");

// mystack.pop();
// mystack.Stacksize();
// mystack.peek();

//========================================================================================================
//MIN-STACK
//implement a min stack which gives the minimum value from the stack in constant time

function MinStack() {
  this._min = new Stack();
}
//o(1)
MinStack.prototype.push = function(value) {
  if (this._min.peek() < value) {
    this._min.push(this._min.peek());
  } else {
    this._min.push(value);
  }
};

MinStack.prototype.pop = function() {
  this._min.pop();
};

MinStack.prototype.MinStacksize = function() {
  this._min.Stacksize();
};

MinStack.prototype.peek = function() {
  this._min.peek();
};

var myMinStack = new MinStack();

myMinStack.push(34);
myMinStack.push(13);
myMinStack.push(56);
myMinStack.push(12);
myMinStack.push(90);

console.log(myMinStack);

//using storage as string

var Stack = function() {
  this.storage = " ";
};

Stack.prototype.push = function(val) {
  this.storage = this.storage.concat("-", val);
};

Stack.prototype.pop = function() {
  //go upto the last "-" then slice of the remaining string
  var str = this.storage.slice(this.storage.lastIndexOf("-") + 1);
  //store the string on storage before the last character
  this.storage = this.storage.substring(0, this.storage.lastIndexOf("-"));
  return str;
};
Stack.prototype.size = function() {
  if (this.storage.length === 1) {
    return console.log("stack is empty");
  }
  var count = 0;
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === "-") count++;
  }
  console.log(`your stack size is ${count}`);
};
