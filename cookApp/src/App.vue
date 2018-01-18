<template>
  <div id="app" class="app">
<!--     <img src="./assets/logo.png"> -->
 <mt-header fixed title="回到顶部" class="fixhead"></mt-header>
 <Home v-show="selected == '外卖'"></Home>
 <Kind v-show="selected == '订单'"></Kind>
 <Car v-show="selected == '发现'"></Car>
 <Self v-show="selected == '我的'"></Self>
 <mt-tabbar fixed v-model="selected" class="fixbottom">
  <mt-tab-item id="外卖" style="display:block;">
    <img slot="icon" src="../src/assets/img/home.svg" class="home_icon">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="../src/assets/img/kind.svg" class="kind_icon">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="../src/assets/img/car_no.svg" class="car_icon">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="../src/assets/img/self.svg" class="self_icon">
    我的
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
import { Header,Tabbar, TabItem } from 'mint-ui';
import Home from "../src/components/home.vue";
import Kind from "../src/components/kind.vue";
import Car from "../src/components/shopcar.vue";
import Self from "../src/components/self.vue";
export default {
  data(){
    return{
      name: 'App',
      selected:"外卖"
    }
  },
  watch:{
    'selected': {
            handler ( val ){
                console.log( val )
            },
            deep: false
        }
  },
  components:{
    Home,Kind,Car,Self
  }
}
</script>

<style lang="scss" scoped >
@import "./assets/style/rem.scss";

html,body{
  height:100%;
}
.app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:50px;
  .fixhead{
    background-color:#26a2ff;
    position:absolute;
    top:0;
    z-index:1;
    height:3rem;
    font-size:.8rem;
    line-height:1rem;
    right:0;
    left:0;
  }
  .fixbottom{
    display:flex;
    position:fixed;
    bottom:0;
    float:left;
    z-index:1;
    height:3rem;
    font-size:.8rem;
    justify-content:space-around;
    right:0;
    left:0;
    .home_icon{
      width:24px;
      height:24px;
      display:block;
    }
    .kind_icon{
      width:24px;
      height:24px;
      display:block;
    }
    .car_icon{
      width:24px;
      height:24px;
      display:block;
    }
    .self_icon{
      width:24px;
      height:24px;
      display:block;
    }
  }
}
</style>
