<template>
  <div class="user">
    <img class="background" src="../images/background@2x.png" />
    <img class="face" src="../images/coverPhoto.png" alt="" />
    <div class="content">
      <p class="name">{{ initialUser.name }}</p>
      <p class="account">@{{ initialUser.account }}</p>
      <div class="icon">
        <img class="reply" src="../images/icon_reply.png" alt="" />
        <span>{{ initialUser.tweet }}</span>
        <img class="like" src="../images/icon_like.png" alt="" />
        <span>{{ initialUser.like }}</span>
      </div>
      <div class="follow">
        <span class="number">{{ initialUser.following }} 個</span>
        <span class="following">跟隨中</span>
        <span class="number">{{ initialUser.follower }} 位</span>
        <span class="follower">跟隨者</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="sass" scoped>
.list-container
  width: 100%

.title
  display: flex
  height: 55px
  padding-left: 26.5px
  align-items: center
  border-left: 2px solid #E6ECF0
  border-bottom: 2px solid #E6ECF0
  span
    font-size: 18px
    line-height: 26px
    color: #1C1C1C
    font-weight: bold

.list
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: 330px
  width: 100%
  height: 100%
  padding: 15px 0px 0px 15px
  border-left: 2px solid #E6ECF0
  .user
    position: relative
    width: 245px
    height: 314px
    border-radius: 10px
    .background
      width: 245px
      height: 140px
      border-radius: 10px 10px 0 0
    .face
      position: absolute
      left: 72.5px
      top: 68px
      width: 100px
      height: 100px
      object-fit: cover
      border-radius: 100px
      border: 4px solid #FFFFFF
    .content
      width: 100%
      height: 174px
      text-align: center
      background: #F6F7F8
      border-radius: 0 0 10px 10px
      .name
        padding-top: 33px
        font-weight: 900
        font-size: 15px
        line-height: 22px
      .account
        color: #657786
      .icon
        display: flex
        padding-top: 16px
        font-size: 15px
        line-height: 15px
        align-items: center
        justify-content: center
        .reply
          width: 24px
          height: 24px
          margin-right: 7.15px
          + span
            margin-right: 16.95px
        .like
          width: 24px
          height: 24px
          margin-right: 6.95px
      .follow
        padding-top: 15px
        font-size: 14px
        line-height: 20px
        .number
          color: #000000
          font-weight: bold
        .following
          color: #657786
          margin-right: 5px
        .follower
          color: #657786
p
  margin: 0
</style>