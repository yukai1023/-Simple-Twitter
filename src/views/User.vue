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
        <UserProfile />
        <!--回覆模板-->
        <ReplyModal :initial-data="replyTweet" :initial-user="user" />
        <!--編輯個人資料模板-->
        <UserEditModal />
        <div>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                id="navTweet"
                @click="tweetChange"
                :class="{ active: active === 'tweet' }"
                class="nav-link"
                >推文</a
              >
            </li>
            <li class="nav-item">
              <a
                id="navReply"
                @click="replyChange"
                class="nav-link"
                :class="{ active: active === 'reply' }"
                >推文與回覆</a
              >
            </li>
            <li class="nav-item">
              <a
                id="navLike"
                @click="likeChange"
                class="nav-link"
                :class="{ active: active === 'like' }"
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
            @reply-tweet-data="replyTweetData"
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
            @reply-tweet-data="replyTweetData"
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
import UserProfile from "./../components/UserProfile";
import UserTweet from "./../components/UserTweet";
import UserLike from "./../components/UserLike";
import UserRepliedTweet from "./../components/UserRepliedTweet";
import PopularUser from "./../components/PopularUser";
import UserEditModal from "./../components/UserEditModal";
import ReplyModal from "./../components/ReplyModal";
import Spinner from "./../components/Spinner";
import userAPI from "./../apis/users";
import { mapState } from "vuex";
export default {
  components: {
    NavBar,
    TweetModal,
    UserProfile,
    UserTweet,
    UserLike,
    PopularUser,
    UserRepliedTweet,
    UserEditModal,
    ReplyModal,
    Spinner,
  },
  data() {
    return {
      users: [],
      tweets: [],
      repliedTweets: [],
      replyTweet: [],
      user: [],
      likes: [],
      UserTweet: true,
      UserRepliedTweet: false,
      UserLike: false,
      active: "tweet",
      isLoading: true,
    };
  },
  computed: {
    ...mapState(["currentUser", "tweetCreate"]),
  },
  watch: {
    tweetCreate(newValue) {
      this.createTweet(newValue);
    },
  },
  created() {
    this.fetchUsers();
    this.fetchUserTweets();
    this.fetchUserRepliedTweets();
    this.fetchUserLikes();
    this.fetchUser();
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
    async fetchUser() {
      try {
        const response = await userAPI.getUser({ userId: this.currentUser.id });
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
    createTweet(data) {
      console.log(data);
      this.tweets.unshift({
        createdAt: data.data.tweet.createdAt,
        id: data.data.tweet.id,
        UserId: data.data.tweet.UserId,
        likeCount: 0,
        replyCount: 0,
        isLiked: false,
        description: data.data.tweet.description,
        User: {
          account: this.currentUser.account,
          avatar: this.currentUser.avatar,
          name: this.currentUser.name,
        },
      });
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
    replyTweetData(tweet) {
      this.replyTweet = tweet;
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
    .at
      color: #FF6600
      border-bottom: 2px solid #ff6600

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
  border-left: 1px solid #e6ecf0
  border-right: 1px solid #e6ecf0

.substitute
  font-weight: bold
  font-size: 22px
</style>
