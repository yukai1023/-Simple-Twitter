<template>
  <div class="setting-container">
    <!--左側導覽列-->
    <NavBar />
    <!--推文模板-->
    <TweetModal />
    <!--右側帳號設定-->
    <div class="main">
      <UserSetting :initial-user="currentUser" />
    </div>
  </div>
</template>

<script>
import NavBar from "./../components/NavBar";
import UserSetting from "./../components/UserSetting";
import TweetModal from "./../components/TweetModal";
import { mapState } from "vuex";
export default {
  components: {
    NavBar,
    UserSetting,
    TweetModal,
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style lang="sass" scoped>
.setting-container
  display: flex

.main
  padding-left: 378px
  width: 100%
</style>