import { h } from 'snabbdom/build/package/h'
import {init } from 'snabbdom/build/package/init'

// h() 创建一个虚拟 Dom
// patch(oldVNode, newVNode)  对比 新老 dom 的差异

let patch = init([]);

let vNode = h('div.app',[
  'hello Snabbdom'
])

let dom = document.querySelector('.app');

let oldVNode = patch(dom, vNode)

vNode = h('div.app',[
  'hello Snabbdom',
  h("p.text", '我是一段文本'),
  h("strong", "我是一个加粗的标签")
]);

oldVNode = patch(oldVNode, vNode);
console.log(oldVNode)
console.log(oldVNode.elm)
console.log(oldVNode.sel)
