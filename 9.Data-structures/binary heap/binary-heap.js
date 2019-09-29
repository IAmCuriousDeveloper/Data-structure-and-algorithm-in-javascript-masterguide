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
//right 2n+2

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
    this.values.push(value);
    this.bubbleUP();
  }
  bubbleUP() {
    //we are storing in array so always start with last
    var valIndex = this.values.length - 1;
    var value = this.values[valIndex];
    var parentIndex = Math.floor((valIndex - 1) / 2);
    var parentValue = this.values[parentIndex];
    while (valIndex > 0) {
      if (parentValue > value) break;
      if (parentIndex < value) {
        //swapping
        this.values[parentIndex] = value;
        this.values[valIndex] = parentValue;
      }
      valIndex = parentIndex;
    }
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

console.log(maxHeap);
