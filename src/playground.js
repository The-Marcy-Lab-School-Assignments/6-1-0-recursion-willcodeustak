const printTreeValueRec = root => {
  function dfs(node) {
    values.push(node.data)

  }
}


const printTreeValuesIter = root =>{
  const values = []
  bfs(root)
  console.log(values)

  function bfs(root){
    const q = [root]
while (q.length){
  const node = q.shift()
  if (node.left) q.push(node.left)
    if (node.right) q.push(node.right)
}
  }
}