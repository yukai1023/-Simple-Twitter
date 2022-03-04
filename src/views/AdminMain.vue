<template>
  <div class="admin-container">
    <!--左側後台導覽列-->
    <AdminNavBar />
    <!--右側推文清單-->
    <div class="list-container">
      <div class="title">
        <span>推文清單</span>
      </div>
      <div class="list">
        <TweetList
          v-for="tweet in tweets"
          :key="tweet.id"
          :initial-tweet="tweet"
          @after-delete-tweet="afterDeleteTweet"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavBar from "./../components/AdminNavBar";
import TweetList from "./../components/TweetList";
import adminAPI from "./../apis/admin";

export default {
  components: {
    AdminNavBar,
    TweetList,
  },
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await adminAPI.getTweets();
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.tweets = response.data.data.tweets;
      } catch (error) {
        console.log("error");
      }
    },
    afterDeleteTweet(tweetId) {
      this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
    },
  },
};
</script>

<style lang="sass" scoped>
.admin-container
  display: flex
.list-container
  width: 100%
  padding-left: 378px
  .title
    display: flex
    height: 55px
    padding-left: 26.5px
    align-items: center
    border-left: 2px solid #E6ECF0
    border-bottom: 2px solid #E6ECF0
    span
      font-size: 18px
      line-height: 26px
      color: #1C1C1C
      font-weight: bold
  .list
    height: 100%
    border-left: 2px solid #E6ECF0
</style>

