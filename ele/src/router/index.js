import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Fen from '@/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  /* eslint-disable */    {
   /* eslint-disable */     path: "/page",
 /* eslint-disable */       component: Fen
  /* eslint-disable */    }
  ]
})
