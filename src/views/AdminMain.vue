<template>
  <div class="admin-container">
    <!--左側後台導覽列-->
    <AdminNavBar />
    <!--右側推文清單-->
    <TweetList />
  </div>
</template>
<script>
import AdminNavBar from "./../components/AdminNavBar";
import TweetList from "./../components/TweetList";
export default {
  components: {
    AdminNavBar,
    TweetList,
  },
};
</script>

<style lang="sass" scoped>
.admin-container
  display: flex
</style>

