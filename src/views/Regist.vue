<template>
  <div class="container">
    <form @submit.stop.prevent="handleSubmit">
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
          v-model="account"
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
          v-model="name"
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
          v-model="email"
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
          v-model="password"
          class="form-control"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group">
        <label class="account-font" for="check-password">密碼確認</label>
        <input
          id="check-password"
          name="checkPassword"
          type="password"
          v-model="checkPassword"
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

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.account) {
          Toast.fire({
            icon: "error",
            title: "請填寫帳號",
          });
          return;
        } else if (!this.name) {
          Toast.fire({
            icon: "error",
            title: "請填寫姓名",
          });
          return;
        } else if (!this.email) {
          Toast.fire({
            icon: "error",
            title: "請填寫信箱",
          });
          return;
        } else if (!this.password) {
          Toast.fire({
            icon: "error",
            title: "請填寫密碼",
          });
          return;
        } else if (!this.checkPassword) {
          Toast.fire({
            icon: "error",
            title: "請填寫第二次密碼",
          });
          return;
        } else if (this.name.length > 50) {
          Toast.fire({
            icon: "error",
            title: "名稱請勿超過50個字",
          });
          return;
        } else if (this.password !== this.checkPassword) {
          Toast.fire({
            icon: "error",
            title: "請輸入相同的密碼",
          });
          return;
        }
        const { data } = await authorizationAPI.signUp({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "login" });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "請確認您輸入了正確的帳號密碼",
        });
        console.log(error);
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
  &:hover,
  &:focus
    box-shadow: inset 0 -2px 0 rgba(80, 181, 255, 1)
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