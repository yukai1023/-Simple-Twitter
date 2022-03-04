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
  signUp ({ account, name, email, password, checkPassword }) {
    return apiHelper.post('users', {
      account,
      name,
      email,
      password,
      checkPassword
    })
  },
  editAccount ({ userId, account, name, email, password, checkPassword }) {
    return apiHelper.put(`/users/${userId}/account`, {
      account,
      name,
      email,
      password,
      checkPassword
    })
  }
}
