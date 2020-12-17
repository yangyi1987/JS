function max(root){
  let queue = []
  function fun(root){
    if(!root) return 0;
    else {
      let q = [];
      if(root.left !== null && root.right !== null) {
        q.push(root.left.val);
        q.push(root.right.val);
        queue.push(q);
        fun(root.left);
        fun(root.right)
      }
      if(root.left === null && root.right !== null){
        q.push(root.right.val)
        queue.push(q);
        return fun(root.right);
      }
      if(root.left !== null && root.right === null){
        q.push(root.left.val)
        queue.push(q);
        return fun(root.left);
      }
    }
  }

  queue.push([root.val]);
  fun(root);
  return queue;
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
      left: {
        val: 78,
        left: null,
        right: null
      },
      right: {
        val: 32,
        left: {
          val: 56,
          left: null,
          right: null
        },
        right: null
      }
    }
  }
}
console.log(max(root))
