<template>
  <div class="Usertweet">
    <div class="UserPhoto">
      <img :src="initialTweet.User.avatar" alt="" />
    </div>
    <div class="TweetsContent">
      <div class="UserAccount">
        <label class="name">{{ initialTweet.User.name }}</label>
        <label class="account">@{{ initialTweet.User.account }}</label>
        <span>・</span>
        <label class="time">{{ initialTweet.createdAt | fromNow }}</label>
      </div>
      <div class="article">
        <p>
          {{ initialTweet.description }}
        </p>
      </div>
      <div class="replyLike">
        <img class="replyIcon" src="../images/icon_reply.png" alt="" />
        <label>{{ initialTweet.replyCount }}</label>
        <img
          v-if="initialTweet.isLiked"
          :disabled="isProcessing"
          @click.stop.prevent="unLike(initialTweet.UserId)"
          class="likeIcon click"
          src="../images/icon_like_fill.png"
          alt=""
        />
        <img
          :disabled="isProcessing"
          v-else
          @click.stop.prevent="addLike(initialTweet.UserId)"
          class="click"
          src="../images/icon_like.png"
          alt=""
        />
        <label>{{ initialTweet.likeCount }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import userAPI from "./../apis/users";
export default {
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
  },
  methods: {
    async addLike(userId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.addLike({ userId });
        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.initialTweet = {
          ...this.initialTweet,
          isFollowing: true,
        };
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
      }
    },
    async unLike(userId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.unLike({ userId });
        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.initialTweet = {
          ...this.initialTweet,
          isFollowing: false,
        };
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.Usertweet
  display: flex
  padding: 13px 10px 13px 15px
  border-bottom: 1px solid #E6ECF0

.UserPhoto
  width: 50px
  height: 50px
  img
    width: 50px
    height: 50px
    display: block
    object-fit: cover
    border-radius: 100px

.TweetsContent
  padding-left: 10px
  .UserAccount
    font-size: 15px
    line-height: 22px
    color: #657786
    .name
      margin-right: 5px
      color: black
      font-weight: bold
  .article
    font-size: 15px
    line-height: 22px
  .replyLike
    display: flex
    padding-right: 50px
    font-size: 13px
    line-height: 13px
    color: #657786
    align-items: center
    .replyIcon
    > label
      margin-right: 50px
    .likeIcon
      Width: 20.1px
      Height: 18.91px
    .click
      cursor: pointer
  img
    width: 15px
    height: 15px
    margin-right: 10px
</style>

