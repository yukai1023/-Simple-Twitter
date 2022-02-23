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
          data-bs-target="#movie-modal"
        >
          推文
        </button>
      </div>
    </div>
    <div
      class="modal fade"
      id="movie-modal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <img
              aria-label="Close"
              class="cross"
              src="../images/cross@2x.png"
              data-bs-dismiss="modal"
              type="button"
            />
          </div>
          <div class="modal-body" id="movie-modal-body">
            <img class="face" src="../images/logo@2x.png" alt="" />
            <input
              id="e"
              name="email"
              type="email"
              class="form-control"
              autocomplete="username"
              placeholder="有什麼新鮮事？"
              required
              autofocus
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-primary">推文</button>
          </div>
        </div>
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
.btn-primary {
  background: #ff6600;
  border-radius: 100px;
  width: 66px;
  height: 38px;
}
.face {
  width: 50px;
  height: 50px;
  display: block;
  object-fit: cover;
  border-radius: 100px;
}
.cross {
  width: 19.5px;
  height: 19.5px;
}
.modal-header {
  padding: 19.5px;
}
.modal-content {
  width: 600px;
  height: 300px;
  border-radius: 14px;
}
.modal-body {
  display: flex;
  padding: 15px;
}
.form-control {
  padding-top: 0;
  padding-bottom: 5rem;
  border: none;
  font-size: 18px;
  line-height: 26px;
  color: #9197a3;
}
.modal-footer {
  border-top: 0px;
  padding: 15px;
}
</style>