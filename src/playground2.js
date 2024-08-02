class BinaryTree {
  constructor(value, left = null, right = null) {
    this.data = value
    this.left = left 
    this.right = right
  }

  getRootValue() {
    return this.data
  }

  setRootValue(value) {
    return this.data = value
  }

  insertLeft(value) {
    this.left = new BinaryTree(value)
    return this.left 
  }

  insertRight(value) {
    this.right = new BinaryTree(value)
    return this.right 
  }

  getLeftChildValue() {
    return this.left?.data
  }

  getRightChildValue() {
    return this.right?.data 
  }
}


// Prints the tree in a left -> right manner
function printTree(node, prefix = "", isLeft = true) { 
  node.right && printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
  console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);
  node.left && printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
}

let tree = new BinaryTree(2);
/*
    2
  /   \
 5     7
/ \     \
4   4     9
pre-order: [ 2, 5, 4, 4, 7, 9 ]
in-order: [ 4, 5, 4, 2, 7, 9 ]
post-order: [ 4, 4, 5, 9, 7, 2 ]
*/
let left = tree.insertLeft(5);
let right = tree.insertRight(7);
left.insertLeft(4);
left.insertRight(4);
right.insertRight(9);
printTree(tree)

const maxInTree = root =>{
  const max = 0
  bfs(root)
  //console.log(values)
  return max

  function bfs(root){
    const q = [root]
while (q.length){
  const node = q.shift()
  if(node.data > max) max = node.data
  if (node.left) q.push(node.left)
    if (node.right) q.push(node.right)
}
  }
}


// const maxInTreeRec = root =>{
//   let max = 0
//   dfs(root)
//   return max

//   function dfs(node){
//     //base
//     if(!node) return

//     if (node.data>max) max = node.data

//     dfs(node.left)
//     dfs(node.right)
//   }
// }

