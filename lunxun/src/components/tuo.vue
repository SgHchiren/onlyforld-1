<template>
  <div>
    <ul>
      <li v-for="item in arr">
        <h1>tuo</h1>
        <button v-if="item.com_type !== 2" @click="add">我是a</button>
         <button v-else @click="addd">我是aj1123123</button>
      </li>
    </ul>
  </div>
</template>
<style>
  h1{
    color:red;
  }
</style>
<script>
import moment from "moment"
  export default{
    data(){
      return{
        off:true,
        arr:[],
      }
    },
    methods:{
      getData(){
        console.log(this)
        this.$http.get("../../src/data/a.json").then(res=>{
          let draft = res.data && res.data.data;
          console.log(draft);
        }).catch(err=>{
          console.log(err)
        })
      },
      add(){
        console.log("行者")
      },
      addd(){
        console.log("非行者")
      },
      fixTime ( val ) {
    if ( val instanceof Date ) {
        val = val.getTime();
    }
    let time;
    let str = val + "";
    if ( str.length === 10 ) {
        time = moment(new Date( val * 1000 )).format("YYYY-MM-DD HH:mm");
        // time = new Date( val );

    } else {
        time = new Date( val );
    }
    // return new Date( time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), time.getMinutes() ).getTime();
    return time
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>