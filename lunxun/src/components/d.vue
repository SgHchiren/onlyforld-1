<template>
  <div class="d">
    <h1>我是d组件</h1>
    <mt-loadmore :bottom-method="loadBottom"  ref="loadmore" :bottom-all-loaded="allLoaded" :auto-fill = "fill" class = "bottomload">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
</mt-loadmore>
  </div>
</template>
<script>
import { Toast,Button,Indicator,Loadmore } from 'mint-ui';
  export default{
    data(){
      return{
          list:[1,2,3,4,5,6,7,8],
          allLoaded:false,
          limit:10,
          page:0,
          fill:false
      }
    },
    methods:{
      loadBottom(){
          let {limit} = this;
        this.$http.get("../../src/data/b.json").then(res=>{
          let data = res.body.come.slice(this.page * limit,limit * (this.page + 1));
          let len = data.length;
          for(let i = 0; i < len; i ++){
            this.list.push(data[i].a);
            console.log("加载完成了")
          }
          console.log("我加载了更多数据");
          if(this.page < 9){
            this.page++;
          }else{
            this.page = 10;
            this.allLoaded = true;
            console.log("come")
          }
           this.$refs.loadmore.onBottomLoaded();
          console.log(this.page);
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  }
</script>
<style scoped>
  h1{
    color:blue;
  }
  .d{
    overflow:auto;
  }
  ul{
    width:100%;
  }
  ul li {
    display:block;
    border-bottom:1px solid black;
    width:100%;
    height:20px;
  }
  .bottomload{
    overflow:hidden;
  }
</style>