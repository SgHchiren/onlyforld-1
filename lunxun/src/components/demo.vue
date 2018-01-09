<template>
  <div class="demo">
    <h1>我是demo</h1>
    <ul>
      <li v-for="item in arr">
        <span>{{item.name}}</span>
        <span>{{item.age}}</span>
        <span>{{item.sex}}</span>
      </li>
    </ul>
    name<input type="text" v-model="input">
    age<input type="text" v-model="input2">
    sex<input type="text" v-model="input3">
    <button @click="add">保存</button>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        arr:[],
        input:"",
        input2:"",
        input3:""
      }
    },
    methods:{
      add(){
        let o = new Object();
        o.name = this.input;
        o.age = this.input2;
        o.sex = this.input3;
        this.arr.push(o);
      }
    }
  }
</script>
<style>
  
</style>