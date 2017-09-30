import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Reg from '@/components/Reg'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/reg',
      name: 'Reg',
      component: Reg
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
