<template>
  <div class="follow-container">
    <!--左側導覽列-->
    <NavBar />
    <!--推文模板-->
    <TweetModal />
    <!--頁面載入中-->
    <Spinner v-if="isLoading" />
    <!-- 中上 -->
    <template v-else>
      <div class="main">
        <FollowerListHeader :initial-user="user" />
        <!-- 中下 -->
        <div>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link at">跟隨者</a>
            </li>
            <li class="nav-item">
              <router-link
                v-if="typeof this.userId !== 'undefined'"
                class="nav-link"
                :to="{
                  name: 'followingList',
                  params: { id: this.userId },
                }"
                >正在跟隨</router-link
              >
            </li>
          </ul>
        </div>
        <div class="UserFollow">
          <UserFollower
            v-for="follower in followers"
            :key="follower.id"
            :initial-follower="follower"
          />
          <div class="substitute" v-if="followers.length < 1">
            目前尚無跟隨者
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
import NavBar from "../components/NavBar";
import PopularUser from "../components/PopularUser";
import FollowerListHeader from "../components/FollowerListHeader";
import TweetModal from "./../components/TweetModal";
import UserFollower from "../components/UserFollower";
import userAPI from "../apis/users";
import Spinner from "./../components/Spinner";
export default {
  components: {
    NavBar,
    PopularUser,
    FollowerListHeader,
    TweetModal,
    UserFollower,
    Spinner,
  },
  data() {
    return {
      users: [],
      user: [],
      followers: [],
      userId: "",
      isLoading: true,
    };
  },
  created() {
    this.fetchPopularUsers();
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
    this.fetchFollower(userId);
    this.userId = this.$route.params.id;
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    this.fetchFollower(userId);
    this.userId = userId;
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        const response = await userAPI.getUser({ userId });
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
    async fetchPopularUsers() {
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
    async fetchFollower(userId) {
      try {
        const response = await userAPI.getFollowers({
          userId,
        });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.followers = response.data.data.users;
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.follow-container
  display: flex
  .main
    width: 600px
    display: flex
    flex-direction: column
    margin-left: 378px
    border-left: 1px solid #e6ecf0
    border-right: 1px solid #e6ecf0

.nav-tabs
  padding-top: 10px

  .nav-item
    width: 130px
    .nav-link
      font-weight: bold
      font-size: 15px
      line-height: 22px
      height: 45px
      color: #657786
      text-align: center
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

.substitute
  font-weight: bold
  font-size: 22px
</style>