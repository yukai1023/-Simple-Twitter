<template>
  <div class="nav-container">
    <div>
      <img src="../images/logo@2x.png" alt="logo" class="logo" />
    </div>
    <div class="navItem index">
      <img
        v-if="this.$route.name === 'main'"
        class="icon"
        src="../images/atHome.png"
        alt=""
      />
      <img v-else src="../images/home.png" alt="" />
      <router-link class="labelItem" to="/main"> 首頁 </router-link>
    </div>
    <div class="navItem userProfile">
      <img
        v-if="this.$route.name === 'user'"
        class="icon"
        src="../images/atProfile.png"
        alt=""
      />
      <img v-else src="../images/profile.png" alt="" />
      <router-link class="labelItem" to="/user"> 個人資料 </router-link>
    </div>
    <div class="navItem UserSetting">
      <img
        v-if="this.$route.name === 'setting'"
        class="icon"
        src="../images/atSetting.png"
        alt=""
      />
      <img v-else src="../images/setting.png" alt="" />
      <router-link class="labelItem" to="/setting"> 設定 </router-link>
    </div>
    <div class="navItem newTweet">
      <button class="btn" data-bs-toggle="modal" data-bs-target="#tweet-modal">
        推文
      </button>
    </div>
    <div class="navItem logout">
      <img src="../images/logout.png" alt="" />
      <label @click="logout" class="labelItem">登出</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      at: "home",
    };
  },
  methods: {
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="sass" scoped>
.nav-container
  width: 210px
  height: 100
  margin: 0 100px 0 103px
  position: fixed

.logo
  width: 30px
  height: 100%
  padding: 14px 0 15px 0

div
  .navItem
    padding-top: 30px
    display: flex
    align-items: center
    img
      width: 24px
      height: 24px

.logout
  position: absolute
  bottom: -130%
.labelItem
  font-weight: bold
  font-size: 18px
  padding-left: 20px
  text-decoration: none
  color: #1C1C1C
  cursor: pointer
button
  width: 100%
  height: 38px
  border-radius: 100px
  font-weight: 500
  font-size: 18px
  color: #fff
  background: #FF6600

.router-link-exact-active
  color: #FF6600
</style>