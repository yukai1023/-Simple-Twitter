<template>
  <div class="list-container">
    <div class="title">
      <span>推文清單</span>
    </div>
    <div class="list">
      <div class="tweet">
        <img class="face" src="../images/coverPhoto.png" alt="" />
        <div class="content">
          <div>
            <label class="name">Apple</label>
            <label class="account">@apple</label>
            <span>・</span>
            <label class="time">3 小時</label>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing ...</p>
          </div>
        </div>
        <img class="cross" src="../images/crossGray@2x.png" alt="" />
      </div>
    </div>
  </div>
</template>

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
  height: 100%
  border-left: 2px solid #E6ECF0
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