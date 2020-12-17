let user = {
  id: 1,
  name: "Jason",
  age: 24,
  sex: '男',
  introduction: {
    position: '前端工程师',
    school: "xxx大学",
    email: 'test@qq.com'
  }
}

// 浅拷贝
console.log(Object.assign({},user))
let user2 = {...user}
user2.name = "fdjfij "
console.log(user)
console.log(user2)
let user3;
function copy(obj) {
  for(let key in obj) { 
  }
}

copy(user);
console.log(user3)

