import { h } from 'snabbdom/build/package/h'
import {init } from 'snabbdom/build/package/init'
// import  { styleModules } from 'snabbdom/src/package/modules/style/styleModules'
// import { styleModule } from 'snabbdom/src/package/modules/class/classModules'
// import event from 'snabbdom/src/package/modules/eventlisteners'
// import  { eventListenersModule } from 'snabbdom/src/package/modules/attributes/attributesModule'
import { classModule } from 'snabbdom/src/package/modules/class'
import { styleModule } from 'snabbdom/src/package/modules/style'
import {attributesModule} from 'snabbdom/src/package/modules/attributes'
import { eventListenersModule } from 'snabbdom/src/package/modules/eventlisteners'

// h() 创建一个虚拟 Dom
// patch(oldVNode, newVNode)  对比 新老 dom 的差异

let patch = init([classModule, styleModule, eventListenersModule,attributesModule]);

let vNode = h(
  'div.app',
  {
    style: {
      fontSize: "20px",
      color: "#33333",
      background: 'red'
    },
    on: {
      click: clickMy
    },
    attrs: {
      name: 'app',
      id: 'app'
    }
  },
  ['我是第二个例子']
)
console.log('虚拟Dom');
console.log(vNode);

let dom = document.querySelector('.app');

let oldVNode = patch(dom, vNode)

function clickMy(){
  console.log("生效了");
}


