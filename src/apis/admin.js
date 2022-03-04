// ./src/apis/admin.js
import { apiHelper } from './../utils/helpers'

export default {
  getTweets () {
    return apiHelper.get('/admin/tweets')
  },
  getUsers () {
    return apiHelper.get('/admin/users')
  },
  getCurrentAdmin () {
    return apiHelper.get('/admin/current')
  },
  deleteTweet ({ tweetId }) {
    return apiHelper.delete(`/admin/tweets/${tweetId}`)
  }
}
