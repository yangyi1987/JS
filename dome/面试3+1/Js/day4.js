// 问题一  写一个方法遍历指定对象的所有属性 

// 方法一 
function Traverse(obj) {
  if(typeof obj !== 'object') return obj;
  return Object.keys(obj);
}

// 方法二
function Traverse(obj) {
  if(!(obj instanceof Object)) return ;
  let result = [];
  for(let item in obj) {
    result.push(item);
  }
  return result;
} 

// 问题二  localStorage 什么时候过期
/**
 * localStorage 是不会过期的
 * sessionStorage 关闭当前窗口就会过期, 刷新窗口是还依然存在。
 * 
 */

 // 问题三 写一个 localStorage 过期的方法

 // 存数据
 function creatLocalStorage(obj){
  let time = Date.now() + 86400000;
  let data = {
    date: time,
    info: obj
  }
  localStorage.setItem('data', JSON.stringify(data));
 }

 // 检查是否过期
 function  examination() {
    try{
      let newTime = Date.now();
      let data = JSON.parse(localStorage.getItem('data'))
      data.date - newTime > 0 ? console.log("有效期") : localStorage.clear();
    }catch(err){

    }
 }
