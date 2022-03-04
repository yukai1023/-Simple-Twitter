<template>
  <form @submit.stop.prevent="handleSubmit(content)">
    <div class="SendTweet">
      <h3>首頁</h3>
      <div class="photo">
        <div class="img">
          <img class="face" :src="user.avatar" alt="" />
        </div>
        <textarea
          name="description"
          id="data"
          class="form-control input"
          style="width: 520px; height: 60px"
          rows="7"
          cols="20"
          v-model="content"
          placeholder="有什麼新鮮事？"
          required
          autofocus
        ></textarea>
        <span class="warning" v-if="content.length > 140"
          >字數不可超過 140 字</span
        >
        <button :disabled="isProcessing" type="submit">推文</button>
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
      user: [],
      avatar: "https://i.imgur.com/zYddUs8.png",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  mounted() {
    this.fetchUser();
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
        Toast.fire({
          icon: "success",
          title: "成功發送推文！",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "請稍後再試",
        });
      }
    },
    async fetchUser() {
      try {
        const response = await userAPI.getUser({ userId: this.currentUser.id });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.user = response.data.data.user;
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>
<style lang="sass" scoped>
.SendTweet
  width: 600px
  border-left: 1px solid #e6ecf0
  border-right: 1px solid #e6ecf0

h3
  font-size: 18px
  padding: 15px 0 14px 15px
  border-bottom: 1px solid #e6ecf0
  font-weight: bold
  line-height: 26px

.photo
  border-bottom: 10px solid #e6ecf0
  padding: 10px 0 60px 15px
  display: flex
  position: relative
  .img
    width: 50px
    height: 50px
.form-control
  padding-top: 0.5rem
  border: none
  font-size: 18px
  line-height: 26px
  color: #9197a3

.warning
  position: absolute
  right: 100px
  bottom: 20px
  font-size: 15px
  line-height: 15px
  color: #FC5A5A

button
  position: absolute
  bottom: 10px
  right: 15px
  width: 66px
  height: 38px
  color: #fff
  background: #ff6600
  border-radius: 100px

.face
  display: block
  object-fit: cover
  border-radius: 100px

textarea
  resize: none
</style>