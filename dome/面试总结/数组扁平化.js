// 什么是数组扁平化
// 答： 数组扁平化就是将多层数组嵌套数组不变为一层
// 如： [1,3,[4,[5]]] 变为 [1,3,4,5]

let arr = [1,3,[4,[5[6,[7,8,[9]]],]]]

//1. toString 解决数组扁平化  
//思路: 1. 将数组转成字符串  2. 再将字符串转成数组  3. 将字符串转为数字
function flatten(arr){
  return  arr.toString().slipt(",").map(item=>{
    return +item;
  })
}


//2. 递归
//思路： 1. 判断每一项是否数组, 如果是数组将其递归
function flatten(arr) {
  let result = []
  arr.forEach( item => {
    if(Array.isArray(item)) {
      // concat 返回一个新的数组
     result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

//3. reduce + 递归扁平化数组

function flatten(ary = []) {
  return ary.reduce((res, item) => res.concat(Array.isArray(item) ? reduceFlat(item) : item), [])
}
 
