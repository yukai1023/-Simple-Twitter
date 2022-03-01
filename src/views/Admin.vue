<template>
  <div class="container">
    <form @submit.prevent.stop="handleSubmit">
      <img class="logo" src="../images/logo@2x.png" />
      <div class="text-center">
        <h3 class="title">後台登入</h3>
      </div>

      <div class="form-label-group">
        <label class="account-font" for="account">帳號</label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="text"
          class="form-control"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group">
        <label class="account-font" for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          autocomplete="current-password"
          required
        />
      </div>

      <button class="btn" type="submit">登入</button>
      <div class="router">
        <router-link class="router-font" to="/login"> 前台登入 </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await authorizationAPI.adminSignIn({
          account: this.account,
          password: this.password,
        });
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 將 token 存放在 localStorage 內
        this.$store.commit("setCurrentUser", data.data.user);
        localStorage.setItem("token", data.data.token);
        this.$router.push("/admin/main");
      } catch (error) {
        this.password = "";
        console.log("error");
      }
    },
  },
};
</script>

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
  width: 540px
  margin: 20px auto 0px auto
  text-align: right
  &-font
    color: #0099ff
    font-weight: bold
    font-size: 18px
    line-height: 26px
</style>