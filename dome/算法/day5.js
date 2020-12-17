// Function.prototype.call2 = function(obj,...item){
//   obj.fu = this;  // this 指向调用call2 的函数 这这时将会在对象中创建一个fu: function, 
//   obj.fu(...item);     // 执行函数
//   delete obj.fu  // 删除对象中的fu属性
// }
// function f(age, school){
//   console.log(this.name, age, school)
// }
// let user = {
//   name: '张三'
// }
// let school= ""
// let age = 34
// f.call2(user, school,age);

// arguments 传参
// Function.prototype.call3 = function(context){
//   context.f = this;
//   let arr = Array.from(arguments)
//   arr.splice(0,1)
//   context.f(...arr);
//   delete context.f;
  
// }

// function fun(age, school){
//   console.log(this.name);
//   console.log(age)
//   console.log(school)
// }


// fun.call3(user, 34,"江南大学")

// // ... 传参
// Function.prototype.call3 = function(context,...item){
//   context.f = this;
//   console.log(item)
//   context.f(...item);
//   delete context.f;
// }

// function fun(age, school){
//   console.log(this.name);
//   console.log(age)
//   console.log(school)
// }


// fun.call3(user, 34,"江南大学")


// 思路
// 1. 向call传入的object添加一个属性,该属性等于this(this指向调用它得对象getUser方法)
// 2. 执行object添加属性指向的方法。
// 3. 删除object中的用于指向函数的属性

// Function.prototype.call2 = function(obj) {
//   obj.f = this;
//   obj.f();
//   delete obj.f;
// }

// function getUser(){
//   console.log(`my name is ${this.name}`)
//   console.log(`my age is ${this.age}`)
// }

// let user = {
//   name: "张三",
//   age: 23
// }

// // 测试
// getUser.call2(user)  
// // 打印结果
// // my name is 张三
// // my age is 23


//  传入对对象为 null时 this -> window
Function.prototype.call2 = function(obj) {
  let obj2 = obj || window;
  obj2.f = this;
  obj2.f(...item);
  delete obj2.f;
}

function getUser(age){
  console.log(`my name is ${this.name}`)
  console.log(`my age is ${age}`)
}

// 测试
let name = "张三"
getUser.call2(null, 23)  
// 打印结果
// my name is 张三
// my age is 23

// 完整的手写 call  
Function.prototype.myCall = function(context){
  let obj = context || window;
  let arg = Array.from(arguments);
  arg.splice(0,1)
  obj.f = this;
  let result =  obj.f(...arg);
  delete obj.f;
  return result
}

// 测试 
function getUser(age) {
  console.log(this.name)
  console.log(age)
}

let user = {
  name: '张三'
}
getUser.myCall(user, 34)

// 手写 apply  方法 
Function.prototype.myApply = function(context, arr){
    let obj = context || window;
    obj.f = this;
    if(Array.isArray(arr)) {
      let result = obj.f(...arr)
      delete obj.f;
      return result;
    }
    throw new Error('请输入一个数组');
}















