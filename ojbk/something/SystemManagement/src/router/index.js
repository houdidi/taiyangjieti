import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Login from '@/components/Login'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Select from '@/components/rs-select'
// 模块
import Model1 from './../components/model/model1.vue'
import Model2 from './../components/model/model2.vue'
console.log(Model2)

Vue.use(Router)
Vue.prototype.$http = axios

export default new Router({
  routes: [
    {
      path: '/hello',
      component: Hello,
      children: [
        {
          path: '/',
          name: 'Model1',
          component: Model1
        },
        {
          path: '/hello/model2',
          name: 'Model2',
          component: Model2
        }
      ]
    },
    {
      path: '/',            // 登录
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    }
  ]
})



