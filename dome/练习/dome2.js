function F() {
}

let user = {
  name: "张三",
  age: 34
}

F.prototype = user

console.log(F.prototype)

let one = new F();

console.log(one)
console.log(one.__proto__)
