<template>
  <div class="demo">
    <h1>我是demo</h1>
    <ul>
      <li v-for="(item,index) in arr.cost">
        <span>{{item.group_name}}</span>
        <span>{{item.money_desc}}</span>
        <span>{{item.group_money}}</span>
        <a href="javascript:void(0);" @click="showthis(index)">编辑</a> 
        <a href="javascript:void(0);" @click="delethis(index)">删除</a> <!--展示所有数据 -->
      </li>
    </ul>
    name<input type="text" v-model="input">
    age<input type="text" v-model="input2">
    sex<input type="text" v-model="input3"><!-- 添加-->
     {{d}}
    <button @click="add">保存</button>
    <div v-show="showcost" style="width:100px;height:100px;border:1px solid red;">
      <input type="text" v-model="inputa">
      <input type="text" v-model="inputb">
      <input type="text" v-model="inputc">
      <button @click="save">保存</button>
      <div>
       
      </div>
    </div>
  </div>
</template>
<script>
import { Cost } from "../components/come.js";
  export default{
    data(){
      return{
        arr:{
          cost:[],
        },
        input:"",
        input2:"",
        input3:"",
        showcost:false,
        inputa:"",
        inputb:"",
        inputc:"",
        num:0,
        d:[],
      }
    },
    methods:{
      q(){
        let a = [1,2,3];
        a.push(123);
        console.log(a);
        console.log(typeof a);
      },
      time(){
        this.$http.get("../../src/data/b.json").then(res=>{
          console.log(res)
          console.log(res.data.data.draft.groups);
          let str = res.data.data.draft.groups[0].age_limit[1];
         console.log(typeof str);
         console.log(moment(str)._d)

          // let arr = '1518019200000';
          console.log(moment(moment(str)._d).format("YYYY-MM-DD HH:mm"));
          // let a = res.data.data.draft.groups[0].age_limit;
          // a[0] = moment(a[0]).format("YYYY-MM-DD HH:mm")
          // a[1] = moment(a[1]).format("YYYY-MM-DD HH:mm")
          // let d = new Array();
          // for(var i in a){
          //   d.push(a[i])
          // }
          // console.log(d);
          // let str = d.join();
          // str.replace(/<[^>]+>/g,"");
          // d = str.split(",")
          // d.splice(1, 0, "至");
          // this.d  = d.join(" ");
          // console.log(str2);
        }).catch(err=>{
          console.log(err);
        })
      },
      add(){
        let o = new Cost();
        o.group_name = this.input;
        o.money_desc = this.input2;
        o.group_money = this.input3;
        this.arr.cost.push(o);
        this.input = this.input2 = this.input3 = "";
        console.log(this.arr);
      },
      showthis(index){
        this.showcost = true;
        console.log(this.arr.cost[index]);
        this.inputa = this.arr.cost[index].group_name;
        this.inputb = this.arr.cost[index].money_desc;
        this.inputc = this.arr.cost[index].group_money;
        this.num = index;
      },
      delethis(index){
        this.arr.cost.splice(index,1);
      },
      save(){
        this.showcost = false;
        this.arr.cost[this.num].group_name = this.inputa;
        this.arr.cost[this.num].money_desc = this.inputb;
        this.arr.cost[this.num].group_money = this.inputc;
        this.num = 0;
        console.log(1);
      }
    },
    mounted(){
      this.time();
      this.q();
    }
  }
</script>
<style>
  
</style>