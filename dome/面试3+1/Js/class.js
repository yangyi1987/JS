(function(){
  console.log(11)
})()

!function(){
  console.log(22)
}()

!(function(){
  console.log(333)
})()

!(()=>{
  console.log(444)
})()
let time = true;
// 防抖
function shake(){
  if(!time) {
    console.log("正在发起请求，请等待");
  }
  time = false;
  setTimeout(()=>{
      request();
      time = true;
    },5000)
}

// 请求函数

function request(){
  let a = prompt()
  return new Promise((reject, resolve)=>{
    try{
      // 后端请求返回状态
      if(a > 5){
        resolve(a); break;
      }else {
        reject(a);
        throw new Error("请求失败")
      }
    }catch(err){
      request();
    }
  }).then(res=>{
    console.log(res)
  }).catch(err=>{
      request();
  })
}


new Promise((resolve, reject) =>{
  reject()
}).then()
