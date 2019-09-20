class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // this is list here
    return this;
  }
  pop() {
    if (!this.head) return "the list os empty";
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // removing a node from the beginning
  shift() {
    if (!this.head) return "the list is empty";
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    //returning the node we can return just value
    return current;
  }
  //adding a node at the beginning

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      newNode.next = current;
      this.head = newNode;
    }
    this.length++;
    return this.head;
  }
  //getting a node at particular index{although linklist doesnot contain the index}
  get(index) {
    // let count = 0;
    // if (index > this.length || index < 0) return null;
    // else {
    //   let nodeReturn = this.head;
    //   if (index !== count) {
    //     let current = this.head;
    //     for (var i = 0; i < index; i++) {
    //       current = current.next;
    //       count++;
    //     }
    //     nodeReturn = current;
    //   }
    //   return nodeReturn;
    // }
    //the above solution is perfectly fine but its a lot more code

    if (index > this.length || index < 0) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, value) {
    //   if (index > this.length || index < 0) return null;
    //   let counter = 0;
    //   let current = this.head;
    //   while (counter !== index) {
    //     current = current.next;
    //     counter++;
    //   }
    //   current.value = value;
    // }
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return "updated successfully";
    }
    return "unable to change value";
  }

  insert(index, value) {
    if (index > this.length || index < 0) return "invalid position to insert";

    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return "insertion sucessful";
    } else {
      var foundNode = this.get(index - 1);
      var nextNode = foundNode.next;
      foundNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
      return "insertion successful";
    }
  }

  remove(index) {
    if (index > this.length || index < 0) return "invalid position to remove";
    if (index === 0) {
      //list can be of one node or more
      //if one node
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
      } else {
        let current = this.head;
        let nextchain = current.next;
        this.head = nextchain;
        this.length--;
      }
    } else {
      let prenode = this.get(index - 1);
      let nodeToRemove = prenode.next;
      let nodechain = nodeToRemove.next;
      prenode.next = nodechain;
      this.length--;
      return "node remove successfully";
    }
    // if(index < 0 || index >= this.length) return undefined;
    //       if(index === 0) return this.shift();
    //       if(index === this.length - 1) return this.pop();
    //       var previousNode = this.get(index - 1);
    //       var removed = previousNode.next;
    //       previousNode.next = removed.next;
    //       this.length--;
    //       return removed;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail; //no use
    this.tail = node; //no use
    var previous = null;
    var next;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

let newLinkList = new SinglyLinkedList();
// push
newLinkList.push("hi link-list");
newLinkList.push("i am second one");
newLinkList.push("i am the third one");
//pop

// console.log(newLinkList.pop());
// console.log(newLinkList.pop());
// console.log(newLinkList.pop());

//shift
//console.log(newLinkList.shift());

//adding at beginning and checking our list
// console.log(newLinkList.unshift("now i am the new one"));
//console.log(newLinkList.get(0));
newLinkList.insert(1, "iam a index one");
console.log(newLinkList);

//big o of singly link list common operation
//insertion = O(1)
//removal -> depends if removing from the 1st then O(1) if from end O(n);
//searching and acces both are O(n)
