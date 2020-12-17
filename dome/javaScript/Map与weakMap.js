// // Map缓存例子
// let cache = new Map();
// function fun(obj){
//   if(!cache.get(obj)) cache.set(obj,obj);
//   return cache.get(obj);
// }
// let user = {
//   name: '张飞',
//   age: 500
// }
// // 数据进行缓存
// fun(user);
// //  user  = null 垃圾回收
// user = null
// console.log(user)                // null 
// console.log(cache.size)          // 1
/*  总结： 在Map中引用了user作为key, 而当user = null时 JavaScript 垃圾回收机制应该回收user，但是不会回收掉user，
    因为user被引用在了Map，所以该对象还是存在的。因为Map存在，user即存在，还会暂用内存。
*/

// weakMap 缓存

// let cache = new WeakMap()

// function fun(obj){
//   if(!cache.has(obj)){
//     cache.set(obj,obj);
//   }
//   return cache.get(obj)
// }

// 测试
// let user = {
//   name: "张飞",
//   age: 500
// }
// let obj =  fun(user);
// let obj2 = fun(user)

// user = null

/*
user = null JavaScript 垃圾回收机制user回收， cache 中的的数据也会被清除。Javascript不会考虑对象在WeakMap中的引用
*/

let user = {
  name: "张飞",
  age: 500
}


let map = new Map(Object.entries(user))
console.log(map)

console.log(map.entries())
console.log(map.fromEntries())
console.log(map.keys())
console.log(map.keys())



