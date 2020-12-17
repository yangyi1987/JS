//问题1. 说说防止重复发送ajax请求的方法有那些

// 方法一 防抖

function debounce(f, ms) {
  let time;
  return function(){
    let arg = Array.prototype.slice.call(arguments, 1);
    if(time) {
      clearTimeout(time);
    } 
    time = setTimeout(function(){
      f.apply(this, arg)
    },ms)
  }
}

// 方法二  节流
function throttle(f, ms){
  let lastTime = 0;
  return function(){
    let arg = Array.prototype.slice.call(arguments, 1);
    let newTime = Date.now();
    if(newTime-lastTime > ms) {
      setTimeout(function(){
        f.apply(this, arg)
      },ms)
    }
    lastTime = newTime;
  }
}

// 问题 2  js中的undefined和 ReferenceError: xxx is not defined， TypeError 有什么区别
// undefined 是说明该变量已经声明存在的, 但是还没有赋值,所以是undefined
// ReferenceError: xxx is not defined 引用错误，或者声明变量不存在，没有声明
// TypeError 是对象用来表示值的类型非预期类型时发生的错误。在 TypeScript 中定义数据类型,在不正确的赋值时将会出现该 TypeError 


// 问题 3 内存泄漏与内存溢出的区别
// 内存泄漏: 是指对于不用再用到内存没有释放,导致内存的暂用越来越高, 应用的性能急剧下降, 最后导致系统崩溃（用不到的内存及时释放，就叫做内存泄漏）
// 内存溢出: 程序需要使用的内存空间大于JavaScript内存剩余的内存空间时, 就会导致内存溢出。无法得到JavaScript分配的内存。
// 解决方法: 1. JavaScript中的垃圾回收机制 2. 手动释放 在不使用的不变量是赋值为 null

