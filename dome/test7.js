class  User {
  constructor(name, age) {
    this.name = name
    this.age = age
    return  {name: '李四'}
  }
}

let user = new User("张三", 24);
console.log(user);



// constructor(name, age) {
//   this.name = name
//   this.age = age
// }
// constructor(name, age) {
//   // 1. this = {}
//   // 2. this.name = name;
//   // 3. this.age = age
//   // 4. return this
// }
