<template>
  <div class="qian2">
    <h2>我是qian2</h2>
    <h2>{{arr}}</h2>
<!--     <button @click="upthree">下一步</button> -->
    <button @click="down">down</button>
    <button @click="my">my</button>
    <h1>{{bro}}</h1>
  </div>
</template>
<script>
import Hub from "../../src/components/common.js"
  export default{
    data(){
      return{
        arr:[1,2,3,4,5],
        step:3,
        bro:"",
        nike:this.$store.getters.getout
      }
    },
    methods:{
    //   upthree(){
    //   this.$emit("upthree",this.step)
    // },
    down(){
      let that = this;
      Hub.$on("bro",(msg)=>{
        that.bro = msg
        console.log(this.bro);
      })
    },
    my(){
      let adi = [1,3,5,7,9];
      console.log(this.nike);
      console.log(this.$store.state.nike);
      this.$store.state.nike = adi;
      console.log(this.$store.state.nike)
    }
    }
  }
</script>
<style scoped>
  h1{
    color:green;
  }
</style>
