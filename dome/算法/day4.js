// 翻转二叉树
let  root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1
    },
    right: {
      val: 3
    }
  },
  right: {
    val: 7,
    left: {
      val: 6
    },
    right: {
      val: 9
    }
  }
}

function mirrorTree(root) {
  if(!root) return null;
  let tem = root.left;
  root.left = mirrorTree(root.right);
  root.right = mirrorTree(tem);
  return root;
}

console.log(mirrorTree(root));

let root3 = {
  val: 1,
  left: {
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
    right: {
      val: 3
    }
  }
}

function isSymmetric(root) {
  if(!root) return true;
  function fun(left, right) {
    if(left === null && right !== null) return false;
    if(left !==null  && right === null) return false;
    if(left !== null && right !== null ) {
      return left.val == right.val
              && fun(left.left, right.right) 
              && fun(left.right, right.left);
    }
  }
  fun(root)
};

console.log(isSymmetric(root3))
