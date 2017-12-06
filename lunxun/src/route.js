import Vue from "vue";
import VueRouter from "vue-router";
import A from "../src/components/a.vue";
import B from "../src/components/b.vue";
import C from "../src/components/c.vue";
import D from "../src/components/d.vue";
import E from "../src/components/e.vue"
Vue.use(VueRouter);

const routes = [
  {
    name:"a",
    path:"/home/a",
    component:A
  },
  {
    name:"a",
    path:"/come",
    component:D
  },
  {
    path:"/user",
    component:B
  },
  ,
  {
    path:"/hongbao",
    component:E,
    name:"e"
  },
  {
    path:"/competitions/enroll_detail",
    component:C,
    children:[
      {
        path:"/:competition_id"
      }
    ]
  }
]





const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;