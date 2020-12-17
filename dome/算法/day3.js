// BFS 
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



// 解 二叉树 最大深度

function maxDepth(root){
  if(!root) return 0;
  let queue = [];
  let depth = 0;
  queue.push(root);
  while(queue.length > 0) {
    let len = queue.length;
    // for 循环一个回合就相当于一层，循环的次数等于这层节点的总个数
    for(let i=0; i<len; i++) {
      // 没次循环都去改变 cur 的值
      let cur = queue.shift();
      if(cur.left !== null) {
        queue.push(cur.left);
      }
      if(cur.right !== null){
        queue.push(cur.right);
      }
    }
    depth++;
  }
  return depth;
}

console.log("BFS 套路求二叉树最大深度")
console.log(maxDepth(root))


// 二叉树 求最小深度 while 只用循环一次判断第二层是否存在。

function minDepth(root){
  if(!root) return 0;
  let queue = [];
  let depth = 1;
  queue.push(root);
  let len = queue.length;
  while(len--){
    for(let i = 0; i < len; i++) {
      let cur = queue.shift()
      if(cur.left === null && cur.right === null) return depth;
      if(cur.left !==null) queue.push(cur.left);
      if(cur.right !==null) queue.push(cur.right);
    }
  }
  depth++;
  return depth;
}

console.log("BFS 套路求二叉树最小深度")
console.log(minDepth(root))



// 二叉树 层次遍历

function Level(root){
  if(!root) return [];
  let queue = [];
  let result  = [];
  queue.push(root);
  while(queue.length) {
    let len = queue.length;
    let res = [];
    for(let i = 0 ; i < len; i++ ) {
      let cur = queue.shift();
      res.push(cur.val);
      if(cur.left !== null) queue.push(cur.left);
      if(cur.right !== null) queue.push(cur.right);
    }
    result.push(res)
  }
  return result;
}

console.log("BFS 套路求二叉树层次")
console.log(Level(root))


// LeetCode 199 题

let root1 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null
    }
  }
}

function fun(root){
  if(!root) return 0;
  let queue = []; 
  let result = [];
  if(root.right !==null) {
    result.push(root.val);
    queue.push(root.right);
    while(queue.length){
      let len = queue.length;
      for(let i = 0; i < len; i++){
        let cur = queue.shift();
        result.push(cur.val);
        if(cur.left !== null) queue.push(cur.left);
        if(cur.right !== null) queue.push(cur.right);
      }
    }
  }
  return result;
}

console.log("LeetCode 199题")
console.log(fun(root1))


// LeetCode 257 题



let root3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right:{
    val: 3,
    left: null,
    right: null
  }
}

function allPath(root3){
  let result = [];
  // 递归函数
  function fun(root3){
    if(!root3){
      return;
    }else{
      result.push(root3.val);
      fun(root3.left);
      fun(root3.right);
    }
  }

  function fun1(root){
    if(!root) return ;
    else{
      let l = "";
      let r = "";
      if(root.left !==null) {
        result.push(root3.val);

        fun(root.left);
        l = result.join("->")
        result = [];
      }
      if(root.right !== null) {
        result.push(root3.val);
        fun(root.right);
        r = result.join("->")
        result = [];
      }
      result.push(l,r);
    }
  }
  fun1(root3)
  console.log("LeetCode 257 题")
  console.log(result)
}

allPath(root3);

// [1,2,3,4,null,null,5]

let root4 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    },
    right: null
  },
  right:{
    val: 3,
    left: null,
    right:{
      val: 5
    }
  }
}



// var zigzagLevelOrder = function(root) {
//   if(!root) return [];
//   let queue = [];
//   let result = [];
//   queue.push(root);
//   let pth = 1;
//   while(queue.length) {
//       let len = queue.length;
//       let res = [];
//       for(let i=0; i<len; i++) {
//           let cur = queue.shift();
//           if(pth%2){
//               if(cur.right !== null) queue.push(cur.right);
//               if(cur.left !== null) queue.push(cur.left);
//               res.push(cur.val);
//           }else{
//               if(cur.left !== null) queue.push(cur.left);
//               if(cur.right !== null) queue.push(cur.right);
//               res.push(cur.val);
//           }
//       }
//       pth++;
//       result.push(res);
//   }
//   return result;
// };

// console.log(zigzagLevelOrder(root4))

let root5 = {
  val: 1,
  left: {
    val: 2,
    left:{
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 2,
    left:{
      val: 4
    },
    right: {
      val: 3
    }
  }
}

function fun5(root){
  if(!root) return false;
  let f = function(left,right){
    if(left !==null && right !==null ) return true;
    if(left !==null || right !== null) return false;
    return left.val === right.val && f(left.left,right.right)&&f(left.right,right.left);
  }
  return f(root.left,root.right);
}

console.log(fun5(root5))

function max1(root){
  if(!root) return 0;
  let left = max1(root.left);
  let right = max1(root.right);
  return Math.max(left,right) + 1;
}

function max3(root) {
  if(!root) return;
  let left = max1(root.left);
  let right = max1(root.right);
  return Math.abs(left-right) < 2
}

console.log(max3(root))


