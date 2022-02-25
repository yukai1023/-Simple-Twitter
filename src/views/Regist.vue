<template>
  <div class="container">
    <form>
      <img class="logo" src="../images/logo@2x.png" />
      <div class="text-center">
        <h3 class="title">建立你的帳號</h3>
      </div>

      <div class="form-label-group">
        <label class="account-font" for="name">帳號</label>
        <input
          id="account"
          name="account"
          type="text"
          class="form-control"
          autocomplete="account"
          required
          autofocus
        />
      </div>

      <div class="form-label-group">
        <label class="account-font" for="name">名稱</label>
        <input
          id="name"
          name="name"
          type="text"
          class="form-control"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group">
        <label class="account-font" for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          class="form-control"
          autocomplete="email"
          required
        />
      </div>

      <div class="form-label-group">
        <label class="account-font" for="password">密碼</label>
        <input
          id="password"
          name="password"
          type="password"
          class="form-control"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group">
        <label class="account-font" for="password-check">密碼確認</label>
        <input
          id="password-check"
          name="passwordCheck"
          type="password"
          class="form-control"
          autocomplete="new-password"
          required
        />
      </div>

      <button class="btn" type="submit">註冊</button>

      <div class="router">
        <router-link class="router-font" to="/login"> 取消 </router-link>
      </div>
    </form>
  </div>
</template>

<style lang="sass" scoped>
.container
  margin-top: 65px

.logo
  margin: auto
  background-size: cover
  width: 40px
  height: 40px

.title
  margin: 25px 0 40px 0
  color: #1c1c1c
  font-weight: bold
  font-size: 23px
  line-height: 33px

.form-label-group
  display: flex
  flex-direction: column
  margin: 30px auto 0px
  background: #f5f8fa
  width: 540px
  height: 52px
  text-align: left
  box-shadow: inset 0 -2px 0 rgba(101, 119, 134, 1)
  .account-font
    color: #657786
    font-weight: 500
    font-size: 15px
    line-height: 15px
    padding: 5px 0px 0 10px
    margin-bottom: 10px

.btn
  display: flex
  font-size: 18px
  line-height: 26px
  font-weight: bold
  justify-content: center
  align-items: center
  margin: 40px auto 0
  width: 540px
  height: 46px
  color: #ffffff
  background: #ff6600
  border-radius: 50px

input
  background-color: transparent
  border-style: none
  padding-left: 10px
  height: 20px

.router
  margin-top: 20px
  text-align: center
  &-font
    color: #0099ff
    font-weight: bold
    font-size: 18px
    line-height: 26px
</style>