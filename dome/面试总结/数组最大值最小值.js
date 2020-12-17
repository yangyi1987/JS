let arr = [1,5,7,9,3,4];

// 求数组最大值

//1. 遍历求数组最大值
function max(arr){
  let temp = 0;
  arr.forEach(item => {
    temp = item > temp ? item : temp;
  });
  return temp;
}
console.log(max(arr))
//2. Math.min 求数组最大值
function max(arr){
  return Math.max(...arr);
}
console.log(max(arr));


let a = [2,4,[3,9]]
//3. 递归求多维数组最大值
function min(arr){
  if(!Array.isArray(arr)) return;
  let temp = arr[0];
  arr.forEach(item=>{
    if(Array.isArray(item)){
      min(item)
    }
    temp = temp > item ? temp : item;
  })
  return temp;
}

//4. 降序

function max(arr){
  arr.sort((a,b)=> {
    // b - a 降序
    return b - a;
  })
  return arr[0];
}

// 求数组最小值

//1. 求数组最小值
function min(arr){
  let temp = arr[0]
  arr.forEach(item => {
    temp = item < temp ? item : temp;
  });
  return temp;
}

//2. 求数组最小值
function min(arr){
  return Math.min(...arr);
}

//3. 升序

function min(arr){
  arr.sort((a, b)=>{
    // a - b 升序
    return a - b;
  })
  return arr[0]
}
