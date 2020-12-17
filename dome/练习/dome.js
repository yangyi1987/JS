let user = {
  name: "刘备",
  [Symbol.iterator]: true
}

Object.defineProperty(user, "age", {
  value: 23
})

let age = Object.getOwnPropertyDescriptor(user, 'age')
Object.defineProperties(user, {
  surname: { value: "Smith", writable: true },
});

Object.defineProperties(user,  {school:{
  value: "江苏海洋大学", 
  writable: true,
  enumerable: true
}})


console.log(JSON.stringify(age, null, 4));

console.log(Object.getOwnPropertyDescriptors(user));
console.log(user.age);
user.age = 88;
user.surname = "Jason";
delete user.surname;
console.log(user.age);
console.log(user.surname);
console.log(Object.getOwnPropertyDescriptors(user))

for(let item in user) {
  console.log(item)
}
