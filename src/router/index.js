import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import login from '../views/login'
import homefirst from '../views/home/home/home.vue'
import myMessage from '../views/home/myMessage'
import newNurses from '../views/home/nurses/newNurses'
import newUser from '../views/home/user/newUser'
import nursesList from '../views/home/nurses/nursesList'
import userGrouping from '../views/home/user/userGrouping'
import userList from '../views/home/user/userList'
import userAbandonment from '../views/home/user/userAbandonment'
import newSale from '../views/home/sale/newSale'
import saleList from '../views/home/sale/Salelist'
import achievement from '../views/home/sale/achievement'
import workOrder from '../views/home/workOrder'

Vue.use(VueRouter)

const routes = [
  {
    // 进入跳转
    path: '/',
    redirect: '/login'
  },
  {
    // 登录页
    path: '/login',
    name: 'login',
    component: login
  },
  {
    // 主页
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: '',
      component: homefirst
    }, {
      path: '/home/newUser',
      component: newUser
    }, {
      path: '/home/userList',
      component: userList
    }, {
      path: '/home/userGrouping',
      component: userGrouping
    }, {
      path: '/home/userAbandonment',
      component: userAbandonment
    }, {
      path: '/home/newNurses',
      component: newNurses
    }, {
      path: '/home/nursesList',
      component: nursesList
    }, {
      path: '/home/newSale',
      component: newSale
    }, {
      path: '/home/saleList',
      component: saleList
    }, {
      path: '/home/achievement',
      component: achievement
    }, {
      path: '/home/workOrder',
      component: workOrder
    },
    {
      path: '/home/myMessage',
      component: myMessage
    }]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
