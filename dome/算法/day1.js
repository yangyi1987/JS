

/*

        二叉树的 前序遍历-------中序遍历---------后序遍历

*/

// 题目： 给定而二叉树，返回它的中序遍历
// 左-> 中 ->右
// 输入 [1,null,2,3]
// 输出 [1,3,2]

function traverse(){
  let result = [];
  let fun = function(root) {
    if(!root){
      return;
    }else{
      fun(root.left);
      result.push(root.val)
      fun(root.right)
    }
  }
  fun()
  return result;
}

// 题目： 给定一个二叉树，返回它的前序遍历
// 根 -> 左 ->右
// 输入 [1, null, 2, 3]
// 输入 [1,2,3]
function traverse(root){
  let result = [];
  let fun = function(root){
    if(!root){
      return;
    }
    result.push(root.val);
    fun(root.left);
    fun(root.right);
  }
  fun(root);
  return result;
}


// 题目： 给定一个二叉树，返回它的后序遍历
// 左 ->右->根
// 输入 [1, null, 2, 3]
// 输入 [3,2,1]
function traverse(root){
  let result = [];
  let fun = function(root){
    if(!root){
      return;
    }
    fun(root.left);
    fun(root.right);
    result.push(root.val);
  }
  fun(root);
  return result;
}
