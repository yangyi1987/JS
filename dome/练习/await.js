
// async 会将 function 定义的函数, 其自动会被 包装成一个 resolve 状态的Promise 对象返回;

// 如果有return 值的话将相当于return new Promise.resolve("张三")
async function getUserName(){
  return '张三'
}
// 与上等价
function getUserName(){
  return new Promise.resolve("张三")
}


// 没有return是Promise.resolve(undefined) 
async function getNull(){
  console.log("null")
}
// 与上等价
function getNull(){
  return new Promise.resolve(undefined);
}

// await  与 async 一起使用，await 让JavaScript引擎等待Promise 的 （settle）后返回的结果;
let promise = new Promise(resolve =>{
  resolve("我返回值了");
})

async function getPromiseResult(){  
  // await 获取了 promise返回的结果将其赋值给 result = "我返回值了"
  let result =  await promise;
}


// await等待promise返回结果时， Promise 被 reject 它将会被 throw error,
async function getAge(){
  await new Promise.reject(new Error("出错了"))
}
// 与上同
async function getAge(){
  throw new (new Error("出错了"))
}

// 通过 try catch 来处理await 等待 Promise 对象reject状态 

async function getAge(){
  try{
    await new Promise.reject(new Error("出错了"))
  }catch(error){
    console.log(error); 
  }
}










