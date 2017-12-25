import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    nike:[1,2,3,4,5,888]
  },
  getters:{
      getout:(state)=>{
          let len = state.nike.length;
          for(let i = 0; i < len; i ++){
            
          }
      }
  }
})

export default store;