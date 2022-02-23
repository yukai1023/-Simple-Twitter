<template>
  <div class="container">
    <!--中間混沌宇宙-->
    <SendTweet />
    <TweetModal />
    <ReplyModal />
  </div>
</template>

<script>
import SendTweet from "./../components/SendTweet";
import TweetModal from "./../components/TweetModal";
import ReplyModal from "./../components/ReplyModal";
export default {
  components: {
    SendTweet,
    TweetModal,
    ReplyModal,
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
