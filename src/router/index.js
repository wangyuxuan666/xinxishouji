import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import login from '../views/login'
import homefirst from '../views/home/home/home.vue'
import myMessage from '../views/home/myMessage'
import newNurses from '../views/home/newNurses'
import newUser from '../views/home/newUser'
import nursesList from '../views/home/nursesList'
import userGrouping from '../views/home/userGrouping'
import userList from '../views/home/userList'

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
      path: '/home/myMessage',
      component: myMessage
    }, {
      path: '/home/newNurses',
      component: newNurses
    }, {
      path: '/home/newUser',
      component: newUser
    }, {
      path: '/home/nursesList',
      component: nursesList
    }, {
      path: '/home/userGrouping',
      component: userGrouping
    }, {
      path: '/home/userList',
      component: userList
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
