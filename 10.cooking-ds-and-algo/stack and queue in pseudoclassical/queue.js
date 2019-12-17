//fifo
function Queue() {
  this.storage = [];
  this.size = this.storage.length;
}

Queue.prototype.enqueue = function(val) {
  this.storage.push(val);
  this.size++;
};

Queue.prototype.dequeue = function() {
  var deQueued = this.storage.shift();
  this.size--;
  return deQueued;
};

Queue.prototype.QueueSize = function() {
  console.log(`The size of your Queue is ${this.size}`);
};

var myQueue = new Queue();
myQueue.enqueue("milk");
myQueue.enqueue("cheese");
myQueue.enqueue("butter");

console.log(myQueue.dequeue()); //milk
console.log(myQueue.dequeue()); //cheese

myQueue.QueueSize();

//actually above is very simple to implement
