import Vue from 'vue';
import VueRouter from 'vue-router';

const load = (path) => () => import(`@/pages/${path}.vue`);

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: load('Home'),
      name: 'home',
    },
    {
      path: '/pages/1',
      component: load('Page1'),
      name: 'page-1',
    },
    {
      path: '/pages/2',
      component: load('Page2'),
      name: 'page-2',
    },
    {
      path: '/pages/3',
      component: load('Page3'),
      name: 'page-3',
    },
  ],
});
