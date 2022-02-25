import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/user/followList',
    name: 'followList',
    component: () => import('../views/FollowList.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/admin/main',
    name: 'adminMain',
    component: () => import('../views/AdminMain.vue')
  },
  {
    path: '/admin/userList',
    name: 'adminUserList',
    component: () => import('../views/AdminUserList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
