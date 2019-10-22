import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var login = ()=>import('../pages/login.vue')
var index = ()=>import('../pages/index.vue')
var welcome = ()=>import('../pages/welcome.vue')
var manage = ()=>import('../pages/manage.vue')
var banner = ()=>import('../pages/banner.vue')
var teacher = ()=>import('../pages/teacher.vue')
var water = ()=>import('../pages/water.vue')
var repair = ()=>import('../pages/repair.vue')
var housework = ()=>import('../pages/housework.vue')
var changepass = ()=>import('../pages/changepass.vue')
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
          name:"管理员管理",
        },
        {
          path:"banner",
          component:banner,
          name:"banner管理"
        },
        {
          path:"teacher",
          component:teacher,
          name:"家教管理"
        },
        {
          path:"water",
          component:water,
          name:"水站管理"
        },
        {
          path:"repair",
          component:repair,
          name:"维修管理"
        },
        {
          path:"housework",
          component:housework,
          name:"家政管理"
        },
        {
          path:"changepass",
          component:changepass,
          name:"修改密码"
        },
      ]
    },
    {
      path:"*",
      redirect:"/index"
    }
  ]
})
