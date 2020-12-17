//1.题目：用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

function fun(arr,n){
  let rand = randomIndex();
  if(n === 0) return arr;
  if(!arr.includes(rand)){
    arr.push(rand);
    return fun(arr,n-1)
  }else{
    fun(arr,n);
  }
}
// 随机数
function randomIndex(){
  return Math.floor(Math.random()* 32) + 1 ;
}
let arr = new Array();
console.log(fun(arr,5))

// 分析： 以数组中是否存在rand随机数和 数组长度作为 状态来控住递归；
