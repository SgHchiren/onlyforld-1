import Vue from "vue";
import VueRouter from "vue-router";
import A from "../src/components/a.vue";
import B from "../src/components/b.vue";
import C from "../src/components/c.vue";

Vue.use(VueRouter);

const routes = [
  {
    name:"a",
    path:"/home/a",
    component:A
  },
  {
    path:"/user",
    component:B
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