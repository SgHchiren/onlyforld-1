<template>
  <div class = "e">
    <h1>我是e组件</h1>
<a href="javascript:;" @click = "show1" class = "menu">{{list1}}
  <ul v-if = "ul_1" class="sub_menu">
   <li v-for = "item in tag1"><a href="javascript:;" @click = "toucha(item)">{{item.name}}</a></li>
 </ul>
</a>
<a href="javascript:;" @click = "show2" class = "menu">{{list2}}
<ul v-if = "ul_2" class="sub_menu">
   <li v-for = "item in tag2"> <a href="javascript:;" @click = "touchb(item)">{{item.name}}</a> </li>
 </ul>
</a>
<a href="javascript:;" @click = "show3" class = "menu">{{list3}}
<ul v-if = "ul_3" class="sub_menu">
   <li v-for = "item in tag3"><a href="javascript:;" @click = "touchc(item)">{{item}}</a></li>
 </ul>
</a>
<a href="javascript:;" @click = "show4" class = "menu">{{list4}}
  <ul v-if = "ul_4" class="sub_menu">
   <li v-for = "item in time"><a href="javascript:;" @click = "touchd(item)">{{item.key}}</a></li>
  </ul>
</a>
  </div>
</template>
<style>
  h1{
    color:blue;
  }
  .menu{
    position:relative;

  }
  .sub_menu{
    width:100px;
    overflow:hidden;
    left:0px;
    position:absolute;
    margin-right:100px;
    margin-left:100px;
  }
  .sub_menu li{
    float:left;
  }
</style>
<script>
  export default{
    data(){
      return{
          tag1:[],//一级标签
          tag2:[],//二级标签
          tag3:["无","国内骑游","国外骑游"],
          time:[],//时效性
          list1:"无",
          list2:"无",
          list3:"无",
          list4:"无",
          ul_1:false,
          ul_2:false,
          ul_3:false,
          ul_4:false
      }
    },
    methods:{
      getData(){
        this.$http.get("../../src/data/hongbao.json").then(res=>{
          let data = res.body.data.tags;
          let time = res.body.data.tags_expire_time;
          let timelen = time.length;
          let len = data.length;
          for(let i = 0;i < len; i ++){
            this.tag1.push(data[i]);
          }
          for(let i = 0; i < timelen; i ++){
            this.time.push(time[i]);
          }
          console.log(this.time);
        }).catch(err=>{
          console.log(err);
        })
      },
      toucha(item){
        this.tag2 = [];
        this.list2 = this.list3 = this.list4 = "无";
        this.list1 = item.name;
         let len = item.sub.length;
         for(let i = 0; i < len; i ++){
          this.tag2.push(item.sub[i]);
         }
      },
      touchb(item){
        this.list3 = this.list4 = "无";
        this.list2 = item.name;
      },
      touchc(item){
        this.list4 = "无";
        this.list3 = item;
      },
      touchd(item){
        this.list4 = item.value;
      },
      show1(){
        this.ul_1 = true;
        this.ul_2 = this.ul_3 = this.ul_4 = false;
      },
      show2(){
        this.ul_2 = true;
        this.ul_1 = this.ul_3 = this.ul_4 = false;
      },
      show3(){
        this.ul_3 = true;
        this.ul_1 = this.ul_2 = this.ul_4 = false;
      },
      show4(){
        this.ul_4 = true;
        this.ul_1 = this.ul_2 = this.ul_3 = false;
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>