// 判断数据类型

function fun(obj){
  if(typeof(obj) !== 'object'){
    console.log(typeof obj)
  } else {
    console.log(obj.toString())
  }
}

fun(1)
fun(new Date())
fun(new Set())
fun(Math)
