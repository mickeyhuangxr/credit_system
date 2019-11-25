import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/views/login/index')
    },
    {
      path: '/',
      component: ()=>import('@/layout/index'),
      redirect:'/home',
      children:[
        {
          path: '/home',   //首页
          name: 'home',
          component: ()=>import('@/views/home/index'),
          meta:{
            title:'首页'
          }
        },
        {
          path: '/loan-input',  //贷款申请
          name: 'loan-input',
          component: ()=>import('@/views/loan-input/index'),
          meta:{
            title:'贷款申请',
            roles:['input']
          }
        },
        {
          path: '/input-manage',  //申请管理
          name: 'input-manage',
          component: ()=>import('@/views/input-manage/index'),
          meta:{
            title:'申请管理',
            roles:['input']
          }
        },
        {
          path: '/loan-approve/first',  //贷款初审
          name: 'loan-approve/first',
          component: ()=>import('@/views/loan-approve/first'),
          meta:{
            title:'贷款初审',
            roles:['approve']
          }
        },
        {
          path: '/loan-approve/end',  //贷款终审
          name: 'loan-approve/end',
          component: ()=>import('@/views/loan-approve/end'),
          meta:{
            title:'贷款终审',
            roles:['approve']
          }
        },
        {
          path: '/contract',  //标的管理
          name: 'contract',
          component: ()=>import('@/views/contract/index'),
          meta:{
            title:'标的管理'
          }
        },
        {
          path: '/createManager',  //创建管理员
          name: 'createManager',
          component: ()=>import('@/views/manage/createManager'),
          meta:{
            title:'创建管理员'
          }
        },
        {
          path: '/showManager',  //显示管理员
          name: 'showManager',
          component: ()=>import('@/views/manage/showManager'),
          meta:{
            title:'权限管理   /   列表显示'
          }
        },
      ]
    },

  ]
})
