import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import Vueresource from "vue-resource"
Vue.use(Vueresource)
Vue.use(Mint);
new Vue({
  el: '#app',
  render: h => h(App)
})
