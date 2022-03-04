<template>
  <div class="user-container">
    <!--左側導覽列-->
    <NavBar />
    <!--推文模板-->
    <TweetModal />
    <!--頁面載入中-->
    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="main">
        <!--中間個人資料-->
        <OtherUserProfile :initial-user="user" />
        <div>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                @click="tweetChange"
                class="nav-link"
                :class="{ active: active === 'tweet' }"
                >推文</a
              >
            </li>
            <li class="nav-item">
              <a
                @click="replyChange"
                :class="{ active: active === 'reply' }"
                class="nav-link"
                >推文與回覆</a
              >
            </li>
            <li class="nav-item">
              <a
                @click="likeChange"
                :class="{ active: active === 'like' }"
                class="nav-link"
                >喜歡的內容</a
              >
            </li>
          </ul>
        </div>
        <div class="TimeLine">
          <UserTweet
            v-show="UserTweet"
            v-for="tweet in tweets"
            :key="tweet.id"
            :initial-tweet="tweet"
          />
          <div
            class="substitute"
            v-if="tweets.length < 1 && UserTweet === true"
          >
            目前尚無貼文
          </div>
          <UserRepliedTweet
            v-show="UserRepliedTweet"
            v-for="repliedTweet in repliedTweets"
            :key="'reply' + repliedTweet.id"
            :initial-replied="repliedTweet"
          />
          <div
            class="substitute"
            v-if="repliedTweets.length < 1 && UserRepliedTweet === true"
          >
            目前尚無推文與回覆
          </div>
          <UserLike
            v-show="UserLike"
            v-for="like in likes"
            :key="'like' + like.id"
            :initial-like="like"
          />
          <div class="substitute" v-if="likes.length < 1 && UserLike === true">
            目前尚無喜歡的內容
          </div>
        </div>
      </div>
      <!--右側熱門用戶-->
      <div class="PopularUser">
        <h3>Popular</h3>
        <PopularUser
          v-for="user in users"
          :key="user.id"
          :initial-user="user"
        />
      </div>
    </template>
  </div>
</template>

<script>
import NavBar from "./../components/NavBar";
import TweetModal from "./../components/TweetModal";
import OtherUserProfile from "./../components/OtherUserProfile";
import UserTweet from "./../components/UserTweet";
import UserLike from "./../components/UserLike";
import UserRepliedTweet from "./../components/UserRepliedTweet";
import PopularUser from "./../components/PopularUser";
import userAPI from "../apis/users";
import { mapState } from "vuex";
import Spinner from "./../components/Spinner";
export default {
  components: {
    NavBar,
    TweetModal,
    OtherUserProfile,
    UserTweet,
    UserLike,
    PopularUser,
    UserRepliedTweet,
    Spinner,
  },
  data() {
    return {
      user: [],
      users: [],
      tweets: [],
      repliedTweets: [],
      likes: [],
      UserTweet: true,
      UserRepliedTweet: false,
      UserLike: false,
      active: "tweet",
      isLoading: true,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUsers();
    this.fetchUser(userId);
    this.fetchUserTweets(userId);
    this.fetchUserRepliedTweets(userId);
    this.fetchUserLikes(userId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    this.fetchUserTweets(userId);
    this.fetchUserRepliedTweets(userId);
    this.fetchUserLikes(userId);
    next();
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
    async fetchUser(userId) {
      try {
        const response = await userAPI.getUser({
          userId,
        });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.user = response.data.data.user;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error");
      }
    },
    async fetchUserTweets(userId) {
      try {
        const response = await userAPI.getUserTweets({
          userId,
        });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.tweets = response.data.data.tweets;
      } catch (error) {
        console.log("error");
      }
    },
    async fetchUserRepliedTweets(userId) {
      try {
        const response = await userAPI.getUserRepliedTweets({
          userId,
        });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.repliedTweets = response.data.data.replies;
      } catch (error) {
        console.log("error");
      }
    },
    async fetchUserLikes(userId) {
      try {
        const response = await userAPI.getUserLikes({
          userId,
        });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.likes = response.data.data.tweets;
      } catch (error) {
        console.log("error");
      }
    },
    tweetChange() {
      this.UserTweet = true;
      this.UserRepliedTweet = false;
      this.UserLike = false;
      this.active = "tweet";
    },
    replyChange() {
      this.UserTweet = false;
      this.UserRepliedTweet = true;
      this.UserLike = false;
      this.active = "reply";
    },
    likeChange() {
      this.UserTweet = false;
      this.UserRepliedTweet = false;
      this.UserLike = true;
      this.active = "like";
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
  padding-left: 378px
.nav-tabs
  padding-top: 25px
  border-left: 1px solid #e6ecf0
  border-right: 1px solid #e6ecf0
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

.substitute
  font-weight: bold
  font-size: 22px
</style>
