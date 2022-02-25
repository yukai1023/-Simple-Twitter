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
      <TimeLine />
    </div>
    <!--右側熱門用戶-->
    <PopularUser />
  </div>
</template>

<script>
import NavBar from "./../components/NavBar";
import SendTweet from "./../components/SendTweet";
import TweetModal from "./../components/TweetModal";
import TimeLine from "./../components/TimeLine";
import PopularUser from "./../components/PopularUser";
export default {
  components: {
    NavBar,
    SendTweet,
    TweetModal,
    TimeLine,
    PopularUser,
  },
};
</script>

<style lang="sass" scoped>
.main-container
  display: flex

.main
  display: flex
  flex-direction: column
</style>
