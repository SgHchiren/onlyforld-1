<template>
  <div class="acer">
    <h1>我是a组件</h1>
    <div>{{page}}</div>
    <mt-button type="primary" @click = "show">default</mt-button>
    <mt-loadmore :top-method="loadTop"  ref="loadmore">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
</mt-loadmore>
  </div>
</template>
<style scoped>
  h1{color:red;}
  .btn{
    width:20px;
    height:20px;
  }
  ul{
    width:100%;
    overflow:hidden;
  }
  ul li {
    display:block;
    border-bottom:1px solid black;
    width:100%;
  }
</style>
<script>
import { Toast,Button,Indicator,Loadmore } from 'mint-ui';
  export default{
    data(){
      return{
        arr:[1,2,3],
        list:[1,2,3],
        limit:10,
        page:0
      }
    },
    methods:{
      show(){
        this.$indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
        setTimeout(function(){
          Indicator.close();
        },5000)
      },
      loadTop(){
        let {limit} = this;
        this.$http.get("../../src/data/b.json").then(res=>{
          let data = res.body.come.slice(this.page * limit,limit * (this.page + 1));
          let len = data.length;
          for(let i = 0; i < len; i ++){
            this.list.unshift(data[i].a);
            console.log("加载完成了")
          }
          console.log("我加载了更多数据");
          if(this.page <= 9){
            this.page++;
          }else{
            this.$refs.loadmore.onTopLoaded();
            this.page = 10;
          }
          this.$refs.loadmore.onTopLoaded();
          console.log(this.page);
        }).catch(err=>{
          console.log(err)
        })
      
      }
    }
  }
</script>