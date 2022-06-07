//lifo principle
//stack is used to manage function invocation in javascript
// undo/redo
//route
//there are many ways we can implement a stack
//they are not built in datastructure in Js
//lets start with the array implementations

var stack = []
stack.push('1')
stack.push('2')
stack.push('3')
stack.push('4')

stack.pop()
stack.pop()
stack.pop()
//push and pop add and remove items from the end of an array(and its efficient)
//if we use shift and unshift which increases complexity with O(n) ,because it re suffle the indices of the array

//implementaion with linkedlist
//   [1, 2 , 3 , 4]
//   last       first
//stack is implemented as top to bottom next of fisrt will be 3;
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    var newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      var temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }

  //since we have implemented a stack with the linklist its tempting to think that we can use the push and pop methods already there buttt ... push and pop in stack should take constant time while linklist is taking O(n) it has to go all the way to previous last to pop out the item and we dont need it here
  pop() {
    if (!this.first) return null
    var temp = this.first
    //if one item
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}

var stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack)

//time complexity
// insertion -O(1)
// removal O(1)
// searching O(n)
// access O(n)

//if you want to imlement a stack with pseduclassical methods then go to stackWithPseduclassicalMethods.js
