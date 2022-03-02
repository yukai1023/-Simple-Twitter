<template>
  <form @submit.stop.prevent="handleSubmit">
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
              id="close"
              class="cross"
              src="../images/cross@2x.png"
              data-bs-dismiss="modal"
              type="button"
            />
            <span>編輯個人資料</span>
            <button type="submit" :disabled="isProcessing" class="btn-primary">
              儲存
            </button>
          </div>
          <div class="modal-photo">
            <img class="background" :src="user.cover" />
            <img class="cross" src="../images/crossWhite@2x.png" alt="" />
            <label class="background-file" for="cover">
              <img
                class="camera-background"
                src="../images/camera@2x.png"
                alt=""
              />
              <input
                @change="backgroundChange"
                type="file"
                name="cover"
                id="cover"
              />
            </label>
            <label class="face-file" for="avatar">
              <img class="face" :src="user.avatar" alt="" />
              <img class="camera-face" src="../images/camera@2x.png" alt="" />
              <input
                @change="imageChange"
                type="file"
                name="avatar"
                id="avatar"
              />
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
                v-model="user.name"
                class="form-input"
                autocomplete="username"
                required
                autofocus
              />
            </div>
            <p>{{ getUser ? user.name.length : "0" }}/50</p>
            <div class="form-introduce">
              <label class="account-font" for="introduction">自我介紹</label>
              <textarea
                id="introduction"
                name="introduction"
                class="form-input"
                v-model="user.introduction"
                maxlength="160"
                style="width: 570px; height: 110px"
                rows="7"
                cols="20"
                required
                autofocus
              ></textarea>
            </div>
            <p>{{ getUser ? user.introduction.length : "0" }}/160</p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import userAPI from "./../apis/users";
export default {
  data() {
    return {
      user: [],
      isProcessing: false,
      getUser: false,
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await userAPI.getUser({ userId: this.currentUser.id });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.user = response.data.data.user;
        this.getUser = true;
      } catch (error) {
        console.log("error");
      }
    },
    imageChange(e) {
      const { files } = e.target;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.user.avatar = imageURL;
    },
    backgroundChange(e) {
      const { files } = e.target;
      const backgroundURL = window.URL.createObjectURL(files[0]);
      this.user.cover = backgroundURL;
    },
    async handleSubmit(e) {
      try {
        this.isProcessing = true;
        const form = e.target; // <form></form>
        const formData = new FormData(form);
        const { data } = await userAPI.getEditModal({
          userId: this.user.id,
          formData: formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        document.getElementById("close").click();
      } catch (error) {
        this.isProcessing = false;
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