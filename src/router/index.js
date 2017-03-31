import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Login from '@/components/Login'
import Comparator from '@/components/Comparator'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/test',
      component: Test,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/search',
      name: 'Login',
      component: Login
    },
    {
      path: '/comparator',
      name: 'Comparator',
      component: Comparator
    }
  ]
})
