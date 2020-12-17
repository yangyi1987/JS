// 递归返回一个长度为5并且随机数在 2 - 32 之间

let arr = [];
function randoms(){
  if(arr.length < 5) {
    let num = Math.ceil(Math.random()*31)+1;
    arr.push(num);
    return randoms()
  } else {
    return ;
  }
}
randoms()
console.log(arr)

// 描述一下Js 有那些内置对象
/*
  Number, String, Boolean, Math, Object, Function, Date, Reg,  Error
*/


// 什么是闭包, 闭包的有缺点是什么

/**
 *  闭包是一种特性,是指内部函数可以调用外部函数的变量（内部作用域 引用外部作用域中的变量）.其实也是函数执行上下文中的词法环境中没要调用的变量这是将调用了外部词法环境中的变量，
 * 优点: 防止环境污染
 * 缺点： 浪费内存和内存泄漏
 * 闭包的特性： 
 * 1.函数嵌套函数
 * 2.子函数可以调用父函数中的变量
 * 3.变量不会被垃圾回收机制处理
 * 
 */

 // localStorage 如何实现过期时间功能

 /*
 思路: 在用户存储数据到 localStorage 中时, 将存一个过期时间的时间戳, 不如vue 项目中在router全局的路由护卫中添加一个函数
      获取 localStorage 中的时间戳与当前时间对比， 如果当前时间大于了 过期时间，那将清除 localStorage 中的数据, 并返回到相应的页面。否则不做任何操作。
 */

 function getTime(){
   let newTime = new Date().getTime();
   let oldTime = localStorage.getItem("expiredTime");
   if(newTime - oldTime > 0) {
     // 注销用户信息
     localStorage.setItem("session",{})
     // 
   }
   return ;
 }
