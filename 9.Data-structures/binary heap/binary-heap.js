//what is binary heap
//they are also tree
//heaps are similar to the binary tree with some special rules they follow
//max heap -> parents are always greater than the children
//min heap-> parent node is always smaller than the childs
//they are compact in nature (i.e) they can't be like bst with a chain like structure going on only one side(left/right)
//left always filled out fisrt
//they are used to implement priority queue also used in graph traversal

//heap array implementation
//formula (IMPORTANT)
//for any element stored at index n
//left child will be 2n+1
//right child will be 2n+2

//we get the opposite too(means if we got the child index we can get its parents)
//formula(IMPORTANT)
//parent -> floor of (n-1)/2

//inserting/adding to max heap
//if our elements value is lower than the parents (root) node then no problem we will keep inserting them in left to right order.
//but if value is higher than value we bubble it up to the top until it finds its actual place

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    //insert and bubble (important)
    this.values.push(value);
    this.bubbleUP();
  }
  bubbleUP() {
    //we are storing in array so always start with last
    var valIndex = this.values.length - 1;
    const value = this.values[valIndex]; //why const ? because value never change

    while (valIndex > 0) {
      var parentIndex = Math.floor((valIndex - 1) / 2);
      var parentValue = this.values[parentIndex];
      if (parentValue >= value) break;
      if (parentIndex < value) {
        //swapping
        this.values[parentIndex] = value;
        this.values[valIndex] = parentValue;
      }
      valIndex = parentIndex; //updating index to recheck parent element and parent value
    }
  }
  // remove() {
  //   if (this.values.length === 0) return "maxheap is already empty";
  //   var lastValue = this.values.pop(); //taking out last element
  //   var root = this.values[0]; //value to return
  //   this.values[0] = lastValue; //making last element root
  //   let i = 0; //assign parent to 0;
  //   while (i < this.values.length) {
  //     var leftChildIndex = 2 * i + 1;
  //     var rightChildIndex = 2 * i + 2;
  //     var leftChildValue = this.values[leftChildIndex];
  //     var rightChildValue = this.values[rightChildIndex];
  //     if (leftChildValue === undefined) {
  //       if (rightChildValue === undefined) return root;
  //       else if (lastValue < rightChildValue) {
  //         this.values[rightChildIndex] = lastValue;
  //         this.values[i] = rightChildValue;
  //         i = rightChildIndex;
  //       } else {
  //         return root;
  //       }
  //     } else if (rightChildValue === undefined) {
  //       if (leftChildValue === undefined) return root;
  //       else if (lastValue < leftChildValue) {
  //         this.values[leftChildIndex] = lastValue;
  //         this.values[i] = leftChildValue;
  //         i = leftChildIndex;
  //       } else {
  //         return root;
  //       }
  //     } else {
  //       var childToSwap =
  //         leftChildValue > rightChildValue ? leftChildIndex : rightChildValue;
  //       this.values[childToSwap] = lastValue;
  //       this.values[i] = leftChildValue;
  //       i = childToSwap;
  //     }
  //   }
  //   return root;
  // }

  extractMax() {
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
    let leftChildValue, rightChildValue;
    let swap = null;

    if (leftChildIndex < length) {
      leftChildValue = this.values[leftChildIndex];
      if (leftChildValue > element) {
        swap = leftChildIndex;
      }
    }
    if (rightChildIndex < length) {
      rightChildValue = this.values[rightChildIndex];
      if (
        (swap === null && rightChildValue > element) ||
        (swap !== null && rightChildValue > leftChildValue)
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

var maxHeap = new MaxBinaryHeap();
maxHeap.insert(10);
maxHeap.insert(13);
maxHeap.insert(7);
maxHeap.insert(50);
maxHeap.insert(17);
maxHeap.insert(76);
maxHeap.insert(99);
maxHeap.insert(100);
//if ordinary heap          10                              100
//                      13      7                       99         76
//                   50   17  76  99                17    13   7       50
//                 100                           10
//

console.log(maxHeap);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap);

//pseudocode for removing

// Swap the first value in the values property with the last one
// Pop from the values property, so you can return the value at the end.
// Have the new root "sink down" to the correct spot...​
// Your parent index starts at 0 (the root)
// Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
// Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
// If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
// The child index you swapped to now becomes the new parent index.
// Keep looping and swapping until neither child is larger than the element.
// Return the old root!

//TIME COMPLEXITY
//INSERTION O(LOGN)
//REMOVAL  O(LOGN)
//search O(n) //important because elements are inserted not according to greater or less than we cant go for serach in one side of tree
