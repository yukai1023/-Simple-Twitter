// ./src/apis/admin.js
import { apiHelper } from './../utils/helpers'

export default {
  getTweets () {
    return apiHelper.get('/admin/tweets')
  },
  getUsers () {
    return apiHelper.get('/admin/users')
  },
  delete ({ categoryId }) {
    return apiHelper.delete(`/admin/categories/${categoryId}`)
  },
  create ({ name }) {
    return apiHelper.post('/admin/categories', { name })
  },
  update ({ categoryId, name }) {
    return apiHelper.put(`/admin/categories/${categoryId}`, { name })
  }
}
