import * as all from './dome.js'

console.log('a');

// 宏任务1
setTimeout(function() {
    console.log('b');
    process.nextTick(function() {
        console.log('c');
    })
    new Promise(function(resolve) {
        console.log('d');
        resolve();
    }).then(function() {
        console.log('e')
    })
})
// 微任务1
process.nextTick(function() {
    console.log('f');
})
new Promise(function(resolve) {
    console.log('g');
    resolve();
}).then(function() {
    console.log('h')
})

// 宏任务2
setTimeout(function() {
    console.log('i');
    process.nextTick(function() {
        console.log('j');
    })
    new Promise(function(resolve) {
        console.log('k');
        resolve();
    }).then(function() {
        console.log('l')
    })
})
// 宏任务
    // # 执行打印 a g
  // 微任务队列
    // 微任务 process 微任务then
      // 微任务 process 打印 f
      // 微任务 then 打印 h
  // 宏任务队列
    // 宏任务1 宏任务2
    // 宏任务1
      // 打印 b d
      // 微任务队列
        // 微任务 process 微任务 then
        // 执行打印 c e
      // 宏任务队列
        // 无宏任务
    // 宏任务2
      // 执行打印 i k
      // 微任务队列
        // 微任务 process 微任务 then
        // 执行打印 j l 
      // 宏任务队列
        // 无任务
// 执行任务最终打印: a g f h b d c e i k j l 


console.log(all.fun())

// JavaScript 运行机制 循环事件， 宏任务 ，微任务
