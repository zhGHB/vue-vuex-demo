import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Home from '@/views/Home/Home.vue';
import Detail from '@/views/Detail/Detail.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path:'/detail/:id',
    	name:'detail',
    	component:Detail
    }
  ]
})
