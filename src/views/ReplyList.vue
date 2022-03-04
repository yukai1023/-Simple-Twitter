<template>
  <div class="user-container">
    <!--左側導覽列-->
    <NavBar />
    <!--推文模板-->
    <TweetModal />
    <!--回覆模板-->
    <ReplyModal :initial-data="tweet" :initial-user="user" />
    <div class="main">
      <!--中間回覆貼文-->
      <ReplyTweet :initial-tweet="tweet" />
      <!--中間回覆留言-->
      <UserRepliedTweet
        v-for="tweetReply in tweetReplies"
        :key="'tweetReply' + tweetReply.id"
        :initial-replied="tweetReply"
      />
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
import ReplyModal from "./../components/ReplyModal";
import ReplyTweet from "./../components/ReplyTweet";
import TweetModal from "./../components/TweetModal";
import PopularUser from "./../components/PopularUser";
import userAPI from "../apis/users";
import UserRepliedTweet from "./../components/UserRepliedTweet";
import { mapState } from "vuex";
export default {
  components: {
    NavBar,
    ReplyModal,
    TweetModal,
    PopularUser,
    ReplyTweet,
    UserRepliedTweet,
  },
  data() {
    return {
      users: [],
      user: [],
      tweet: [],
      tweetReplies: [],
    };
  },
  computed: {
    ...mapState(["currentUser", "replyCreate"]),
  },
  watch: {
    replyCreate(newValue) {
      this.createReply(newValue);
    },
  },
  created() {
    this.fetchUsers();
    this.fetchUser();
    const { id: tweetId } = this.$route.params;
    this.fetchTweet(tweetId);
    this.fetchTweetReplied(tweetId);
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await userAPI.getPopular();
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.users = response.data.data.users;
      } catch (error) {
        console.log("error");
      }
    },
    async fetchTweet(tweetId) {
      try {
        const response = await userAPI.getTweet({
          tweetId,
        });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.tweet = response.data.data.tweet;
      } catch (error) {
        console.log("error");
      }
    },
    async fetchTweetReplied(tweetId) {
      try {
        const response = await userAPI.getTweetReplies({
          tweetId,
        });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.tweetReplies = response.data.data.replies;
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
    createReply(data) {
      this.tweetReplies.push({
        createdAt: data.data.reply.createdAt,
        TweetId: data.data.reply.TweetId,
        UserId: data.data.reply.UserId,
        id: data.data.reply.id,
        isLiked: false,
        replyTo: data.data.reply.replyTo,
        comment: data.data.reply.comment,
        User: {
          account: this.currentUser.account,
          avatar: this.currentUser.avatar,
          name: this.currentUser.name,
        },
      });
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
