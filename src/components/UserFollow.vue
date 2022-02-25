<template>
  <div class="UserFollow">
    <div class="follower">
      <div class="UserPhoto">
        <img src="../images/coverPhoto.png" alt="" />
      </div>
      <div class="TweetsContent">
        <div class="TweetsContent-top">
          <div class="UserAccount">
            <label class="name">Apple</label>
            <label class="account">@apple</label>
          </div>
          <div class="btn">
            <button>正在跟隨</button>
          </div>
        </div>
        <div class="article">
          <p>
            Tôi tên là Apple. Tôi là người Đài Loan Tôi tên là Apple. Tôi là
            người Đài Loan.
          </p>
        </div>
      </div>
    </div>

    <div class="follower">
      <div class="UserPhoto">
        <img src="../images/coverPhoto.png" alt="" />
      </div>
      <div class="TweetsContent">
        <div class="TweetsContent-top">
          <div class="UserAccount">
            <label class="name">Apple</label>
            <label class="account">@apple</label>
          </div>
          <div class="btn">
            <button>正在跟隨</button>
          </div>
        </div>
        <div class="article">
          <p>
            Tôi tên là Apple. Tôi là người Đài Loan Tôi tên là Apple. Tôi là
            người Đài Loan.
          </p>
        </div>
      </div>
    </div>

    <div class="follower">
      <div class="UserPhoto">
        <img src="../images/coverPhoto.png" alt="" />
      </div>
      <div class="TweetsContent">
        <div class="TweetsContent-top">
          <div class="UserAccount">
            <label class="name">Apple</label>
            <label class="account">@apple</label>
          </div>
          <div class="btn">
            <button>正在跟隨</button>
          </div>
        </div>
        <div class="article">
          <p>Tôi tên là Apple. Tôi là người Đài Loan.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.UserFollow
  border-left: 1px solid #E6ECF0
  border-right: 1px solid #E6ECF0
.follower
  width: 600px
  display: flex
  padding: 13px 10px 10px 15px
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
  width: 600px
  padding-left: 10px
  &-top
    display: flex
    justify-content: space-between
    .UserAccount
      label
        font-size: 15px
      .name
        font-weight: bold
      .account
        margin-bottom: 5px
        color: #657786
    .UserAccount
      display: flex
      flex-direction: column

button
  width: 90px
  height: 25px
  border: 1px solid #FF6600
  background: #FF6600
  border-radius: 100px
  color: #fff
  font-weight: bold
  font-size: 15px

p
  margin-bottom: 10px
</style>