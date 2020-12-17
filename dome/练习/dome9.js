


// 手写 bind 函数
// 说明： 
// bind 函数调用创建一个函数返回, 新函数执行时，bind 中的第一个参数做为新函数中的 this, 其余的参数已实参传入。
// 第一个arguments 是 myBind 函数中 出入的参数， 第二个arguments 是新创建的函数中出入的参数。

Function.prototype.myBind = function(context){
  let _self = this;
  let arr  = Array.from(arguments).splice(0,1);
  return function() {
    let agr = Array.from(arguments).splice(0,1);
    return _self.apply(context, arr.concat(agr));
  }
} 

// new 
function Fun(){
  return arguments;
}

let agr = Fun(3,4,5,6,6,7);
console.log(agr)

