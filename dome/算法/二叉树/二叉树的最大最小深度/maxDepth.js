// 最大深度
//       3
//     /  \
//    9   20
//       /  \
//      15   7
// [3, 9, 20,null,null, 15, 7]


let root = {
  val: 3,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7
    }
  }
}

// 方法一 递归
/**
 * 思路： 
 *  1. 如果root 不存在 返回 0
 *  2. 求左边最大深度, 与右边最大深度
 *  3. 比较左右的最大深度, 取最大加上根节点的深度 1
 */
function maxDepth(root) {
  if(!root) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
}

// 方法二 BFS 广度优先搜索
function maxDepthBFS(root) {
  if(!root)return ;
  let queue = [];
  let depth = 0;
  queue.push(root)
  while(queue.length) {
    let len = queue.length;
    for(let i = 0; i < len; i++) {
      let temp = queue.shift();
      if(temp.left) queue.push(temp.left);
      if(temp.right) queue.push(temp.right);
    }
    depth++;
  }
  return depth;
}
console.log(maxDepth(root))
console.log(maxDepthBFS(root))
