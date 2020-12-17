// 防抖

function fun(f,ms){
  let time;
  return function(...ags){
    if(time) {
      clearTimeout(time)
    }
    time = setTimeout(function() {
      f.apply(this,ags)
    }
      ,ms)
  }
}

// 节流

function throttle(f,ms){
  let run = true;
  return function(...ags){
    if(!run) return;
    run = false;
    setTimeout(function(){
      f.apply(this,ags);
      run = true;
    },ms)
  }
}
