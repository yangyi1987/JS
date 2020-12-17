class Vue {
  constructor(options){
    //1. 通过 options 保存属性
    //2. 把 data 对象中的 property 转为 getter 和 setter 
    //3. 调用 observer 监听 data 
    //4. 调用 complier对象 解析治理和差值表达式
    this.$el = typeof options.el  === 'string' ? document.getElementById(options.el) : options.el;
    this.$options = options; 
    this.$data = options.data || {};
    // 代理 data 对象中的 属性
    this._proxyDate(this.$data);
    // this._proxyDate(this.$options)
    // 将 data 中的 property 实例化
    new Observer(this.$data)
  }

  _proxyDate(obj) {
    Object.keys(obj).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get () {
         return obj[key];
        },
        set (newValue) {
          if(newValue === obj[key]) {return }
          obj[key] = value;
        }

      })
    })
  }
}
