<template>
  <div class="son">
      <h1>{{message}}</h1>
  </div>
</template>
<script>
  export default{
    data(){
      return{
     
      }
    },
       props:["message"]
  }
</script>
<style scoped>
  h1{
    color:green;
  }
</style>