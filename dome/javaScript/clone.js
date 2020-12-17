function clone(obj, cache = new WeakMap()) {
  // 不是 object 的话直接返回这个值
  if (!obj instanceof Object) return obj
  if (cache.get(obj)) return cache.get(obj)
  // 如果是函数的话  返回函数
  if (obj instanceof Function) {
    return function() {
      obj.apply(this, arguments)
    }
  }
  // 如果是 Date 对象的换返回这个是Date的格式化数据
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags)
  const res = Array.isArray(obj) ? [] : {}
  cache.set(obj, res)

  // 普通的object 对象进行拷贝
  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
      // 函数递归 拷贝
      res[key] = clone(obj[key], cache)
    } else {
      res[key] = obj[key]
    } 
  })
  return res
}

// 测试
const target = {
  field1: 1,
  field2: undefined,
  field3: 'ConardLi',
  field4: {
      child: 'child',
      child2: {
          child2: 'child2'
      }
  },
  field5: [2, 4, 8],
  field7: function() {},
  field8: new Date(),
  filed9: new RegExp(/som/)
}
// 增加循环引用
target.field6 = target
// 测试
console.log(clone(target))
console.log( !(target instanceof Object))
function fun(){}
console.log(clone(fun))
