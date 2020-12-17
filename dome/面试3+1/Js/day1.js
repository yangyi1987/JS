// 问题 1: for of 与 for in 的区别
  // 区别一. for of 遍历一个数组或可迭代对象时返会的是一个 entity（{key: value}） ,而 for in 遍历时对象返回的是中的属性名
  // for for 用于遍历 数组,可不迭代对象, 不能遍历对象,因为对象是个不可迭代对象
  // for in 不用来遍历一个数组, 因为for in 会将数组的 length 属性及其不需要的属性个遍历出来。以一般用 for in 适用遍历对象。


// 问题 2: 写一个方法判断数组中的元素是否全部相同
// Object.is 与 == 不同 Object.is 不进行类型转换,  Object.is 与 === 也是不同的 Object.is 对 0和-0返回的是 true , Number.NaN 和 NaN 返回的 false;

function eq(arr) {
  if(!Array.isArray(arr)) return false;
  arr.every(item=>{
    return Object.is(arr, item);
  })
}
