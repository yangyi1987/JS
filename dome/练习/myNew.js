// 手写 new 机制

function myNew(f){
  // let result = {};
  let arg = Array.prototype.slice.call(arguments, 1);
  // Object.setPrototypeOf(result, f.prototype)
  let result = Object.create(f.prototype);
  let res =  f.apply(result, arg);
  if(typeof res === 'function' || typeof res === 'object' && res!== null) {
    return res;
  }
  return result;
}


// 手写 bind 

Function.prototype.myBind = function(context){
  let self = this;
  let arg = Array.prototype.slice.call(arguments, 1);
  let newFun = function() {
    let args = Array.prototype.slice.call(arguments, 1);
    if(this instanceof newFun) {
      self.apply(this, arg.concat(args)); 
    } else{
      self.apply(context, arg.concat(args)); 
    }
  }

  // 支持 new 创建对象;
  newFun.prototype = this.prototype
  return newFun;
}

function Fun(school){
  this.school = school
  console.log(this.name);
  console.log(this.age);
  console.log(this.school);
  console.log(school);
}

let user = {
  name: '张三',
  age: 34
}

let fun = Fun.myBind(user, '江南大学');
// fun()


let f = new fun("江苏海洋大学")
// fun();
console.log(user)

console.log(f.__proto__ === Fun.prototype)




function myNews(f,arr){
  let result = {};
  if( !typeof f === 'function'){
    return f;
  }
  Object.setPrototypeOf(result, f.prototype);
  f.apply(result, arr);
  return result;
}

function User(name, age){
  this.name = name;
  this.age = age;
}

let obj2 = myNews(User,['张三',23]);

console.log(obj2)

Function.prototype.myApply = function(context){
  let self = this;
  let arg = Array.prototype.slice.call(arguments, 1);
  let newFun  = function (){
    let arg2 =  Array.prototype.slice.call(arguments, 1);
    if(this instanceof NewFun) {
        self.apply(this, arg2.concat(arg));
    }else{
      self.apply(context, arg2.concat(arg));
    }
  }

  newFun.prototype = this.prototype;

  return newFun;
}









