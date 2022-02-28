<template>
  <div>
    <div class="header">
      <label class="return" for="return-btn">
        <img src="../images/arrow.png" alt="" />
        <button type="button" @click="$router.back()" id="return-btn"></button>
      </label>
      <div class="account">
        <label class="name">Karina</label>
        <label class="tweets">25推文</label>
      </div>
    </div>

    <div class="profile">
      <div class="photo">
        <div class="modal-photo">
          <img class="background" :src="user.cover" />
          <img class="face" :src="user.avatar" alt="" />
        </div>
      </div>
      <div class="editBtn">
        <button data-bs-toggle="modal" data-bs-target="#edit-modal">
          編輯個人資料
        </button>
      </div>
      <div class="content">
        <p class="name">{{ user.name }}</p>
        <p class="account">@{{ user.account }}</p>
        <p class="introduce">
          {{ user.introduction }}
        </p>
        <div class="follow">
          <router-link
            class="number"
            :to="{ name: 'followingList', params: { id: user.id } }"
            >{{ user.following }} 個</router-link
          >
          <span class="following">跟隨中</span>
          <span class="number">{{ user.followers }} 位</span>
          <span class="follower">跟隨者</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import userAPI from "./../apis/users";
export default {
  data() {
    return {
      user: [],
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  watch: {
    user() {
      this.fetchUsers();
    },
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
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>
<style lang="sass" scoped>
.header
  width: 600px
  height: 55px
  display: flex
  align-items: center
  border-left: 1px solid #e6ecf0
  border-right: 1px solid #e6ecf0
  .return
    cursor: pointer
    img
      width: 17px
      height: 14px
      margin: 0px 0 0px 19px
    button
      display: none
  .account
    display: flex
    flex-direction: column
    margin: 0 0 0 43px
    .name
      font-size: 19px
      font-weight: 900
    .tweets
      color: #657786
      font-size: 13px
      line-height: 19px

.profile
  border-left: 1px solid #e6ecf0
  border-right: 1px solid #e6ecf0
  .photo
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
  .editBtn
    text-align: right
    padding: 15px 15px 0 0
    button
      width: 120px
      height: 35px
      border: 1px solid #FF6600
      border-radius: 100px
      color: #FF6600
      font-weight: bold
      font-size: 15px
      line-height: 15px
  .content
    padding-left: 15px
    p
      margin: 0
    .name
      padding-top: 15px
      font-weight: 900
      font-size: 19px
      line-height: 28px
    .account
      color: #657786
      font-size: 15px
      line-height: 22px
    .introduce
      padding-top: 10px
      font-size: 14px
      line-height: 20px
      width: 600px
    .follow
      padding-top: 10px
      font-size: 14px
      line-height: 20px
      .number
        color: #000000
        font-weight: bold
        text-decoration: none
      .following
        color: #657786
        margin-right: 20px
      .follower
        color: #657786
</style>