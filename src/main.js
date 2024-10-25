// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style/style.css'
import NProgress from 'nprogress' // 进度条；进度指示器
import 'nprogress/nprogress.css'
// 设置每个页面的标题
// 在mian.js中引入  作为全局使用
import VueWechatTitle from 'vue-wechat-title' // 进度条；进度指示器 样式

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueWechatTitle)

// 配置插件

NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

// 监听路由跳转，进入页面执行插件动画。
router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start()

  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next()
})

// 跳转结束了
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})
