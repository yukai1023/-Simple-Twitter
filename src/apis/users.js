// ./src/apis/users.js
import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser () {
    return apiHelper.get('/get_current_user')
  },
  getPopular () {
    return apiHelper.get('/users/popular')
  },
  getTweets () {
    return apiHelper.get('/tweets')
  },
  getEditModal ({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  getUser ({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  getFollowings ({ userId }) {
    return apiHelper.get(`/users/${userId}/followings`)
  },
  addFollow ({ id: userId }) {
    return apiHelper.post('/followships', { id: userId })
  },
  unFollow ({ userId }) {
    return apiHelper.delete(`/followships/${userId}`)
  },
  addLike ({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike ({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  getTopUsers () {
    return apiHelper.get('/users/top')
  },
  addFollowing ({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowing ({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  }
}
