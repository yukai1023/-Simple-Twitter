// ./src/apis/authorization.js
import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  signIn ({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/users/signin', {
      account,
      password
    })
  },
  adminSignIn ({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/admin/signin', {
      account,
      password
    })
  },
  signUp ({ name, email, password, passwordCheck }) {
    return apiHelper.post('/signup', {
      name,
      email,
      password,
      passwordCheck
    })
  }
}
