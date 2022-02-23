<template>
  <div>
    <div class="SendTweet">
      <h3>首頁</h3>
      <div class="photo">
        <img class="face" src="../images/logo@2x.png" alt="" />
        <label class="WhatNews">有什麼新鮮事？</label>
        <button
          class="btn"
          data-bs-toggle="modal"
          data-bs-target="#tweet-modal"
        >
          推文
        </button>
        <button
          class=""
          data-bs-toggle="modal"
          data-bs-target="#reply-modal"
        >
          回覆
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.SendTweet {
  width: 600px;
  height: 100vh;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}
h3 {
  font-size: 18px;
  padding: 15px 0 14px 15px;
  border-bottom: 1px solid #e6ecf0;
}
.photo {
  border-bottom: 10px solid #e6ecf0;
  padding: 10px 0 60px 15px;
  display: flex;
  position: relative;
}
.WhatNews {
  padding: 10px 0 0 10px;
}
.btn {
  position: absolute;
  bottom: 10px;
  right: 15px;
  width: 66px;
  height: 38px;
  color: #fff;
  background: #ff6600;
  border-radius: 100px;
}
.face {
  width: 50px;
  height: 50px;
  display: block;
  object-fit: cover;
  border-radius: 100px;
}
</style>