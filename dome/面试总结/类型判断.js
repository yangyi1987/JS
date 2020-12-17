//1. typeof 只能判断 基本数据类型 undefined null number string boolean object 不可判断具体的引用类型


//2. instanceof 能判断具体的引用类, 通过判断对象的原始链中是否具有特定类型的 prototype 来判断

//3. Object.prototype.toString.call(obj) 判断对象的具体类型 返回值为 "[object, type]"
  // 手写一个 Object.prototype.toString.call(obj) 判断对象具体数据类型的方法
  let res = {}

  "Null Undefined String Number Boolean Function Date RegExp Error Array Object Math JSON Class".split(" ").map(item =>{
    res["[object "+ item + "]"] = item.toLowerCase();
  })
  console.log(res)

  function  type(obj){
    return typeof obj === "object" || typeof obj === "function" ? res[Object.prototype.toString.call(obj)] || "object" : typeof obj;
  }

  let date = new Date();
  function f(){}
  console.log(type(date))
  console.log(type(f))
  console.log(type([]))
  // class 被 javaScript 转为一个 function 类型的构造函数所以 type(class) 的结果为一个 function 类型



