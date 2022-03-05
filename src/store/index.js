import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'
import adminAPI from './../apis/admin'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      account: '',
      avatar: '',
      role: ''
    },
    isAuthenticated: false,
    token: '',
    tweetCreate: {
      data: []
    },
    replyCreate: {
      data: []
    }
  },
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者驗證用的 token 儲存在 state 中
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      // 登出時一併將 state 內的 token 移除
      state.token = ''
    },
    createTweet (state, data) {
      state.tweetCreate = {
        ...state.tweetCreate,
        ...data
      }
    },
    createReply (state, data) {
      // 傳送「回覆貼文」之內容
      state.replyCreate = {
        ...state.replyCreate,
        ...data
      }
    }
  },
  actions: {
    async fetchCurrentUser ({ state, commit }) {
      try {
        if (state.currentUser.role.length > 0) {
          localStorage.setItem('role', state.currentUser.role)
        }
        const roleInLocalStorage = localStorage.getItem('role')
        let data
        if (roleInLocalStorage === 'user') {
          data = await usersAPI.getCurrentUser()
        } else if (roleInLocalStorage === 'admin') {
          data = await adminAPI.getCurrentAdmin()
        }
        const response = data.data.data.user
        commit('setCurrentUser', {
          id: response.id,
          name: response.name,
          account: response.account,
          avatar: response.avatar,
          role: response.role
        })

        return true // add this line
      } catch (error) {
        console.error(error.message)
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication')
        return false // add this line
      }
    }
  },
  modules: {
  }
})
