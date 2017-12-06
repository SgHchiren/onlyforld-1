<template>
  <div class="d">
    <h1>我是d组件</h1>
    <mt-button type="primary" @click = "showaction">showaction</mt-button>
    <mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
</mt-actionsheet>
    <mt-button type="primary" @click = "show">default</mt-button>
    <mt-loadmore :bottom-method="loadBottom"  ref="loadmore" :bottom-all-loaded="allLoaded" :auto-fill = "fill" class = "bottomload">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
</mt-loadmore>
  </div>
</template>
<script>
import { Toast,Button,Indicator,Loadmore,MessageBox,Actionsheet } from 'mint-ui';
  export default{
    data(){
      return{
          list:[1,2,3,4,5,6,7,8],
          allLoaded:false,
          limit:10,
          page:0,
          fill:false,
          sheetVisible:false,
          actions:[{
            name:"拍照",
            method:this.pai()
          },
          {
            name:"说话",
            method:this.say()
          }
          ]
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
      },
      show(){
          this.$messagebox.prompt('操作成功').then((value,action) => {
              console.log(value);
})
      },
      pai(){
        console.log("我是拍照")
      },
      say(){
        console.log("我是说话")
      },
      showaction(){
        this.sheetVisible = true;
      },
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