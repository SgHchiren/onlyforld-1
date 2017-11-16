<template>
  <div class="acer">
    <h1>我是a组件</h1>
    <input type="button" name="点我" @click = "toucha" class = "btn">
  </div>
</template>
<style scoped>
  h1{color:red;}
  .btn{
    width:20px;
    height:20px;
  }
</style>
<script>
  export default{
    data(){
      return{
        arr:[1,2,3]
      }
    },
    methods:{
      toucha(){
        alert(1)
      }
    }
  }
</script>