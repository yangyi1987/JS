
/*

      BFS 解题套路---层次遍历

*/
// 题目： 给定二叉树 [3,9,20,null,nul,15,7] 返回它的最小深度。


function minDepth(root){
  if(!root) return 0;
  let queue = [];
  let depth = 1;
  queue.push(root)

  while(queue.length > 0) {
    let len = queue.length;
    let cur = queue.shift();
    for(let i=1; i< len; i++){
      if(cur.left === null && cur.right === null){
        // 没有左右子树
        return depth;
      }
      if(cur.left !== null){
        queue.push(cur.left);
      }
      if(cur.right !== null) {
        queue.push(cur.right);
      }
    }
    // 左右子树的存在时最短路径 2
    depth++;
  }
  return depth;
}


let root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val:20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right:{
      val: 7,
      left: null,
      right: null
    }
  }
}


let depth = minDepth(root);
console.log(depth)


// 题目： 给定二叉树 [3,9,20,null,nul,15,7] 返回它的最大深度 为 3

function maxDepth(root){
  function max(root){
    if(!root) return 0;
    let left = max(root.left);
    let right = max(root.right)
    return Math.max(left,right) + 1;
  };
  max(root);
}

console.log(maxDepth(root))
