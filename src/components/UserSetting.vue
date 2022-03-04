<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="userSetting">
      <div class="title">
        <h3>帳戶設定</h3>
      </div>
      <div class="input">
        <div class="account">
          <label for="account" class="inp">
            <span class="label">帳號</span>
            <input
              id="account"
              name="account"
              type="text"
              placeholder=""
              v-model="user.account"
            />
          </label>
        </div>
        <div class="name">
          <label for="name" class="inp">
            <span class="label">名稱</span>
            <input
              id="name"
              name="name"
              type="text"
              placeholder=""
              v-model="user.name"
            />
          </label>
        </div>
        <div class="email">
          <label for="email" class="inp">
            <span class="label">Email</span>
            <input
              id="email"
              name="email"
              type="email"
              placeholder=""
              v-model="user.email"
            />
          </label>
        </div>
        <div class="password">
          <label for="password" class="inp">
            <span class="label">密碼</span>
            <input
              id="password"
              name="password"
              type="password"
              placeholder=""
              v-model="password"
            />
          </label>
        </div>
        <div class="check">
          <label for="check-password" class="inp">
            <span class="label">密碼確認</span>
            <input
              id="check-password"
              name="checkPassword"
              type="password"
              placeholder=""
              v-model="checkPassword"
            />
          </label>
        </div>
        <div class="button">
          <button :disabled="isProcessing" type="submit">儲存</button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";
export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
      isProcessing: false,
      password: "",
      checkPassword: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.isProcessing = true;
        if (!this.user.account) {
          Toast.fire({
            icon: "error",
            title: "請填寫帳號",
          });
          this.isProcessing = false;
          return;
        } else if (!this.user.name) {
          Toast.fire({
            icon: "error",
            title: "請填寫姓名",
          });
          this.isProcessing = false;
          return;
        } else if (!this.user.email) {
          Toast.fire({
            icon: "error",
            title: "請填寫信箱",
          });
          this.isProcessing = false;
          return;
        } else if (!this.password) {
          Toast.fire({
            icon: "error",
            title: "請填寫密碼",
          });
          this.isProcessing = false;
          return;
        } else if (!this.checkPassword) {
          Toast.fire({
            icon: "error",
            title: "請填寫第二次密碼",
          });
          this.isProcessing = false;
          return;
        } else if (this.user.account.length > 50) {
          Toast.fire({
            icon: "error",
            title: "名稱請勿超過50個字",
          });
          this.isProcessing = false;
          return;
        } else if (this.password !== this.checkPassword) {
          Toast.fire({
            icon: "error",
            title: "請輸入相同的密碼",
          });
          this.isProcessing = false;
          return;
        }

        const { data } = await authorizationAPI.editAccount({
          userId: this.user.id,
          account: this.user.account,
          name: this.user.name,
          email: this.user.email,
          password: this.password,
          checkPassword: this.checkPassword,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功更改帳戶設定",
        });
        this.isProcessing = false;
        this.$store.commit("setCurrentUser", this.user);
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
      }
    },
  },
};
</script>
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
    &:hover,
    &:focus
      box-shadow: inset 0 -2px 0 rgba(80, 181, 255, 1)
</style>