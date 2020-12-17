// 添加 getter 和 setter
function defineReactive(obj, key, value) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,

    get () {
      return obj[key]
    },
    set (val) {
      if(val === obj[val]) return ;
      obj[key] = val
      // 通知
    }
  })
}

// 变量对象将对象中的属性 分别添加 getter 和 setter
function walk(obj) {
  Object.keys(obj).forEach(key => {
      defineReactive(obj, key)
  });
}
