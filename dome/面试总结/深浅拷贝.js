
// 浅拷贝

//1. 数组方法中的 浅拷贝 concat slice  

  // concat
  let arr = [2,4,5,1,6,{name: "Jason"}];
  let arr2 = arr.concat();
  arr2[1] = 10
  arr[5].name = "张三"
  console.log(arr2)   // [ 2, 10, 5, 1, 6, { name: '张三' } ]
  console.log(arr)    // [ 2, 4, 5, 1, 6, { name: '张三' } ]
 // slice
  let arr = [2,4,5,1,6,{name: "Jason"}];
  let arr2 = arr.slice(2)
  arr[4] = 10
  arr[5].name = "张三"
  console.log(arr)    // [ 2, 4, 5, 1, 10, { name: '张三' } ]
  console.log(arr2)   // [ 5, 1, 6, { name: '张三' } ]


//2. ... 拓展符实现对象, 数组的浅拷贝
  let arr = [2,4,5,1,6,{name: "Jason"}];
  let arr2 = [...arr]
  arr[5].name = '张三'
  arr[1] = 10
  console.log(arr)    // [ 2, 10, 5, 1, 6, { name: '张三' } ]
  console.log(arr2)   // [ 2, 4, 5, 1, 6, { name: '张三' } ]

//3. Object.assign 实现对象, 数组的浅拷贝
let user = {
  name: 'Jason',
  age: 23,
  obj: {
    one: 1,
    tow: 2
  }
}
let res = Object.assign({},user);
user.obj.one = 10
user.obj.tow = 20
user.name = "张三"
console.log(user)    // { name: '张三', age: 23, obj: { one: 10, tow: 20 } }
console.log(res)     // { name: 'Jason', age: 23, obj: { one: 10, tow: 20 } }


//   深拷贝


//1 对象, 数组的深拷贝
function deepCopy(obj){
  if(!obj instanceof Object) {
    return obj;
  }

  let result = Array.isArray(obj) ? [] : {};
  for(let item in obj) {
    if(obj.hasOwnProperty(item)){
      result[item] = typeof obj === 'object' ? deepCopy(obj[item]) : obj[item];
    }
  }
}


function deepCopy(obj){
  if(!obj instanceof Object) return ;
  let result = Array.isArray(obj) ? [] : {};
  obj.keys(obj).map(item =>{
    if(obj.hasOwnProperty(item)){
      result[item] = typeof obj[item] === 'object' ? deepCopy(obj[item]) : obj[item];
    }
  })
}


//2 对象, 数组的深拷贝-----序列化与反序列化 JSON.pares(JSON.stringify())

function deepCopy(obj) {
  if(typeof obj !== 'object') return obj;
  let result = JSON.parse(JSON.stringify(obj))
  return result;
}

