// ./src/apis/users.js
import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser () {
    return apiHelper.get('/users/current')
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
  getUserTweets ({ userId }) {
    return apiHelper.get(`/users/${userId}/tweets`)
  },
  getUserRepliedTweets ({ userId }) {
    return apiHelper.get(`/users/${userId}/replied_tweets`)
  },
  getUserLikes ({ userId }) {
    return apiHelper.get(`/users/${userId}/likes`)
  },
  getFollowings ({ userId }) {
    return apiHelper.get(`/users/${userId}/followings`)
  },
  getFollowers ({ userId }) {
    return apiHelper.get(`/users/${userId}/followers`)
  },
  addFollow ({ id: userId }) {
    return apiHelper.post('/followships', { id: userId })
  },
  unFollow ({ userId }) {
    return apiHelper.delete(`/followships/${userId}`)
  },
  addLike ({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}/like`)
  },
  unLike ({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`)
  },
  sendTweet ({ description }) {
    return apiHelper.post('/tweets', { description })
  }
}
