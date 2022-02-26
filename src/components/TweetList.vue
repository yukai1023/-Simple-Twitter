<template>
  <div class="tweet">
    <img class="face" src="../images/coverPhoto.png" alt="" />
    <div class="content">
      <div>
        <label class="name">{{ initialTweet.name }}</label>
        <label class="account">@{{ initialTweet.account }}</label>
        <span>・</span>
        <label class="time"> {{ initialTweet.createdAt | fromNow }}</label>
      </div>
      <div>
        <p>{{ initialTweet.content }}</p>
      </div>
    </div>
    <img class="cross" src="../images/crossGray@2x.png" alt="" />
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    initialTweet: {
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

p
  margin: 0
  color: #1C1C1C
</style>