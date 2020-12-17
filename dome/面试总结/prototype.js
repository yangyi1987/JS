//原型继承  prototype

//1. 什么是原型继承 （子对象 继承了 父对象 的方法和属性 子对象的__proto__ 指向 父对象的 prototype）
// 原始继承是实例对象中没有某个函数或者属性值，但是它依然可以调用和获取。这些方法属性来自于父对象的的原型中,因为实例对象继承了父对象的原型， 
// 所以可以去调用父对象中的函数与属性

// 例:
let user = {
  name: '张三',
  age: 23
}

let parents ={
   home: "家",
   goHome(){
     console.log("回家");
   }
 }

 // 子对象继承 父对象
 user.__proto__ = parents

 user.home        //  继承了父对象中的 home 属性
 user.goHome()    //  继承了父对象中的 goHome 函数

//2. 子对象不可以重写父对象中的 属性和方法
// 如下的操作相当于在 user 子对象中添加一个属性goHome 指向了 一个function函数
 user.Home = function(){
   console.log("我是子对象中的goHome 函数")
 }
 // 该操作在 user 子对象中添加了一个 home 属性指向一个原始类型值
 user.home = "我是子对象中的home属性"

//3 继承中的 this 问题. 谁调用就 this 就指向谁。 this.属性 或 this.方法时， 先在子对象中查找属性和方法， 如果没再到父对象中去查找。
// 情况一 子对象有该属性，使用子对象中的属性
let a = {
  name: '张三'
}
let b = {
  name: '李四',
  getName(){
  console.log(this.name)
  }
}

  a.__proto__ = b
  a.getName()  // 张三 ，查找到子对象中的 name 属性, this.name = "张三" === user.name

  // 情况二  子对象中没有该属性， 但父对象中去找， 如果有就使用 父对象中的， 没有就 undefined
  let a = {}
  let b = {
    name: '李四',
    getName(){
    console.log(this.name)
    }
  }
  
    a.__proto__ = b
    a.getName()  // 李四 ，查找到子对象中的 name 属性没有找到， 到父对象中去查找， 存在 name 属性 使用 父对象中的 name ,this.name = "李四" === user.name


//  F.prototype 构造函数中的 prototype
//  new F() 构造函数创建一个实例对象时， 实例对象的__proto__ 指向构造函数 F.prototype, 继承了F构造函原始中的属性和方法

function F(name, age){
  this.name = name;
  this.age = age;
}
F.prototype.getName = function() {
  return this.name;
}
F.prototype.getAge = function(){
  return this.age;
}
let user = new F(23, '张三');

// user 对象中的属性
user.age
user.name
// user 继承的方法 user.__proto__ === F.prototype
user.getName()
user.getAge()

// getName()， getAge() 中的 this -> user对象




