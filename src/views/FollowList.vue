<template>
  <div class="follow-container">
    <!--左側導覽列-->
    <NavBar />
    <!-- 中上 -->
    <div clas="main">
      <FollowerListHeader />
      <!-- 中下 -->
      <div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link">跟隨者</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">正在跟隨</a>
          </li>
        </ul>
      </div>
      <UserFollow />
    </div>
    <!--右側熱門用戶-->
    <PopularUser />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import PopularUser from "../components/PopularUser";
import FollowerListHeader from "../components/FollowerListHeader";
import UserFollow from "../components/UserFollow";

export default {
  components: {
    NavBar,
    PopularUser,
    FollowerListHeader,
    UserFollow,
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

.nav-tabs
  padding-top: 10px
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