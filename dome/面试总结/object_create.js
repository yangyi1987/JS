// 手写 Object.create 函数

//1.  参入一个 prototype
//2.  在 myCreat 中声明一个函数, 该函数 prototype = 出入的 prototype 的对象
//3.  通过声明的函数 new F() 创建一个对象返回, 返回的对象的 __proto__ 指向了我们希望指定的 prototype 对象


Object.prototype.myCreate =function (proto){
  function Fun(){};
  Fun.prototype = proto;
  return new Fun();
}


