class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //adding at the end or start if 1st item
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return "list is already empty";
    if (this.length === 1) {
      let popped = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return popped;
    } else {
      let popped = this.tail;
      let oneBehind = this.tail.prev;
      oneBehind.next = null;
      oneBehind = this.tail;
      popped.prev = null; //this is imp
      this.length--;
      return popped;
    }
  }
  //remove node from the start
  shift() {
    if (!this.head) return "list is empty";
    if (this.length === 1) {
      var nodeToReturn = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToReturn;
    } else {
      var nodeToReturn = this.head;
      var newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
      nodeToReturn.next = null;
      this.length--;
      return nodeToReturn;
    }
  }
  //adding node at the beginning
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //we get optimized get in dll
  get(index) {
    if (index > this.length || index < 0) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    var count;
    var current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (index !== count) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (index !== count) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.value = value;
      return "value set successfully";
    } else {
      return "unable to set the value of undefined node";
    }
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    var newNode = new Node(value);

    if (index === 0) !!this.unshift(value);
    if (index === this.length) !!this.push(value);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    var removedNode;
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) {
      removedNode = this.shift();
      return removedNode;
    }
    if (index === this.length - 1) {
      removedNode = this.pop();
    }
    var foundNode = this.get(index);
    var beforeNode = foundNode.prev;
    var afterNode = foundNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return "removed successfully";
  }
}

var myDoubly = new DoublyLinkList();
//console.log(myDoubly);
myDoubly.push("i am the first");
myDoubly.push("i am the second");
myDoubly.push("i am the third");

//console.log(myDoubly);

let ans = myDoubly.remove(1);
console.log(ans);
console.log(myDoubly);

//for reversing a dll there is no need becoz we can traverse it easily with prev node from tail;
//incase you want to reverse inplace you can do that.like we did in singly link list
//time complexity
// insertion - O(1)
// removal O(1)
// searching O(n)
// access O(n)
//actually searching is O(n/2) but its O(n ) only

//browser history
