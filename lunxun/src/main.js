import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import Vuex from "vuex";
import 'mint-ui/lib/style.css'
import Vueresource from "vue-resource"
import store from "./store.js";
import Sortable from 'vue-sortable'
import VueDND from 'awe-dnd'
import moment from "moment";

Vue.use(VueDND)
Vue.use(Sortable)
Vue.use(moment)
Vue.use(Vuex);
Vue.use(Vueresource)
Vue.use(Mint);
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
