// 写一个数组去重的方法

// 去重
function uniqueArr(arr){
  return [...new Set(arr)]
}
let arr =  [2,4,5,6,7,3,2,5,[7,4,2,7,9,2,[61,7,3,3,[61,2,5,4,4,]]]]
let result = [];
let arr2 = []
let count = 0;

function main(arr){
  console.log(uniqueArr(arr))
  console.log(count);
  arr.forEach(item => {
    if(Array.isArray(item)){
      return main(item);
    }else {
      result.push(item);
      arr2.push(item)
    }
  });
  // console.log(arr)
}
main(arr)
// console.log(uniqueArr(result))
console.log(arr2)

// 递归调用解决多维相重
