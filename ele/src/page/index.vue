<template>
  <div class="fen">
    <ul>
      <li v-for="(item,index) in all">
        {{item.name}}
      </li>
    </ul>
    <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :current-page="currentPage"
    :page-size="page"
    :total="32"
    @current-change="c">
  </el-pagination>
</div>
 <div class="block">
    <span class="demonstration">调整每页显示条数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  </div>
</template>
<script>
  export default{
    /* eslint-disable */  data () {
      /* eslint-disable */  return {
      /* eslint-disable */    arr:[1,2,3],
      all:[],
      page:7,
      currentPage:1,
      currentPage2:1,
    /* eslint-disable */    }
   /* eslint-disable */   },
   methods:{
    a(){
      this.$http.get( "../../src/assets/data/a.json").then(res=>{
        this.all = res.body.continent[0].countries;
        console.log(this.all)
      }).catch(err=>{
        console.log(err);
      })
    },
    c(val){
      console.log(val);
      this.currentPage = val;
      console.log(this.currentPage);
    },
    handleSizeChange(val){
      console.log(val);
    },
    handleCurrentChange(val){
      console.log(val)
    },
   },
   mounted(){
    this.a();
   }
  /* eslint-disable */  }
</script>
<style>
  ul li {
    list-style-type: none;
  }
</style>