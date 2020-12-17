
// ######### 组合继承( Child的 prototype 和 Parent 的等实例组合,  new Chile 继承了他们的组原型合 )
// 原理: 通过子类的原型指向父类实例实现继承
// class.prototype -> new parentClass -> new parentsClass.__prototype -> parentClass.prototype

// A + B = C , D 继承于 C




function Parent() {
  this.flag =  true
}

Parent.prototype.getFlog = function() {
  return this.flag;
}

function Child() {
  this.ChildFlag = false;
}

Child.prototype = new Parent();

Child.prototype.getChildFlag = function() {
  return this.ChildFlag;
}

let child = new Child()

console.log(Object.getPrototypeOf(child));
