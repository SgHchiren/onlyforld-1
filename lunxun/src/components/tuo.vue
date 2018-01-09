<template>
  <div>
    <ul>
      <li v-for="item in arr">
        <h1>tuo</h1>
        <button v-if="item.com_type !== 2" @click="add">我是a</button>
         <button v-else @click="addd">我是b</button>
      </li>
    </ul>
  </div>
</template>
<style>
  h1{
    color:red;
  }
</style>
<script>
import moment from "moment"
  export default{
    data(){
      return{
        off:true,
        arr:[],
      }
    },
    methods:{
      getData(){
        console.log(this)
        this.$http.get("../../src/data/a.json").then(res=>{
          console.log(res.data.data);

        }).catch(err=>{
          console.log(err)
        })
      },
      add(){
        console.log("行者")
      },
      addd(){
        console.log("非行者")
      },
    },
    mounted(){
      this.getData();
    }
  }
</script>