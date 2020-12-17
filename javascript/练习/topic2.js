// 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

function Random() {
  let result = Array();
  function F() {
    let random = parseInt(Math.random()*30+2);
    result.includes(random) ? F() : result.push(random); result[4] ? '' : F();
  }
  F();
  return result;
}

console.log(numberRandom())
