<template>
  <div
    class="modal fade"
    id="edit-modal"
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
          <span>編輯個人資料</span>
          <button type="button" class="btn-primary">儲存</button>
        </div>
        <div class="modal-photo">
          <img class="background" src="../images/background@2x.png" />
          <img class="face" src="../images/coverPhoto.png" alt="" />
          <img class="camera-background" src="../images/camera@2x.png" alt="" />
          <img class="camera-face" src="../images/camera@2x.png" alt="" />
          <img class="cross" src="../images/crossWhite@2x.png" alt="" />
        </div>
        <div class="modal-body" id="movie-modal-body">
          <div class="form-name">
            <label class="account-font" for="name">名稱</label>
            <input
              id="name"
              name="name"
              type="text"
              class="form-input"
              autocomplete="username"
              required
              autofocus
            />
          </div>
          <p>8/50</p>
          <div class="form-introduce">
            <label class="account-font" for="introduce">自我介紹</label>
            <textarea
              id="introduce"
              class="form-input"
              style="width: 570px; height: 110px"
              rows="7"
              cols="20"
              required
              autofocus
            ></textarea>
          </div>
          <p>0/160</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.btn-primary
  background: #ff6600
  border-radius: 100px
  width: 66px
  height: 28px
  font-size: 18px
  line-height: 18px

.modal-header
  padding: 15px
  .cross
    width: 15px
    height: 15px
  span
    padding-right: 50%
    font-weight: bold
    font-size: 19px
    line-height: 28px

.modal-photo
  position: relative
  .background
    width: 598px
    height: 200px
  .face
    position: absolute
    left: 15px
    top: 140px
    width: 120px
    height: 120px
    object-fit: cover
    border-radius: 100px
    border: 4px solid #FFFFFF
  .camera-background
    position: absolute
    width: 20px
    height: 20px
    left: 262px
    top: 90px
  .camera-face
    position: absolute
    width: 20px
    height: 20px
    left: 64px
    top: 190px
  .cross
    position: absolute
    width: 15px
    height: 15px
    left: 318.5px
    top: 92.5px

.modal-content
  width: 600px
  height: 657px
  border-radius: 14px

.modal-body
  padding: 0px 15px 0 15px
  .form-input
    padding: 0rem 0.75rem 0.375rem
    border: none
    font-size: 19px
    line-height: 28px
    color: #1C1C1C
    resize: none
    height: 20px
    background-color: transparent
  p
    text-align: right
    font-size: 15px
    line-height: 22px
    color: #657786
  .form-name
    display: flex
    flex-direction: column
    margin: 80px auto 0px
    background: #f5f8fa
    width: 570px
    height: 54px
    text-align: left
    box-shadow: inset 0 -2px 0 rgba(101, 119, 134, 1)
  .form-introduce
    display: flex
    flex-direction: column
    margin: 20px auto 0px
    background: #f5f8fa
    width: 570px
    height: 150px
    text-align: left
    box-shadow: inset 0 -2px 0 rgba(101, 119, 134, 1)

.account-font
  color: #657786
  font-size: 15px
  line-height: 15px
  padding: 5px 0px 0 10px
  margin-bottom: 10px
</style>