// async await 异步操作

//1. async 通过 Promise.resolve() 将函数包装成 Promise 对象返回, Promise对象的状态为 resolve

例:
async function getUser(){
  return 1;
}
// 等同于 返回一个 promise 对象
Promise.resolve(1); 



//2. async 包装的函数中 return 的值 value 被 Promise.resolve(value) 作为 Promise 对象的 result 返回
async function getUser(){
  return 1;
}
// 等同
Promise.resolve(1).then(result=>{
  console.log(result) // 1
})



//3. async 包装的函数中如果没有 return 那将会被 Promise.resolve(undefined), Promise 对象没有 result 返回

async function getUser(){}
// 等同
Promise.resolve(undefined);

// await 

//1. await 必须与 async 一起使用， 不然会报错

//2. await 等待一个结果. await Promise 等待的是 Promise 的 result

let promise = new Promise(resolve =>{
  resolve(1);
})

async function getUser(){
  let result =  await promise;
  // result 等于 1 , await 等到了 promise 的结果后赋值给 result
}


//3. await 会照成线程阻塞, 只有 await 等到了结果才执行 await 下的代码, 如果等待不带将会持续等待照成线程阻塞

let promise = new Promise(resolve =>{
  resolve(1);
})

async function getUser(){
  await promise;
  console.log(1)
  // javaScript 会等待 promise 的结果在执行 console.log(1) , 如果等不到 promise 的结果将会一直等待，那 console.log(1) 将一直并不会执行
}


//4. async await 可以使我们不用去使用 Promise 的 then/catch 函数就是可以拿到 Promise 的 result , 非常便利

let promise = new Promise(resolve =>{
  resolve(1);
})

// 调用 then/catch 函数拿到 promise 对象的结果
promise.then(result =>{
  console.log(result)
}).catch(err=>{console.log(err)})

// 无需调用then/ catch 函数就可以拿到 promise 对象的结果
async function fun(){
  let result = await promise;
}


// async await 中的异常处理

//1. 通过在 async 声明的函数中使用 try...catch 来处理

async function fun(){
  try{
    await promise;
  }catch{
    // 捕获函数中的异常并处理
    console.log(err)
  }
}




//2. 通过 全局中的 Promise 错误处理器 window.addEventListener('unhandledrejection', function()) 来处理

//3. 通过 window.addEvenListener('error', function) 全局错误处理来处理


// await 等待到 Promise.reject() 的 result 时将会由 async 包装的 Promise 对象的 catch() 来处理

// 5 当async 中的的函数 出现了异常是 可以通过 promise.catch(err=>{}) 来出了如果没有 catch 来捕获与处理， 那将会有全局错误监听来处理。
例:
  async function getUser(){
    name;
    return 1;
  }
  // 处理方式一
  getUser().catch(err=>{
    console.log(err)
  })
  // 处理方式二
  window.addEventListener('onerror', function(){})

  // 处理方式三 promise 全局错误处理
  window.addEventListener('unhandledrejection', function(){})





