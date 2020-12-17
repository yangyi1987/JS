let user = {
  name: '张三',
  age: 34
}
let  vm = new Proxy(user, {
  get(target, key) {
    if(key in target){
      return target[key];
    }
    return new Error('对不起, 该属性不存在')
  },
  set(target,key,val){
    if(key in  target) {
      target[key] = val;
    }
  }
})

vm.name = '历史'



console.log(vm.age)
console.log(vm.name)
