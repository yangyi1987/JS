// // 1
// let num = new Number(10);

// // to-number
// console.log(Number(num))      // 10
// console.log(+num)             // 10
// // to-string
// console.log(String(num))      // "10"


/*
 valueOf返回指定的原始值 ，toString返回对象的字符串
 分析：
    1.to-number 时调用了valueOf 返回原始值为 10 
    2.to-string 时调用toString  返回对象的字符串 "10"
 */


let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    if(hint === 'string'){
      return this.name;
    }else if(hint === 'number'){
      return this.money;
    }
  }
};

// 转换演示：
console.log(String(user)) // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

