<template>
  <div>
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
          <img src="https://i.imgur.com/zYddUs8.png" alt="" />
        </div>
        <div class="UserAccount">
          <label class="name">123</label>
          <p class="account">@123</p>
        </div>
      </div>
      <div class="TweetsContent">
        <div class="article">
          <p>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </p>
        </div>
        <div class="time">
          <p>2018-12-23</p>
        </div>
      </div>
      <div class="replyLike">
        <span>34 </span>
        <span class="gray">回覆</span>
        <span>808 </span>
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
          :disabled="isProcessing"
          class="likeIcon click"
          src="../images/icon_like.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
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
};
</script>

<style lang="sass" scoped>
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
  padding: 13px 10px 13px 15px
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
  .UserAccount
    margin-left: 10px
    font-size: 15px
    line-height: 22px
    color: #657786
    .name
      margin-right: 5px
      color: black
      font-weight: bold

.TweetsContent
  padding-left: 10px
  .article
    font-size: 23px
    line-height: 34px
  .time
    font-size: 15px
    line-height: 22px
    color: #657786
    p
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

</style>
