//问题一 如何避免JS浮点运算的精度问题
// toFixed() 与 parseFloat() 解决
parseFloat((0.1+0.2).toFixed(2))    // 0.3

// 问题二 使用 delete 删除数组中的元素 length 是否有不变话。
/**
 * delete 删除数组中的元素时, 数组的长度是不会发生改变的, delete 删除元素会将该下标中的元素用 undefined 来替换。 所以 length 长度不变
 * 
 */

 // 问题三 innerHTML 的缺点
 /**
  * 缺点: 添加和修改 innerHTML 内容时, 元素中旧的内容会被移除, 新的内容会被重新写入. 这样会消耗大量的时间。 如果写入的是一些 图片或资源的话，这些资源会被重新加载。
  * 导致加载时间过长时, 会导致用户体验感差的问题, 页面没有良好的交互。
  * 
  */

  // 问题四 javaScript 中的循环结构有哪一些
  /**
   * 1. for of
   * 2. for in
   * 3. while
   * 4. do....while
   * 5. while.....do
   * 6. for
   */

   // 问题四 字符串拼接的方法
   /**
    * 1. +
    * 2. concat()
    * 3. Array.prototype.join()
    * 
    */
    // 1. +
    "my name is" + "张飞"    // "my name is 张飞"
    // 2.  concat()
    "my name is ".concat("张飞");
    // 3. Array.prototype.join()
    let arr = ['my name is', '张飞']
    arr.join("")    // my name is 张飞

