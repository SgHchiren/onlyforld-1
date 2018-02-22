<template>
  <!-- `checked` 为 true 或 false -->
  <div>


 
<router-link to = "/page" tag = "a">点击</router-link>
<router-view></router-view>
  </div>
</template>
<script>
 /* eslint-disable */ export default {
   /* eslint-disable */ data () {
   /* eslint-disable */   return {
       /* eslint-disable */  active: 0,
      /* eslint-disable */   showa: true,
      /* eslint-disable */   showb: false,
      /* eslint-disable */   showc: false,
      /* eslint-disable */   showd: false,
  /* eslint-disable */    }
  /* eslint-disable */  },
 /* eslint-disable */   methods: {
  /* eslint-disable */     next() {
     /* eslint-disable */   if (this.active++ > 2) {
        this.active = 3
        this.showc = true;
        this.showb = false;
     }else{
      this.showb = true;
     }

   /* eslint-disable */   }
  /* eslint-disable */  }
 /* eslint-disable */ }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
box{
  width:100px;
  height:100px;
  border:1px solid red;

}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
