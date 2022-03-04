<template>
  <div class="line">
    <div class="header">
      <label class="return" for="return-btn">
        <img src="../images/arrow.png" alt="" />
        <button type="button" @click="$router.back()" id="return-btn"></button>
      </label>
      <div class="account">
        <label class="tweet">推文</label>
      </div>
    </div>
    <div class="Usertweet">
      <div class="userTop">
        <div class="UserPhoto">
          <img
            @click="routerClick"
            :src="[
              getData
                ? initialTweet.User.avatar
                : 'https://i.imgur.com/zYddUs8.png',
            ]"
            alt=""
          />
        </div>
        <router-link
          v-if="typeof initialTweet.UserId !== 'undefined'"
          class="link"
          id="otherUser"
          :to="{
            name: 'OtherUser',
            params: { id: initialTweet.UserId },
          }"
        >
        </router-link>
        <div class="UserAccount">
          <label @click="routerClick" class="name">{{
            getData ? initialTweet.User.name : ""
          }}</label>
          <p class="account">{{ getData ? initialTweet.User.account : "" }}</p>
        </div>
      </div>
      <div class="TweetsContent">
        <div class="article">
          <p>
            {{ getData ? initialTweet.description : "" }}
          </p>
        </div>
        <div class="time">
          <span>{{ initialTweet.createdAt | fromTime }}・</span>
          <span>{{ initialTweet.createdAt | fromDay }}</span>
        </div>
      </div>
      <div class="replyLike">
        <span> {{ initialTweet.replyCount }} </span>
        <span class="gray">回覆</span>
        <span> {{ initialTweet.likeCount }} </span>
        <span class="gray">喜歡次數</span>
      </div>
      <div class="icon">
        <img
          class="replyIcon click"
          src="../images/icon_reply.png"
          data-bs-toggle="modal"
          data-bs-target="#reply-modal"
          alt=""
        />
        <img
          v-if="initialTweet.isLiked"
          :disabled="isProcessing"
          @click.stop.prevent="unLike(initialTweet.id)"
          class="likeIcon click"
          src="../images/icon_like_fill.png"
          alt=""
        />
        <img
          v-else
          :disabled="isProcessing"
          @click.stop.prevent="addLike(initialTweet.id)"
          class="likeIcon click"
          src="../images/icon_like.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import userAPI from "../apis/users";
export default {
  props: {
    initialTweet: {
      type: [Array, Object],
      required: true,
    },
  },
  data() {
    return {
      isProcessing: false,
      getData: false,
    };
  },
  beforeUpdate() {
    this.getData = true;
  },
  mixins: [fromNowFilter],
  methods: {
    async addLike(tweetId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.addLike({ tweetId });
        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.initialTweet = {
          ...this.initialTweet,
          isLiked: true,
        };
        this.initialTweet.likeCount = this.initialTweet.likeCount + 1;
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
        this.initialTweet = {
          ...this.initialTweet,
          isLiked: false,
        };
        this.initialTweet.likeCount = this.initialTweet.likeCount - 1;
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
      }
    },
    routerClick() {
      document.getElementById("otherUser").click();
    },
  },
};
</script>

<style lang="sass" scoped>
.line
  border-bottom: 1px solid #E6ECF0

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
    .tweet
      font-weight: bold
      font-size: 18px
      line-height: 26px

.Usertweet
  display: flex
  flex-direction: column
  padding: 13px 10px 0px 15px
  border-top: 1px solid #E6ECF0

.userTop
  display: flex
  flex-direction: row
  .UserPhoto
    width: 50px
    height: 50px
    img
      width: 50px
      height: 50px
      display: block
      object-fit: cover
      border-radius: 100px
      cursor: pointer
  .UserAccount
    margin-left: 10px
    font-size: 15px
    line-height: 22px
    color: #657786
    .name
      margin-right: 5px
      color: black
      font-weight: bold
      cursor: pointer

.TweetsContent
  padding-left: 10px
  .article
    font-size: 23px
    line-height: 34px
  .time
    font-size: 15px
    line-height: 22px
    color: #657786
    margin: 0 0 15px 0

.replyLike
  font-weight: bold
  font-size: 19px
  line-height: 28px
  border-top: 1px solid #E6ECF0
  border-bottom: 1px solid #E6ECF0
  padding: 20px 0 20px 10px
  .gray
    color: #657786
    margin-right: 20px

.icon
  display: flex
  width: 30px
  height: 30px
  margin: 10px 0 10px 0
  .replyIcon
    margin-right: 150px
  .click
    cursor: pointer
</style>
