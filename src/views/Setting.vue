<template>
  <div class="setting-container">
    <!--左側導覽列-->
    <NavBar />
    <!--推文模板-->
    <TweetModal />
    <!--右側帳號設定-->
    <UserSetting />
  </div>
</template>

<script>
import NavBar from "./../components/NavBar";
import UserSetting from "./../components/UserSetting";
import TweetModal from "./../components/TweetModal";
export default {
  components: {
    NavBar,
    UserSetting,
    TweetModal,
  },
};
</script>

<style lang="sass" scoped>
.setting-container
  display: flex
</style>