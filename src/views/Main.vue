<template>
  <div class="container">
    <!--中間混沌宇宙-->
    <SendTweet />
  </div>
</template>

<script>
import SendTweet from "./../components/SendTweet";
export default {
  components: {
    SendTweet,
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
