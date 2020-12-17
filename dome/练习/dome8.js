function Parent(name,school){
  this.name = name;
  this.school = this.school;
}
Parent.prototype.getName = function(){
  return this.name;
}
Parent.prototype.getSchool = function(){
  return this.school;
}

function Child(age){
  this.age = age;
}

Child.prototype = new Parent("Jason", "江南大学");

let user = new Child(34);

console.log(user.__proto__ === Child.prototype)
console.log(user.__proto__.__proto__=== Parent.prototype)
