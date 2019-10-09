//what is priority Queue
//-> its just like a queue but every element has some additional value we called priority which decide which element will served first (usually element will lower priority served first)

//ex-> OS uses proiority queue

//we usually use min binary heap to construct priority Queue so that addition and removal takes O(logn);
//here i use max binary heap

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enQueue(val, priority) {
    //insert and bubble (important)
    var newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUP();
  }
  bubbleUP() {
    //we are storing in array so always start with last
    var valIndex = this.values.length - 1;
    const value = this.values[valIndex];

    while (valIndex > 0) {
      var parentIndex = Math.floor((valIndex - 1) / 2);
      var parentValue = this.values[parentIndex];
      if (parentValue.priority >= value.priority) break;
      if (parentValue.priority < value.priority) {
        //swapping
        this.values[parentIndex] = value;
        this.values[valIndex] = parentValue;
      }
      valIndex = parentIndex; //updating index to recheck parent element and parent value
    }
  }

  deQueue() {
    var root = this.values[0];
    var lastValue = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = lastValue;
      this.bubbleDown();
    }
    return root;
  }
  bubbleDown() {
    let idx = 0;
    var element = this.values[idx];
    const length = this.values.length;
    let leftChildIndex = 2 * idx + 1;
    let rightChildIndex = 2 * idx + 2;
    let leftChild, rightChild;
    let swap = null;

    if (leftChildIndex < length) {
      leftChild = this.values[leftChildIndex];
      if (leftChild.priority > element.priority) {
        swap = leftChildIndex;
      }
    }
    if (rightChildIndex < length) {
      rightChild = this.values[rightChildIndex];
      if (
        (swap === null && rightChild > element.priority) ||
        (swap !== null && rightChild.priority > leftChild.priority)
      ) {
        swap = rightChildIndex;
      }
    }
    if (swap === null) return;
    this.values[idx] = this.values[swap];
    this.values[swap] = element;
    idx = swap;
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

var myPriority = new PriorityQueue();
myPriority.enQueue("ds and algo", 3);
myPriority.enQueue("accident", 5);
myPriority.enQueue("react", 6);
myPriority.enQueue("redux", 7);
myPriority.enQueue("node.js", 8);
myPriority.enQueue("mongodb", 9);
console.log(myPriority);
// console.log(myPriority.deQueue());
// console.log(myPriority.deQueue());
// console.log(myPriority.deQueue());
//max priority element will out first

//right now our priority queue will not ensure that the elemnt with same priority will deQueued with fcfs basis ,for that we have to implement different logic like add date /time to property of the node
