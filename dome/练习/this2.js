
//一.  全局环境下的this 指向
    //1. window 环境中函数在全局作用作用域中自动调用, this 指向了 window;
    //2. 'use strict'模式下函数在全局作用域中自动调用时, this指向undefined
    //3. node 环境中函数在全局作用域中自动调用时, this 指向 global
    //4. 在函数作用域中使用严格模式时, this 指向 undefined


// 二. 谁调用就指向谁
    //1. 对象中的方法，被对象调用时, this 指向调用对象
    //2. 调用多层嵌套对象中的函数被调用时, this 指向最近调用它的那个对象
    //3. window 环境中函数自动调用时，其实是window.F() 调用函数。所以this 指向 window

//三. 构造函数中的this 指向
    //1. 构造函数中的this 指向它的实例对象

//四. class 中的this 指向
    //1. class 中的this 指向它的实例对象


//五. setTimeout, setInterval 中的this 指向
    //1. setTimeout, setInterval 在window环境中时， this 指向 window
    //2. setTimeout, setInterval 在node环境中时， this 指向 global


//六. 箭头函数中的this 指向
    //1. 箭头函数中没有 this
    //2. 箭头函数中的this是由外包部获取的， 所以取决于外面一层对象的this指向


//7. this 在代码运行是被动态绑定的




