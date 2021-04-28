import Vue from 'nativescript-vue'

import Home from './components/Home'

Vue.registerElement(
  'CheckBox',
  () => require('@nstudio/nativescript-checkbox').CheckBox,
  {
    model: {
      prop: 'checked',
      event: 'checkedChange'
    }
  }
);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
