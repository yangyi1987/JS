// 最小深度

/** 
    3
   / \
  9  20
    /  \
   15   7
 */

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

function minDepth(root){
  if(!root) return 0;
  if(root.left && root.right) {
    return Math.min(minDepth(root.left)+1, minDepth(root.right)+1);
  } else if(root.left) {
    return minDepth(root.left);
  } else if(root.right) {
    return minDepth(root.right);
  }else {
    return 1;
  }
}


// 方法二 非递归
/**
 * 思路: 1. 分别求出左子树和右子树的最小深度
 *      2. Math.min 求左右子树的最小深度
 *      3. 左右子树最小深度加上 1 得到二叉树的最小深度
 */

 function minDepth2(root) {
   if(!root) return 0;
   let min = function min(root) {
     if(!root) return 0;
     let left = min(root.left);
     let right = min(root.right);
     return Math.min(left,right) + 1;
   }
   let left = min(root.left);
   let right = min(root.right);
   return Math.min(left, right) + 1;
 }

 console.log(minDepth(root))
 console.log(minDepth2(root))
