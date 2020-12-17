// es5 的继承
function Father(name,age){
  this.name = name;
  this.age = this.age
}

Father.prototype.getName = function(){
  return this.name;
}

Father.prototype.getAge = function() {
  return this.age;
}


function Child(school) {
  this.school = school;
}

function create(proto) {
  if(proto === null ) {
    return new Object();
  }
  function F(){}
  F.prototype = proto;
  return new F("张三", 23);
}

Child.prototype = create(Father.prototype);
let child = new Child("江南大学");


console.log(Child.prototype.__proto__ === Father.prototype)
console.log(child.__proto__)
