// 手写一个 set 

class mySet {
  constructor() {
    this.value = [];
    this.size = 0
  }
  // 添加
  add(val) {
    if(this.value.includes(val)) return this.value;
    else {
      this.value.push(val)
      ++this.size;
      return this.value;
    }
  }
  // 删除 
  delete(val){
    if(this.value.includes(val)) {
      this.value.slice(this.value.indexOf(val), 1);
      --this.size;
      return this.value;
    } else {
      return ;
    }
  }
  // has
  has(val) {
    if(this.value.includes(val)) {
      return true;
    } else {
      return false;
    }
  }
  // 清除
  clear() {
    this.value = []
    this.size = 0;
    return this.value;
  }
}

let set = new mySet();
console.log(set.add(1))

