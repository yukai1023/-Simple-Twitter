<template>
  <div class="main-container">
    <!--左側導覽列-->
    <NavBar />
    <!--推文模板-->
    <TweetModal />
    <div class="main">
      <!--中間上側推文-->
      <SendTweet />
      <!--中間推文時間軸-->
      <div class="TimeLine">
        <TimeLine
          v-for="tweet in tweets"
          :key="tweet.id"
          :initial-tweet="tweet"
          @reply-tweet-data="replyTweetData"
        />
        <ReplyModal :initial-data="replyTweet" :initial-user="user" />
      </div>
    </div>
    <!--右側熱門用戶-->
    <div class="PopularUser">
      <h3>Popular</h3>
      <PopularUser v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import NavBar from "./../components/NavBar";
import SendTweet from "./../components/SendTweet";
import TweetModal from "./../components/TweetModal";
import ReplyModal from "./../components/ReplyModal";
import TimeLine from "./../components/TimeLine";
import PopularUser from "./../components/PopularUser";
import userAPI from "./../apis/users";
import { mapState } from "vuex";
export default {
  components: {
    NavBar,
    SendTweet,
    TweetModal,
    TimeLine,
    PopularUser,
    ReplyModal,
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  data() {
    return {
      tweets: [],
      users: [],
      user: [],
      replyTweet: [],
    };
  },
  created() {
    this.fetchTweets();
    this.fetchPopularUsers();
    this.fetchUser();
    console.log(this.replyTweet);
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await userAPI.getTweets();
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        console.log(response);
        this.tweets = response.data.data.tweets;
      } catch (error) {
        console.log("error");
      }
    },
    async fetchPopularUsers() {
      try {
        const response = await userAPI.getPopular();
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        console.log("getUser");
        this.users = response.data.data.users;
      } catch (error) {
        console.log("error");
      }
    },
    async fetchUser() {
      try {
        const response = await userAPI.getUser({ userId: this.currentUser.id });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.user = response.data.data.user;
      } catch (error) {
        console.log("error");
      }
    },
    replyTweetData(tweet) {
      this.replyTweet = tweet;
    },
  },
};
</script>

<style lang="sass" scoped>
.main-container
  display: flex

.main
  display: flex
  flex-direction: column
  padding-left: 378px
.TimeLine
  width: 600px
  height: 100vh
  border-left: 1px solid #E6ECF0
  border-right: 1px solid #E6ECF0

.PopularUser
  margin: 15px 0 0 30px
  width: 350px
  height: 756px
  background: #F5F8FA
  border-radius: 14px
  position: fixed
  right: 10%
h3
  padding: 10px 0 0 15px
  font-size: 18px
  font-weight: bold
</style>
