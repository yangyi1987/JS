    
class Observer {
// 添加 getter 和 setter
  constructor(data){
    this.walk(data);
  }
  defineReactive(obj, key, val) {
  // 深度观测数据
  typeof obj[key] === 'object' ?  this.def(obj[key]): '';
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get () {
      return val;
    },
    set (newValue) {
      if(newValue === obj[key]) {return }
      obj[key] = newValue
      // 通知
    }
  })
}

 isObject(val) {
  return typeof val ===  "object"
}

// 对象和数组区分处理
def(data) {
  if(Array.isArray(data)) {
    data.forEach(item => {
      if(this.isObject(item)) {
        this.walk(item)
      } else if(Array.isArray(item)) {
        this.def(item);
      }
    })
  } else {
    this.walk(data);
  }
}


// 变量对象将对象中的属性 分别添加 getter 和 setter
walk(obj) {
  Object.keys(obj).forEach(key => {
      this.defineReactive(obj, key, obj[key])
  });
}
}
