<template>
  <div class="user-container">
    <!--左側導覽列-->
    <NavBar />
    <!--推文模板-->
    <TweetModal />
    <div class="main">
      <!--中間個人資料-->
      <ReplyTweet />
      <!--編輯個人資料模板-->
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
import TweetModal from "./../components/TweetModal";
import ReplyTweet from "./../components/ReplyTweet";
import PopularUser from "./../components/PopularUser";
import userAPI from "../apis/users";
import { mapState } from "vuex";
export default {
  components: {
    NavBar,
    TweetModal,
    PopularUser,
    ReplyTweet,
  },
  data() {
    return {
      users: [],
      tweets: [],
      repliedTweets: [],
      likes: [],
      UserTweet: true,
      UserRepliedTweet: false,
      UserLike: false,
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.fetchUsers();
    this.fetchUserTweets();
    this.fetchUserRepliedTweets();
    this.fetchUserLikes();
  },
  methods: {
    async fetchUsers() {
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
    async fetchUserTweets() {
      try {
        const response = await userAPI.getUserTweets({
          userId: this.currentUser.id,
        });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.tweets = response.data.data.tweets;
      } catch (error) {
        console.log("error");
      }
    },
    async fetchUserRepliedTweets() {
      try {
        const response = await userAPI.getUserRepliedTweets({
          userId: this.currentUser.id,
        });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.repliedTweets = response.data.data.replies;
      } catch (error) {
        console.log("error");
      }
    },
    async fetchUserLikes() {
      try {
        const response = await userAPI.getUserLikes({
          userId: this.currentUser.id,
        });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.likes = response.data.data.tweets;
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.user-container
  display: flex

.main
  display: flex
  flex-direction: column
  margin-left: 378px
  border-left: 1px solid #e6ecf0
  border-right: 1px solid #e6ecf0
  width: 600px
.nav-tabs
  padding-top: 25px
  .nav-item
    width: 130px
    .nav-link
      font-weight: bold
      font-size: 15px
      line-height: 22px
      height: 45px
      color: #657786
      text-align: center
      cursor: pointer

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover,
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active
  border: none
  border-bottom: 2px solid #ff6600
  color: #ff6600

.PopularUser
  margin: 15px 0 0 30px
  width: 350px
  height: 756px
  background: #F5F8FA
  border-radius: 14px

h3
  padding: 10px 0 0 15px
  font-size: 18px
  font-weight: bold

.TimeLine
  width: 600px
  height: 100vh
</style>
