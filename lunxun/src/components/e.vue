<template>
  <div class = "e">
    <h1>我是e组件</h1>



<a href="javascript:;" @click = "show1">{{list1}}
  <ul v-if = "ul_1">
   <li v-for = "item in tag1"><a href="javascript:;" @click = "toucha(item)">{{item.name}}</a></li>
 </ul>
</a>
<a href="javascript:;" @click = "show2">{{list2}}
<ul v-if = "ul_2">
   <li v-for = "item in tag2"> <a href="javascript:;" @click = "touchb(item)">{{item.name}}</a> </li>
 </ul>
</a>
<a href="javascript:;" @click = "show3">{{list3}}
<ul v-if = "ul_3">
   <li v-for = "item in tag3"><a href="javascript:;" @click = "touchc(item)">{{item}}</a></li>
 </ul>
</a>
<a href="javascript:;" @click = "show4">{{list4}}
  <ul v-if = "ul_4">
   <li v-for = "item in time"><a href="javascript:;" @click = "touchd(item)">{{item.key}}</a></li>
  </ul>
</a>
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
         console.log(this.tag2);
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
        console.log(1);
      },
      show2(){
        console.log(2)
      },
      show3(){
        console.log(3)
      },
      show4(){
        console.log(4)
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>