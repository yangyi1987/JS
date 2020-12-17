// 对象方法

// 1. Object.assign(obj, obj) 将一个对象中的属性枚举拷贝到另一个对象中, 返回一个合并好的对象(目标对象), 浅拷贝，

let obj = {
  name: '张三',
  age: 23
}

let obj2 = {
  school: '江苏海洋大学'
}
// 2. Object.create(obj, prototype)  把 prototype 作为 obj 的 __proto__ 对象, obj.__proto__ === prototype, 改变目标对象的隐式原型

// 3. Object.defineProperty(obj, attribute ,{configurable: true, enumerable: true, writable: true, value: '家乡'}) 
// configurable 是否可被修改和删除, enumerable 是否可被枚举, writable 是否可以被修改, value 属性的值

Object.defineProperty(obj, 'home', {configurable: true, enumerable: true, writable: true, value: '家乡'})


// 4. Object.defineProperties(obj, {name: {configurable: true, enumerable: true, writable: true, value: '家乡'},
// name2: {configurable: true, enumerable: true, writable: true, value: '家乡'}}) 给对象添加对个属性

Object.defineProperties(obj2,{
  'name': {
    configurable: true,
    enumerable: true,
    writable: true,
    value: '张撒',
  },
  'age': {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 23
  }
})

// 5. Object.freeze(object) 冻结对象, 对象内容不可以被修改

//6. Object.entries(obj) 建对象中的每一个 key-value 作为 转为 [key, value] 实体, 返回一个可枚举的数组

Object.entries(obj)  // [[’name': '张三‘], ['age', 23]] 可被枚举的对象


// 7. Object.formEntries(object) 可将以个 Object.entries(obj)返回的数组转为 对象

Object.fromEntries([['name', '张三']])  // {name: "张三"}


// 8. Object.getOwnPropertyDescriptor(obj, prop) 获取obj对象中 prop 属性的描述 {configurable: true, enumerable: true, writable: true, value: '家乡'}

// 9. Object.getOwnPropertyDescriptor(obj) 获取 obj 对象的所有 属性描述

// 10. Object.getOwnPropertyName(obj) 返回 obj 对象中属性的 name 组成的数组, 包括 Symbol 属性

// 11. Object.getOwnPropertyOf(obj) 获取对象的 prototype

// 12. Object.getOWnPropertySymbol(obj) 获取 obj 对象中的所有 symbol 属性

// 13. Object.getPrototypeOf(obj) 获取 obj 对象的 prototype 






