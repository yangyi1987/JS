Function.prototype.myBind = function(context){
  const obj = context || window;
  const self = this;
  let arg = Array.prototype.slice.call(arguments, 1);
  const newFun = function(){
      let agr2 = Array.prototype.slice.call(arguments, 1);
      if(this instanceof newFun) {
          self.apply(this, arg.concat(agr2));
      } else {
          self.apply(obj, arg.concat(agr2));
      }
  }
  
  //支持 new 创建对象时，实例__proto__指向绑定对象函数的prototype
  newFun.prototype = this.prototype
  return newFun;
}

// 测试
let user = {
      name: 'Jason',
      age: 23,
}
function Fun(school) {
  this.school = school;
  console.log(this.name);
  console.log(this.age);
  console.log(this.school);
}
let fun = Fun.myBind(user ,'江南大学');
//  this -> user
fun()
// this -> 对象实例
let obj =  new fun();
console.log(obj.__proto__ === Fun.prototype) // ture
