<template>
  <div class="ban">
    <h1>我是b组件</h1>
    <h3>{{$route.query.competition_id}}</h3>
    <h2>{{$route.query.name}}</h2>
    <a :href="'/competitions/enroll_detail/?competition_id='+no.id" >touser</a>
  </div>
</template>
<style scoped>
  h3{
    color:red;
  }
</style>
<script>
  export default{
    data(){
      return{
        arr:[1,2,3,4],
        no:{
          id:123456
        }
      }
    },
    methods:{
      add(){
        console.log(1);
      }
    },
    mounted(){
      this.add();
    }
  }
</script>