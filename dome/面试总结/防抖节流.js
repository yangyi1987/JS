// 防抖  (在一个时间段内事件被都次触发但只执行最后一次触发的事件， 之前都会被清除)

function debounce(f, ms) {
  let time = 0;
  return function() {
    let arg = Array.prototype.slice.call(arguments, 1);
    if(time){
      clearTimeout(time)
    }
    time = setTimeout(function(){
        f.apply(this, arg)
    }, ms)
  }
}

// 节流 (在一段时间内， 指触发并执行一件事, 如果想执行下一件事的话需等到下一个时间周期)


// 方法一
function throttle(){
  let run = true;
  return function(){
    let arg = Array.prototype.slice(arg, 1);
    if(!run) return ;
    run = false;
    setTimeout(function(){
      f.apply(this, arg)
      run = true;
    },ms)
  }
}

// 方法二 (获取两次触发事件的时间差来判断)
function throttle(f, ms){
  let lastTime = 0;
  return function(){
      // 获取当前时间戳
      let newTime = Date.new();
      let arg = Array.prototype.slice.call(arguments,1);
      if(newTime - lastTime > ms) {
        setTimeout(function(){
          f.apply(this, arg)
        }, ms)
      }
      lastTime = newTime;
  }
}
