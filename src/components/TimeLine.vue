<template>
  <div class="Usertweet">
    <div @click="replyLink()" class="UserPhoto">
      <img :src="tweet.User.avatar" alt="" />
    </div>
    <div class="TweetsContent">
      <div class="UserAccount" @click="replyLink()">
        <label class="name">{{ tweet.User.name }}</label>
        <label class="account">@{{ tweet.User.account }}</label>
        <span>・</span>
        <label class="time">{{ tweet.createdAt | fromNow }}</label>
      </div>
      <div class="article">
        <router-link
          class="link"
          id="replyLink"
          :to="{
            name: 'replyList',
            params: { id: this.tweet.id },
          }"
        >
          {{ tweet.description }}
        </router-link>
      </div>
      <div class="replyLike">
        <img
          class="replyIcon click"
          src="../images/icon_reply.png"
          data-bs-toggle="modal"
          data-bs-target="#reply-modal"
          @click="replyTweetData(tweet)"
          alt=""
        />
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
    initialTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tweet: this.initialTweet,
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
    replyLink() {
      document.getElementById("replyLink").click();
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
  cursor: pointer
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
    label
      cursor: pointer
    .name
      margin-right: 5px
      color: black
      font-weight: bold
  .article
    font-size: 15px
    line-height: 22px
    margin: 0 0 12px 0
    .link
      color: #1C1C1C
      text-decoration: none
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

