
function fun(root){
  let queue = [];
  let depth = 1;
  if(!root) return 0;
  queue.push(root);
  while(queue.length) {
    let len = queue.length;
    let cur = queue[0];
    for(let i=0;i<len;i++){
      if(cur.left === null && cur.right===null) return depth;
      if(cur.left !== null) return queue.push(cur.left);
      if(cur.right !== null) return queue.push(cur.right);
    }
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


let depth = fun(root);
console.log(depth)
