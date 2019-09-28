//what is breadth first search
//it is the traversing a tree in level by level
//for example
//        10
//     7     15
//   3  8  14  16

//order of traversing will be 10 ,7,15,3,8,14,16

//lets make a tree class
//i have used the binary tree but it can be any tree
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      //here we avoid duplicate but sometimes we have to keep the frequency at that case we simply add the frequency property on node
      if (current.value === value) return "value already present";
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return "tree is empty";
    else {
      if (this.root.value === value) {
        return this.root;
      } else {
        var current = this.root;
        while (true) {
          if (value < current.value) {
            if (current.left === null) {
              return "value not found";
            } else if (value === current.left.value) {
              return current.left;
            } else {
              current = current.left;
            }
          } else {
            if (current.right === null) {
              return "value not found";
            } else if (value === current.right.value) {
              return current.right;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  }
  BFS() {
    var visited = [];
    var queue = [];
    if (this.root === null) return "tree is empty";
    var node = this.root;
    queue.push(node);
    while (queue.length != false) {
      //taking out first element
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }
}
var myBst = new BinarySearchTree();
myBst.insert(10);
myBst.insert(8);
myBst.insert(12);
myBst.insert(9);
myBst.insert(11);
myBst.insert(13);
myBst.insert(7);

var bfs = myBst.BFS();
console.log(bfs);
