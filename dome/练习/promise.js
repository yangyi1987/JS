let promise1 = new Promise((resolve, reject)=>{
  resolve("成功1")
})

let promise2 = new Promise((resolve, reject)=>{
    reject("成功2")
});

let promise3 = new Promise((resolve, reject)=>{
  reject("失败");
})


let all = Promise.all([
  new Promise(resolve =>{
    resolve("成功");
  }),
  new Promise(resolve =>{
    resolve("成功2")
  }),
  new Promise(reject =>{
    reject("失败")
  })
])

all.then(result =>{
  console.log(result);
}).catch(error =>{
  console.log('现在的状态为 reject ')
  console.log(error);
})

