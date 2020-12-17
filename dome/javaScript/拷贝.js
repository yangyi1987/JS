function clone(obj, cache = new WeakMap()) {
  if (!obj instanceof Object) return obj
  if (cache.get(obj)) return cache.get(obj)
  if (obj instanceof Function) {
    return function() {
      obj.apply(this, arguments)
    }
  }
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags)
  const res = Array.isArray(obj) ? [] : {}
  cache.set(obj, res)

  // 判断 obj 中的属性是否是Object对象，如果是对象
  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
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
