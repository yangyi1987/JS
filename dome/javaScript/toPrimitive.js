let user = {
  name: '张飞',
  age: 500,
  [Symbol.toPrimitive]: function(hint){
      console.log(`本次转换的类型为： ${hint}`)
      if(hint  === "string")
        return this.name;
      else
        return this.age;
  },
  valueOf: function(){
    console.log("类型转换执行valueOf 函数")
    return this.age;
  },
  toString: function(){
    console.log("类型转换执行 toString 函数")
    return this.name;
  }
}

console.log(+user)
console.log(Number(user))
console.log(String(user))
