import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
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
    path: '/user/:id',
    name: 'OtherUser',
    component: () => import('../views/OtherUser.vue')
  },
  {
    path: '/user/replyList/:id',
    name: 'replyList',
    component: () => import('../views/ReplyList.vue')
  },
  {
    path: '/user/followingList/:id',
    name: 'followingList',
    component: () => import('../views/FollowingList.vue')
  },
  {
    path: '/user/followerList/:id',
    name: 'followerList',
    component: () => import('../views/FollowerList.vue')
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

router.beforeEach(async (to, from, next) => {
  // 從 localStorage 取出 token
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated

  // 如果有 token 的話才驗證
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 對於不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['login', 'regist', 'admin']

  // 如果 token 無效且進入需要驗證的頁面則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/login')
    return
  }

  // 如果 token 有效且進入不需要驗證到頁面則轉址到餐廳首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/main')
    return
  }
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})
export default router
