// 平衡二叉树
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


let root2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4
      },
      right: {
        val: 4
      }
    },
    right: {
      val: 3
    }
  },
  right: {
    val: 2,
  }
}

function main(root){
  if(!root) return false;
  let left = fun(root.left);
  let right = fun(root.right);
  return Math.abs(left-right) <= 1;
}
function fun(root){
  if(!root) return 0;
  let left = fun(root.left);
  let right = fun(root.right);
  return Math.max(left,right)+1;
}
// console.log(fun(root))
console.log(main(root))
console.log(main(root2))

var isBalanced = function(root) {
  if(!root) return  true;
  let left = fun(root.left);
  let right = fun(root.right);
  function fun(root){
      if(!root) return 0;
      let left = fun(root.left);
      let right = fun(root.right);
      return Math.max(left,right)+1;
  }
  return Math.abs(left-right) <= 1;
};

console.log(isBalanced(root))


let root4 = {
  val: 1,
  left:{
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 2,
    left: {
      val: 4
    },
  }
}

var isSymmetric = function(root) {
  if(!root) return false;
  function fun(left,right) {
      if(!left&&!right) return true;
      if(!left && right) return false;
      if(left && !right) return false;
      return left.val === right.val 
      && fun(left.left,right.right) 
      && fun(left.right,right.left);
  }
  return fun(root.left,root.right);
};

console.log(isSymmetric(root4))

// 199
let root3 = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    right: {
      val: 4
    }
  }
}

var rightSideView = function(root) {
  if(!root) return [];
  let queue = [];
  let rightView = [];
  queue.push(root);
  while(queue.length > 0) {
    let len = queue.length;
    console.log(len)
    let one = queue[0];
    for(let i=0; i<len; i++) {
      let cur = queue.shift();
      if(cur.right!== null) queue.push(cur.right);
      if(cur.left !==null) queue.push(cur.left);
    }
    rightView.push(one.val);
  }
  return rightView;
};

console.log(rightSideView(root3));
