<template>
  <form @submit.stop.prevent="handleSubmit(content)">
    <div
      class="modal fade"
      id="tweet-modal"
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
              id="tweetClose"
              src="../images/cross@2x.png"
              data-bs-dismiss="modal"
              type="button"
            />
          </div>
          <div class="modal-body" id="movie-modal-body">
            <div class="img">
              <img class="face" :src="avatar" alt="" />
            </div>
            <textarea
              name="description"
              id="data"
              class="form-control input"
              style="width: 700px; height: 160px"
              rows="7"
              v-model="content"
              cols="20"
              placeholder="有什麼新鮮事？"
              required
              autofocus
            ></textarea>
          </div>
          <div class="modal-footer">
            <span v-if="content.length > 140">字數不可超過 140 字</span>
            <button :disabled="isProcessing" type="submit" class="btn-primary">
              推文
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import userAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      content: "",
      avatar: "https://i.imgur.com/zYddUs8.png",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.avatar = this.currentUser.avatar;
  },
  methods: {
    async handleSubmit(content) {
      try {
        this.isProcessing = true;
        if (this.content.trim() === "") {
          Toast.fire({
            icon: "error",
            title: "請輸入內容",
          });
          return;
        } else if (this.content.length > 140) {
          Toast.fire({
            icon: "error",
            title: "字數不可超過 140 字",
          });
          return;
        }
        const { data } = await userAPI.sendTweet({
          description: content,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$store.commit("createTweet", data);
        this.content = "";
        this.isProcessing = false;
        Toast.fire({
          icon: "success",
          title: "成功發送推文！",
        });
        document.getElementById("tweetClose").click();
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "請稍後再試",
        });
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
  height: 38px
  font-size: 18px
  line-height: 18px

.img
  width: 50px
  height: 50px
.face
  width: 50px
  height: 50px
  display: block
  object-fit: cover
  border-radius: 100px

.cross
  width: 15px
  height: 15px

.modal-header
  padding: 19.5px

.modal-content
  width: 600px
  height: 300px
  border-radius: 14px

.modal-body
  display: flex
  padding: 15px 15px 0 15px

.form-control
  padding-top: 0.5rem
  border: none
  font-size: 18px
  line-height: 26px
  color: #9197a3

.modal-footer
  border-top: 0px
  padding: 0 15px 15px 15px
  span
    font-size: 15px
    line-height: 15px
    color: #FC5A5A

textarea
  resize: none
</style>