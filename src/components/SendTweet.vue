<template>
  <div>
    <div class="SendTweet">
      <h3>首頁</h3>
      <div class="photo">
        <img class="face" src="../images/coverPhoto.png" alt="" />
        <textarea
          id="data"
          class="form-control input"
          style="width: 520px; height: 60px"
          rows="7"
          cols="20"
          placeholder="有什麼新鮮事？"
          required
          autofocus
        ></textarea>
        <button class="btn">推文</button>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.SendTweet
  width: 600px
  border-left: 1px solid #e6ecf0
  border-right: 1px solid #e6ecf0

h3
  font-size: 18px
  padding: 15px 0 14px 15px
  border-bottom: 1px solid #e6ecf0
  font-weight: bold
  line-height: 26px

.photo
  border-bottom: 10px solid #e6ecf0
  padding: 10px 0 60px 15px
  display: flex
  position: relative

.form-control
  padding-top: 0.5rem
  border: none
  font-size: 18px
  line-height: 26px
  color: #9197a3

.btn
  position: absolute
  bottom: 10px
  right: 15px
  width: 66px
  height: 38px
  color: #fff
  background: #ff6600
  border-radius: 100px

.face
  width: 50px
  height: 50px
  display: block
  object-fit: cover
  border-radius: 100px

textarea
  resize: none
</style>