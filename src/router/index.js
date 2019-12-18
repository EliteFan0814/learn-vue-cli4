import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      children: [
        // 首页
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home'),
          meta:{
            title:'统计'
          }
        }
      ]
    }
  ]
})