  <template>
  <div class="qian">
    <h1>我是千套组件</h1>
    <h2>{{arr}}</h2>
 <!--    <button @click="up">下一步</button> -->
    <button @click="tong">传递</button>
    <p>{{message}}</p>
    <div v-model="form">
      
    </div>
  </div>
</template>
<script>
import Hub from "../../src/components/common.js";
  export default{
    data(){
      return{
        arr:[1,2,3,5],
        props:['message'],
       form:{
        a:1
       },
        step:2,
        bro:"bro",
      }
    },
    methods:{
      // up(){
      //   this.$emit("upup",this.step);
      // },
      tong(){
        Hub.$emit("bro",this.bro);
        console.log(1);
      }
    }
  }
</script>
<style>
  h1{
    color:red;
  }
</style>