function Fun(name, age, school){
  this.name = name;
  this.age = age;
  this.school = school;
}

function myNew(f){
  let args = Array.prototype.slice.call(arguments,1);
  let result = {}
  Object.setPrototypeOf(result ,f.prototype)
  let res = f.apply(result, args);
  // 处理 f.apply有返回值
  if(typeof res === 'object' || typeof res === 'function' && res !==null) {
    return res;
  }
  // 没有返回值时直接返回 实例对象 result
  return result;
}

let p = myNew(Fun,'张飞',344, '三国大学')
console.log(p)
console.log(p.__proto__ === Fun.prototype)

// 手写 bind函数

function Fun(school){
  console.log(this.name)
  console.log(this.age)
  console.log(school)
}

Function.prototype.myBind(context) = function () {
  let arg = Array.prototype.slice.call(arguments, 0,1)
  let fn = this;
  let newFun = function(){
    let arg2 = Array.from(arguments)
    arg2.splice(0,1);
    if(this instanceof newFun) {
      fn.apply(this, arg2.concat(arg));
    }else{
      fn.apply(context, arg2.concat(arg))
    }
  }
  newFun.prototype = fn.prototype
  return newFun;
}
