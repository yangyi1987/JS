// 数组去重方法

// indexOf + for 循环去重

let arr = [1,3,4,'3',1,3]

function unique(arr){
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    console.log(result.indexOf(arr[i]));
    if(result.indexOf(arr[i]) === -1){
      result.push(arr[i])
    }
  }
  return result;
}

console.log(unique(arr))
