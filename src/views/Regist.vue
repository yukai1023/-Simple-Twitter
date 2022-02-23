<template>
  <div class="container py-5">
    <form class="w-100" @submit.stop.prevent="handleSubmit">
      <div class="logo"></div>
      <div class="text-center mb-4">
        <h3 class="h3 mb-3 font-weight-normal">建立你的帳號</h3>
      </div>

      <div class="form-label-group mb-2">
        <label class="account-font" for="name">帳號</label>
        <input
          id="account"
          v-model="name"
          name="account"
          type="text"
          class="form-control"
          autocomplete="account"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label class="account-font" for="name">名稱</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label class="account-font" for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          autocomplete="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label class="account-font" for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label class="account-font" for="password-check">密碼確認</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          autocomplete="new-password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        註冊
      </button>

      <div class="router">
        <p>
          <router-link class="router-font" to="/login"> 取消 </router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  margin-top: 65px;
}
.logo {
  margin: auto;
  background: var(--logo);
  background-size: cover;
  width: 40px;
  height: 40px;
}
.h3 {
  margin: 25px 0 40px 0;
  color: var(--font-color);
  font-weight: bold;
  font-size: 23px;
  line-height: 33px;
}
.form-label-group {
  display: flex;
  flex-direction: column;
  margin: auto;
  background: var(--account-bg);
  width: 540px;
  height: 52px;
  margin-bottom: 30px;
  text-align: left;
  box-shadow: inset 0 -2px 0 rgba(101, 119, 134, 1);
}
.account-font {
  color: var(--account-font);
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  padding: 5px 0px 0 10px;
  margin-bottom: 10px;
}
.btn {
  display: flex;
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 540px;
  height: 46px;
  color: var(--white);
  background: #ff6600;
  border-radius: 50px;
}
input {
  background-color: transparent;
  border-style: none;
  padding-left: 10px;
}
.router{
  margin-top: 20px ;
  text-align: center;
}
.router-font {
  color: var(--router-font);
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
}
</style>