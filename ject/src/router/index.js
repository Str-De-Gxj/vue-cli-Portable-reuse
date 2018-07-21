import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ],
  // 这句的意思是 进入每个页面 X轴Y轴都初始为 0 回到最顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
