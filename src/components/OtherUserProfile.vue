<template>
  <div>
    <div class="header">
      <label class="return" for="return-btn">
        <img src="../images/arrow.png" alt="" />
        <button type="button" @click="$router.back()" id="return-btn"></button>
      </label>
      <div class="account">
        <label class="name">{{ initialUser.name }}</label>
        <label class="tweets">{{ initialUser.tweetCount }}推文</label>
      </div>
    </div>

    <div class="profile">
      <div class="photo">
        <div class="modal-photo">
          <img class="background" :src="initialUser.cover" />
          <img class="face" :src="initialUser.avatar" alt="" />
        </div>
      </div>
      <div class="editBtn">
        <img src="../images/message.png" alt="" />
        <img src="../images/noti.png" alt="" />
        <button
          v-if="initialUser.isFollowing"
          class="followingBtn"
          @click.stop.prevent="unFollow(initialUser.id)"
          :disabled="isProcessing"
        >
          正在跟隨
        </button>
        <button
          v-else
          @click.stop.prevent="addFollow(initialUser.id)"
          :disabled="isProcessing"
        >
          跟隨
        </button>
      </div>
      <div class="content">
        <p class="name">{{ initialUser.name }}</p>
        <p class="account">@{{ initialUser.account }}</p>
        <p class="introduce">
          {{ initialUser.introduction }}
        </p>
        <div class="follow">
          <router-link
            v-if="typeof initialUser.id !== 'undefined'"
            class="number"
            :to="{ name: 'followingList', params: { id: initialUser.id } }"
            >{{ initialUser.following }} 個</router-link
          >
          <span class="following">跟隨中</span>
          <router-link
            v-if="typeof initialUser.id !== 'undefined'"
            class="number"
            :to="{ name: 'followerList', params: { id: initialUser.id } }"
            >{{ initialUser.followers }} 位</router-link
          >
          <span class="follower">跟隨者</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "./../apis/users";
export default {
  props: {
    initialUser: {
      type: [Array, Object],
      required: true,
    },
  },
  data() {
    return {
      isProcessing: false,
      user: [],
    };
  },
  methods: {
    async addFollow(userId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.addFollow({ id: userId });
        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.initialUser = {
          ...this.initialUser,
          isFollowing: true,
        };
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
      }
    },
    async unFollow(userId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.unFollow({ userId });
        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.initialUser = {
          ...this.initialUser,
          isFollowing: false,
        };
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
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
  width: 598px
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
    display: flex
    justify-content: end
    padding: 15px 15px 0 0
    button
      width: 90px
      height: 35px
      border: 1px solid #FF6600
      border-radius: 100px
      color: #FF6600
      font-weight: bold
      font-size: 15px
      line-height: 15px
    .followingBtn
      background: #FF6600
      border-radius: 100px
      font-weight: bold
      font-size: 15px
      line-height: 15px
      color: #FFFFFF
    img
      width: 35px
      height: 35px
      margin: 0 15px 0 0
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
      width: 592px
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