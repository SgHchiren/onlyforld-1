<script>
export default {
  data () {
    return {
        arr: [{
            text: "Aquamarine"
        }, {
            text: "Hotpink"
        }, {
            text: "Gold"
        }, {
            text: "Crimson"
        }, {
            text: "Blueviolet"
        }, {
            text: "Lightblue"
        }, {
            text: "Cornflowerblue"
        }, {
            text: "Skyblue"
        }, {
            text: "Burlywood"
        }]
    }
  },
  methods:{
    show(){
      console.log(this.arr);
    }
  }
}
</script>

<template>
  <div class="color-list">
      <div
          class="color-item" 
          v-for="(item,index) in arr" v-dragging="{ item: item, list: arr, group: 'arr' }"
         :key="item.text"
      >{{item.text}}{{index}}</div>
      <div>{{arr}}</div>
      <button @click="show">touch</button>
  </div>
</template>