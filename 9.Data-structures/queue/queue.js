//fifo principle
//used in gaming (pubg lobby)
//background tasks (callback queues)
//uploading resources
//priniting

//just like stack we can implement queue with array and linkedlist
//implementing with array
var queue = [];
//enqueue operation
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

//dequeue operation
//removing from the first
queue.shift();

//well its ok to make queue for shorter list but array came with indices and we have again problm with that
//coz when we push data its ok buttt when we shift it .it will rearrange its indices

//now lets implement queue with linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    var newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    var returnedNode;
    if (this.size === 0) return "queue already empty";
    if (this.size === 1) {
      returnedNode = this.first.value;
      this.first = null;
      this.last = null;
    } else {
      returnedNode = this.first;
      this.first = this.first.next;
    }
    this.size--;
    return returnedNode.value;
  }
}

//time complexity
// insertion -O(1)
// removal -O(1)
// searching -O(n)
// access-O(n)
