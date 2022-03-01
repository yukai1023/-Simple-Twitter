<template>
  <div lass="Follower">
    <div class="header">
      <label class="return" for="return-btn">
        <img src="../images/arrow.png" alt="" />
        <button type="button" @click="$router.back()" id="return-btn"></button>
      </label>
      <div class="account">
        <label class="name">{{ user.name }}</label>
        <label class="tweets">{{ user.tweetCount }}推文</label>
      </div>
    </div>
  </div>
</template>
<script>
import userAPI from "./../apis/users";
export default {
  data() {
    return {
      user: [],
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const response = await userAPI.getUser({ userId });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.user = response.data.data.user;
      } catch (error) {
        console.log("error");
      }
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
  border-left: 1px solid #e6ecf0
  border-right: 1px solid #e6ecf0
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