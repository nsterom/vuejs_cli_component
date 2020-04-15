import Vue from 'vue'
import App from './App.vue'
import Test from './Test.vue'
import ComponentTest from './ComponentTest.vue'
import SeverStatus from './ServerStatus.vue'

Vue.component('component-test', ComponentTest)
Vue.component('server-status', SeverStatus)

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#test',
  render: h => h(Test)
})