//1. new 机制
    //1. 创建一个实例对象
    //2. 构造函数中的this 指向实例对象
    //3. 对象的__proto__ 指向 构造函数的prototype

//2. new 创建一个 对象的过程
    //1. 隐式创建一个实例对象
    //2. this 指向 实例对象
    //3. 对实例对象进行操作
    //4. 隐私放回一个实例对象
    //例子
      function F(name, age){
        this.name = name;
        this.age = age;
      }
      let f = new F('Jason', 23);


//3. 手写 new 函数
      function myNew(F){
        let arg = Array.prototype.slice(arguments, 1);
        let result = new Object();
        if(!F instanceof Object) {
         return F;
        }
        Object.setPrototypeOf(result,F.prototype)
        F.apply(result, arg);
        return result;
      }
      // 分析：
        //1. 通过 arguments 获取传入的参数作为实参去操作对象
        //2. 通过 Object.setPrototype 来设置 result 对象继承 F 的原型
        //3. 通过 F.apply 来把 this 指向 result, 并操作 result中的属性
        //4. 返回 result 对象

