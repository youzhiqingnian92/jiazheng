import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var login = ()=>import('../pages/login.vue')
var index = ()=>import('../pages/index.vue')
var welcome = ()=>import('../pages/welcome.vue')
var manage = ()=>import('../pages/manage.vue')
var manageList = ()=>import('../pages/manageList.vue')
export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index,
      children:[
        {
          path:"",
          component:welcome
        },
        {
          path:"manage",
          component:manage,
          children:[
            {
              path:'',
              name:"管理员管理",
              component:manageList
            }
          ]
        }
      ]
    },
    {
      path:"*",
      redirect:"/index"
    }
  ]
})
