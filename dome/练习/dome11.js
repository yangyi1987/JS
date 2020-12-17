let promise =  new Promise((resolve, reject)=>{
  throw new Error("对不起， 错误了")
})

promise.then(()=>{},(res)=>{
  console.log(res)
})
