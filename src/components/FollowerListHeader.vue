<template>
  <div lass="Follower">
    <div class="header">
      <label class="return" for="return-btn">
        <img src="../images/arrow.png" alt="" />
        <button type="button" @click="$router.back()" id="return-btn"></button>
      </label>
      <div class="account">
        <label class="name">{{ initialUser.name }}</label>
        <label class="tweets">{{ initialUser.tweetCount }}推文</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    initialUser: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>
<style lang="sass" scoped>
.Follower
  width: 600px
  height: 100vh

.header
  width: 600px
  height: 55px
  display: flex
  align-items: center
  .return
    cursor: pointer
    img
      width: 17px
      height: 14px
      margin: 0px 0 0px 19px
    button
      display: none
  .account
    display: flex
    flex-direction: column
    margin: 0 0 0 43px
    .name
      font-size: 19px
      font-weight: 900
    .tweets
      color: #657786
      font-size: 13px
      line-height: 19px
</style>