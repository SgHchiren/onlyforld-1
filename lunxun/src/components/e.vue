<template>
  <div class = "e">
    <h1>我是e组件</h1>
    <ul>
      <li><a href="javascript:;" @click = "show1">{{list_show1}}</a>
        <ul v-if = "list1" class = "sub_ul">
          <li><a href="javascript:;" v-for = "item in title1">{{item}}</a></li>
        </ul>
      </li>
      <li><a href="javascript:;" @click = "show2">{{list_show2}}</a>
          <ul v-if = "list2"  class = "sub_ul">
          <li><a href="javascript:;" v-for = "item in title1">{{item}}</a></li>
        </ul>
      </li>
      <li><a href="javascript:;" @click = "show3">{{list_show3}}</a>
      <ul v-if = "list3"  class = "sub_ul">
          <li><a href="javascript:;" v-for = "item in title1">{{item}}</a></li>
        </ul>
      </li>
      <li><a href="javascript:;" @click = "show4">{{list_show4}}</a>
      <ul v-if = "list4"  class = "sub_ul">
          <li><a href="javascript:;" v-for = "item in title1">{{item}}</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style>
  h1{
    color:blue;
  }
.sub_ul li{
    float:left;
}
</style>
<script>
  export default{
    data(){
      return{
          tag1:[],
          tag2:[],
          list1:false,
          list2:false,
          list3:false,
          list4:false,
          list_show1:"无",
          list_show2:"无",
          list_show3:"无",
          list_show4:"无",
      }
    },
    methods:{
      show1(){
        this.list1 = !this.list1;
      },
      show2(){
        this.list2 = !this.list2;
      },
      show3(){
        this.list3 = !this.list3;
      },
      show4(){
        this.list4 = !this.list4;
      },
      getData(){
        this.$http.get("../../src/data/hongbao.json").then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>