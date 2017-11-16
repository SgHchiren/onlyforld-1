<template>
  <div id="app">
     <router-link to="/home/a" tag = "a">Go to Foo</router-link> 
  <router-link to="/user" tag = "a" >Go to Bar</router-link> 
  <!-- <router-link to="'/user/?id='+no.id" tag = "a" >Go to Bar</router-link>  -->
  <!-- <router-link :to="{path:'/user/',query: {name: no.id}}">跳转</router-link> -->
  <a :href="'/competitions/enroll_detail/?competition_id='+no.id" >touser</a>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
    import VueRouter from "vue-router";
    import router from "./route.js";
export default {
   router,
  name: 'app',
  data () {
    return {
      a:"",
      msg: 'Welcome to Your Vue.js App',
      arr:[
        {a:""},
        {a:""}
      ],
      no:{
        id:123456
      }
    }
  },
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
