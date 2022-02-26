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
          <img class="background" :src="background" />
          <img class="cross" src="../images/crossWhite@2x.png" alt="" />
          <label class="background-file" for="background-file">
            <img
              class="camera-background"
              src="../images/camera@2x.png"
              alt=""
            />
            <input
              @change="backgroundChange"
              type="file"
              id="background-file"
            />
          </label>
          <label class="face-file" for="face-file">
            <img class="face" :src="image" alt="" />
            <img class="camera-face" src="../images/camera@2x.png" alt="" />
            <input @change="imageChange" type="file" id="face-file" />
          </label>
        </div>
        <div class="modal-body" id="movie-modal-body">
          <div class="form-name">
            <label class="account-font" for="name">名稱</label>
            <input
              id="name"
              name="name"
              type="text"
              maxlength="50"
              v-model="name"
              class="form-input"
              autocomplete="username"
              required
              autofocus
            />
          </div>
          <p>{{ name.length }}/50</p>
          <div class="form-introduce">
            <label class="account-font" for="introduce">自我介紹</label>
            <textarea
              id="introduce"
              class="form-input"
              v-model="introduce"
              maxlength="160"
              style="width: 570px; height: 110px"
              rows="7"
              cols="20"
              required
              autofocus
            ></textarea>
          </div>
          <p>{{ introduce.length }}/160</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      introduce: "",
      image: "",
      background: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.$router.push("/main");
    },
    imageChange(e) {
      const { files } = e.target;

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.image = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.image = imageURL;
      }
    },
    backgroundChange(e) {
      const { files } = e.target;

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.image = "";
      } else {
        // 否則產生預覽圖
        const backgroundURL = window.URL.createObjectURL(files[0]);
        this.background = backgroundURL;
      }
    },
  },
};
</script>

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
  height: 200px
  .background
    width: 598px
    height: 200px
  .cross
    position: absolute
    width: 15px
    height: 15px
    left: 318.5px
    top: 92.5px
  input
    display: none
  .background-file
    cursor: pointer
    .camera-background
      position: absolute
      width: 20px
      height: 20px
      left: 262px
      top: 90px
  .face-file
    cursor: pointer
    .face
      position: absolute
      left: 15px
      top: 140px
      width: 120px
      height: 120px
      object-fit: cover
      border-radius: 100px
      border: 4px solid #FFFFFF
      z-index: 2
    .camera-face
      position: absolute
      width: 20px
      height: 20px
      left: 64px
      top: 190px
      z-index: 3

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