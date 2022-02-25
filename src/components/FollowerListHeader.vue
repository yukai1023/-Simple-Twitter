<template>
  <div lass="Follower">
    <div class="header">
      <img src="../images/arrow.png" alt="" />
      <div class="account">
        <label class="name">Karina</label>
        <label class="tweets">25推文</label>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.Follower
    width: 600px
    height: 100vh

.header
  width: 600px
  height: 55px
  display: flex
  align-items: center
  border-left: 1px solid #e6ecf0
  border-right: 1px solid #e6ecf0
  img
    width: 17px
    height: 14px
    margin: 0px 0 0px 19px
  .account
    display: flex
    flex-direction: column
    margin: 0 0 0 43px
    .name
      font-size: 19px
      font-weight: 900
    .tweets
      color: #657786
      font-size: 13px
      line-height: 19px
</style>