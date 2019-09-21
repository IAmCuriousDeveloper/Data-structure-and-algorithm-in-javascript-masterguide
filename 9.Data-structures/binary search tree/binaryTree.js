//what is tree?
// A data structure that consists of nodes in a parent / child relationship

//list are linear but trees are not linear
//there is only parent -> child relationship only ,we cant have slibling->sibling relation or child to parent relation
//tree should contain only one root

//some terminolgy
// Root - The top node in a tree.
// Child -A node directly connected to another node when moving away from the Root.
// Parent - The converse notion of a child.
// Siblings -A group of nodes with the same parent.
// Leaf - A node with no children.
// Edge - The connection between one node and another.

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
}
