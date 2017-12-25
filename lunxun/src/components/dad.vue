<template>
  <div class="dad">
    <son :message="msg"></son>
    <h1>我是父组件</h1>
    <div>{{msg}}</div>
  </div>
</template>
<script>
import son from "../components/son.vue";
  export default{
    data(){
      return{
        msg:"come"
      }
    },
    components:{
      son
    }
  }
</script>
<style>
  
</style>