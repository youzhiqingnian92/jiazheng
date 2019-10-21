import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var login = ()=>import('../pages/login.vue')
export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    }
  ]
})
