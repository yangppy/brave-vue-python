import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/index'),
      meta: {
        title: '💖臭鱼和臭宁的恋爱空间💖'
      }
    },
    {
      path: '/diary',
      name: 'DiaryList',
      component: () => import('@/views/article/list'),
      meta: {
        title: '点点滴滴 - 💖与子成说💖'
      }
    },
    {
      path: '/diary/:id',
      name: 'Diary',
      component: () => import('@/views/article/detail'),
      meta: {
        title: '点点滴滴 - 💖与子成说💖'
      }
    },
    {
      path: '/blessing',
      name: 'Blessing',
      component: () => import('@/views/blessing/list'),
      meta: {
        title: '祝福板 - 💖与子成说💖'
      }
    },
    {
      path: '/memory',
      name: 'Memory',
      component: () => import('@/views/memory/list'),
      meta: {
        title: '恋爱清单 - 💖与子成说💖'
      }
    },
    { path: '*', redirect: '/', hidden: true }
  ]
})
