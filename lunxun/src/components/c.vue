<template>
  <div>
  <h1>我是c组件</h1>
  <h3>{{$route.query.competition_id}}</h3>
  <ul>
    <li v-for = "item in data">{{item.a}}</li>
  </ul>
  <input type="button" value = "点击显示" @click = "show()">
  <input type="button" name="touch" @click = "add()" value = "点击">
  <input type="button" @click = "one()" value = "第一页">
  <input type="button" @click = "two()" value = "第二页" name="">
  <input type="button" @click = "three()" value = "第三页">
  </div>
</template>
<script>
  export default{
    data(){
      return{
          data:[]
      }
    },
    methods:{
      add(){
        this.$http.get("../../src/data/b.json").then(res=>{
          console.log(res);
          let data = res.body.come;
          let len = data.length;
          console.log(len);
          for(let i = 0; i < len; i ++){
            this.data.push(data[i]);
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      one(){
        let limit = 10;
        let page = 0;
        this.$http.get("../../src/data/b.json").then(res=>{
          let data = res.body.come;
          data = data.slice((limit * page),(limit * (page + 1)));
          console.log(data);
          let len = data.length;
          console.log(len);
          for(let i = 0; i < len; i ++){

          }
        })
      },
      two(){

      },
      three(){

      },
      show(){
      
      }

    }
  }
</script>
<style scoped>
  h1{
    color:green;
  }
</style>