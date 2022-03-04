<template>
  <div class="Usertweet">
    <div class="UserPhoto">
      <img :src="tweet.User.avatar" alt="" />
    </div>
    <div class="TweetsContent">
      <div class="UserAccount">
        <label class="name">{{ initialReplied.User.name }}</label>
        <label class="account">@{{ initialReplied.User.account }}</label>
        <span>・</span>
        <label class="time">{{ initialReplied.createdAt | fromNow }}</label>
      </div>
      <div class="replyTo">
        <span>回覆給 </span>
        <router-link
          class="user"
          v-if="typeof initialReplied.UserId !== 'undefined'"
          :to="{ name: 'OtherUser', params: { id: initialReplied.UserId } }"
        >
          @{{ initialReplied.replyTo }}
        </router-link>
      </div>
      <div class="article">
        <router-link
          v-if="typeof initialReplied.TweetId !== 'undefined'"
          class="link"
          :to="{
            name: 'replyList',
            params: { id: initialReplied.TweetId },
          }"
        >
          {{ initialReplied.comment }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
export default {
  props: {
    initialReplied: {
      type: Object,
      required: true,
    },
  },
  mixins: [fromNowFilter],
  data() {
    return {
      tweet: this.initialReplied,
    };
  },
};
</script>

<style lang="sass" scoped>
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
    .link
      color: #1C1C1C
      text-decoration: none
  .replyLike
    display: flex
    padding-right: 50px
    font-size: 13px
    line-height: 13px
    color: #657786
    .replyIcon
    > label
      margin-right: 50px
  img
    width: 15px
    height: 15px
    margin-right: 10px

.replyTo
  padding: 5px 0
  font-size: 13px
  line-height: 13px
  color: #657786
  .user
    color: #ff6600
    text-decoration: none

p
  margin: 0px
</style>

