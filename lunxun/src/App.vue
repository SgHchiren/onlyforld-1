<template>
  <div id="app">
     <router-link to="/home/a" tag = "a">Go to Foo</router-link> 
  <router-link to="/user" tag = "a" >Go to Bar</router-link> 
  <!-- <router-link to="'/user/?id='+no.id" tag = "a" >Go to Bar</router-link>  -->
  <!-- <router-link :to="{path:'/user/',query: {name: no.id}}">跳转</router-link> -->
  <a :href="'/competitions/enroll_detail/?competition_id='+no.id" >touser</a>
  <router-link to = "/come" tag = "a">D组件</router-link>
  <router-link to = "/hongbao" tag = "a">e组件</router-link>
  <router-link to = "/ele" tag = "a">ele组件</router-link>
  <router-link to = "/demo" tag = "a">demo</router-link>
  <router-link to = "/tuo" tag = "a">tuo</router-link>
  <!--  <qian message="msg"></qian>
   <qian2></qian2>
   <dad></dad> -->
   <button @click="show">show</button>
  <router-view></router-view> 
 
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./route.js";
import qian from "../src/components/qian.vue"
import qian2 from "../src/components/qian2.vue"
import dad from "../src/components/dad.vue"
export default {
   router,
  name: 'app',
  data () {
    return {
      a:"",
      ow:[1,2,3,4,5,555],
      msg: 'Welcome to Your Vue.js App',
      arr:[
        {a:""},
        {a:""}
      ],
      arr2:[],
      step:1,
      no:{
        id:123456
      }
    }
  },
  methods:{
    // add(){
    //   console.log(1)
    // },
    // get(step){
    //   this.step = step;
    //   alert(this.step);
    // },
    show(){
      alert(this.step);
    },
    // up(step){
    //   this.step = step;
    //   alert(this.step);
    // }
  },
  components:{
    qian,
    qian2,
    dad
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  
}
</style>
