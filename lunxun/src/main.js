import Vue from 'vue'
import App from './App.vue'
import Vueresource from "vue-resource"
Vue.use(Vueresource)

new Vue({
  el: '#app',
  render: h => h(App)
})
