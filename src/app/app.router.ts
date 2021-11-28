import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/app/components/index.vue';
import About from '@/app/components/about.vue';
import PostRoutes from '@/app/post/post.routes';
/***
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about-us',
    //redirect:'/about',
    //redirect:{name:'/about'}
    redirect: to => {
      console.log(to);
      return '/about';
    },
  },
  ...PostRoutes,
];
/***
 * 创建路由器
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});
/**
 * 导航守卫
 * to   从哪个路径来
 * from 到哪个路径去
 * next 是否跳转到下一路由或跳转到指定路由
 */
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record =>record.meta.requiresAuth)
  if(requiresAuth){
    console.log("需要认证才能访问!!!")
  }
  // if(to.name === 'postIndex'){
  //   next('/');
  // }else{
  //   next()
  // }
  next()
});

export default router;
