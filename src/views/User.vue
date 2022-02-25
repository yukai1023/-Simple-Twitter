<template>
  <div class="user-container">
    <!--左側導覽列-->
    <NavBar />
    <!--推文模板-->
    <TweetModal />
    <div class="main">
      <!--中間個人資料-->
      <UserProfile />
      <!--編輯個人資料模板-->
      <UserEditModal />
      <div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link">推文</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">推文與回覆</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">喜歡的內容</a>
          </li>
        </ul>
      </div>
      <UserTweet />
    </div>
    <!--右側熱門用戶-->
    <PopularUser />
  </div>
</template>

<script>
import NavBar from "./../components/NavBar";
import TweetModal from "./../components/TweetModal";
import UserProfile from "./../components/UserProfile";
import UserTweet from "./../components/UserTweet";
import PopularUser from "./../components/PopularUser";
import UserEditModal from "./../components/UserEditModal";
export default {
  components: {
    NavBar,
    TweetModal,
    UserProfile,
    UserTweet,
    PopularUser,
    UserEditModal,
  },
};
</script>

<style lang="sass" scoped>
.user-container
  display: flex

.main
  display: flex
  flex-direction: column

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

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover,
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active
  border: none
  border-bottom: 2px solid #ff6600
  color: #ff6600
</style>
