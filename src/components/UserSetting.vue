<template>
  <div class="userSetting">
    <div class="title">
      <h3>帳戶設定</h3>
    </div>
    <div class="input">
      <div class="account">
        <label for="inp" class="inp">
          <span class="label">帳號</span>
          <input type="text" id="inp" placeholder="" value="@wonderman" />
        </label>
      </div>
      <div class="name">
        <label for="inp" class="inp">
          <span class="label">名稱</span>
          <input type="text" id="inp" placeholder="" value="John Doe" />
        </label>
      </div>
      <div class="email">
        <label for="inp" class="inp">
          <span class="label">Email</span>
          <input
            type="text"
            id="inp"
            placeholder=""
            value="JohnDoe@gmail.com"
          />
        </label>
      </div>
      <div class="passwors">
        <label for="inp" class="inp">
          <span class="label">密碼</span>
          <input type="text" id="inp" placeholder="" />
        </label>
      </div>
      <div class="check">
        <label for="inp" class="inp">
          <span class="label">密碼確認</span>
          <input type="text" id="inp" placeholder="" />
        </label>
      </div>
      <div class="button">
        <button>儲存</button>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.userSetting
  width: 100%
  border-left: 1px solid #E6ECF0
.title
  h3
    font-weight: bold
    font-size: 19px
    line-height: 28px
    padding: 13px 20px
    border-bottom: 1px solid #E6ECF0

.input
  max-width: 642px
  padding: 30px 0 0 16px
  div
    padding-bottom: 30px

.button
  display: flex
  justify-content: flex-end
  padding-top: 20px
  button
    width: 116px
    height: 46px
    color: #fff
    border: 0
    outline: none
    background: #FF6600
    border-radius: 50px

.inp
  position: relative
  margin: auto
  width: 100%
  border-radius: 4px 4px 0px 0px
  overflow: hidden
  .label
    position: absolute
    top: 20px
    left: 12px
    font-size: 18px
    color: #657786
    font-weight: 500
    transform-origin: 0 0
    transform: translate3d(0,-12px,0) scale(.75)
    pointer-events: none
  input
    -webkit-appearance: none
    appearance: none
    width: 100%
    border: 0
    outline: none
    box-shadow: inset 0 -2px 0 rgba(#657786,1)
    padding: 24px 0 0 12px
    height: 56px
    font-size: 19px
    font-weight: 500
    background: #F5F8FA
    color: #1C1C1C
</style>