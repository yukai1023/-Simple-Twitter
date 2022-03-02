<template>
  <div class="Usertweet">
    <div class="UserPhoto">
      <img :src="tweet.User.avatar" alt="" />
    </div>
    <div class="TweetsContent">
      <div class="UserAccount">
        <label class="name">{{ tweet.User.name }}</label>
        <label class="account">@{{ tweet.User.account }}</label>
        <span>・</span>
        <label class="time">{{ tweet.createdAt | fromNow }}</label>
      </div>
      <div class="article">
        <p>
          {{ tweet.description }}
        </p>
      </div>
      <div class="replyLike">
        <img class="replyIcon" src="../images/icon_reply.png" alt="" />
        <label>{{ tweet.replyCount }}</label>
        <img
          v-if="tweet.isLiked"
          :disabled="isProcessing"
          @click.stop.prevent="unLike(tweet.id)"
          class="likeIcon click"
          src="../images/icon_like_fill.png"
          alt=""
        />
        <img
          v-else
          :disabled="isProcessing"
          @click.stop.prevent="addLike(tweet.id)"
          class="click"
          src="../images/icon_like.png"
          alt=""
        />
        <label>{{ tweet.likeCount }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import userAPI from "./../apis/users";
export default {
  props: {
    initialLike: {
      type: Object,
      required: true,
    },
  },
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
  },
  data() {
    return {
      tweet: this.initialLike,
      isProcessing: false,
    };
  },
  methods: {
    async addLike(tweetId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.addLike({ tweetId });
        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweet = {
          ...this.tweet,
          isLiked: true,
        };
        this.tweet.likeCount = this.tweet.likeCount + 1;
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
      }
    },
    async unLike(tweetId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.unLike({ tweetId });
        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweet = {
          ...this.tweet,
          isLiked: false,
        };
        this.tweet.likeCount = this.tweet.likeCount - 1;
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.TimeLine
  width: 600px
  height: 100vh
  border-left: 1px solid #E6ECF0
  border-right: 1px solid #E6ECF0

.Usertweet
  display: flex
  padding: 13px 10px 13px 15px
  border-bottom: 1px solid #E6ECF0
  border-left: 1px solid #E6ECF0
  border-right: 1px solid #E6ECF0
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

