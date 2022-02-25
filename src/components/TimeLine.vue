<template>
  <div class="TimeLine">
    <div class="Usertweet">
      <div class="UserPhoto">
        <img src="../images/coverPhoto2.jpeg" alt="" />
      </div>
      <div class="TweetsContent">
        <div class="UserAccount">
          <label class="name">Jack</label>
          <label class="account">@JKBoy</label>
          <span>・</span>
          <label class="time">3 小時</label>
        </div>
        <div class="article">
          <p>
            Well, I will call you darlin' and everything will be okay,'Cause I
            know that I am yours and you are mine,Doesn't matter anyway,In the
            night, we'll take a walk, it's nothing funny,Just to talk
          </p>
        </div>
        <div class="replyLike">
          <img class="replyIcon" src="../images/icon_reply.png" alt="" />
          <label>13</label>
          <img class="likeIcon" src="../images/icon_like.png" alt="" />
          <label>76</label>
        </div>
      </div>
    </div>
    <div class="Usertweet">
      <div class="UserPhoto">
        <img src="../images/coverPhoto2.jpeg" alt="" />
      </div>
      <div class="TweetsContent">
        <div class="UserAccount">
          <label class="name">Jack</label>
          <label class="account">@JKBoy</label>
          <span>・</span>
          <label class="time">3 小時</label>
        </div>
        <div class="article">
          <p>
            Well, I will call you darlin' and everything will be okay,'Cause I
            know that I am yours and you are mine,Doesn't matter anyway,In the
            night, we'll take a walk, it's nothing funny,Just to talk
          </p>
        </div>
        <div class="replyLike">
          <img class="replyIcon" src="../images/icon_reply.png" alt="" />
          <label>13</label>
          <img class="likeIcon" src="../images/icon_like.png" alt="" />
          <label>76</label>
        </div>
      </div>
    </div>
  </div>
</template>

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
</style>

