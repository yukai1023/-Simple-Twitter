<template>
  <div class="tweet">
    <img class="face" :src="initialTweet.User.avatar" alt="" />
    <div class="content">
      <div>
        <label class="name">{{ initialTweet.User.name }}</label>
        <label class="account">@{{ initialTweet.User.account }}</label>
        <span>・</span>
        <label class="time"> {{ initialTweet.createdAt | fromNow }}</label>
      </div>
      <div>
        <p>{{ initialTweet.description }}</p>
      </div>
    </div>
    <img
      class="cross"
      src="../images/crossGray@2x.png"
      alt=""
      @click.stop.prevent="deleteTweet(initialTweet.id)"
    />
  </div>
</template>
<script>
import { Toast } from "./../utils/helpers";
import adminAPI from "./../apis/admin";
import { fromNowFilter } from "./../utils/mixins";
export default {
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
  },
  mixins: [fromNowFilter],
  methods: {
    async deleteTweet(tweetId) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.deleteTweet({ tweetId });
        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$emit("after-delete-tweet", tweetId);
        Toast.fire({
          icon: "success",
          title: "成功刪除推文！",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.tweet
  display: flex
  position: relative
  align-items: center
  height: 80px
  border-bottom: 2px solid #E6ECF0
  .face
    margin-left: 15px
    width: 50px
    height: 50px
    border-radius: 100px
    object-fit: cover
  .content
    margin-left: 15px
    color: #657786
    font-size: 15px
    line-height: 22px
    .name
      margin-right: 5px
      color: #1C1C1C
      font-weight: bold
  .cross
    position: absolute
    width: 15px
    height: 15px
    right: 19.5px
    top: 19.5px
    cursor: pointer

p
  margin: 0
  color: #1C1C1C
</style>