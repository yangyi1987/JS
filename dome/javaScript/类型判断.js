function myToString(str) {
  let result = {};
  "Number Null String Boolean Symbol Undefined Function Math Set Map WeakSet WeakMap Error Array Object".split(" ").forEach(item => {
    result["[object "+ item+ "]"] = item.toLowerCase();
  })
  let type =  typeof str === 'object' || str === 'function' ? result[Object.prototype.toString.call(str)] : typeof str;
  return type;
} 


console.log(myToString({}))
console.log(myToString([]))
console.log(myToString("张三"))
console.log(myToString(45))
console.log(myToString(true))
console.log(myToString(Symbol()))
console.log(myToString(JSON.stringify({name: '张三'})))
