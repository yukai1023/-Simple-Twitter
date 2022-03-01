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
      <div class="replyTo">
        <span>回覆給 </span>
        <span class="user">@apple</span>
      </div>
      <div class="article">
        <p>
          {{ tweet.comment }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    initialReplied: {
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
  font-size: 13px
  line-height: 13px
  color: #657786
  .user
    color: #ff6600

p
  margin: 0px
</style>

