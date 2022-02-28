<template>
  <div class="following">
    <div class="UserPhoto">
      <img :src="following.avatar" alt="" />
    </div>
    <div class="TweetsContent">
      <div class="TweetsContent-top">
        <div class="UserAccount">
          <label class="name">{{ following.name }}</label>
          <label class="account">@{{ following.account }}</label>
        </div>
        <div class="btn">
          <button
            v-if="following.isFollowed"
            class="followingBtn"
            @click.stop.prevent="unFollow(following.id)"
            :disabled="isProcessing"
          >
            正在跟隨
          </button>
          <button
            v-else
            @click.stop.prevent="addFollow(following.id)"
            :disabled="isProcessing"
          >
            跟隨
          </button>
        </div>
      </div>
      <div class="article">
        <p>
          {{ following.introduction }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "./../apis/users";
export default {
  props: {
    initialFollowing: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      following: this.initialFollowing,
      isProcessing: false,
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
        this.following = {
          ...this.following,
          isFollowed: true,
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
        this.following = {
          ...this.following,
          isFollowed: false,
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
.following
  width: 600px
  display: flex
  padding: 13px 10px 10px 15px
  border-bottom: 1px solid #E6ECF0

.UserPhoto
  width: 50px
  height: 50px
  img
    width: 50px
    height: 50px
    display: block
    object-fit: cover
    border-radius: 100px

.TweetsContent
  width: 600px
  padding-left: 10px
  &-top
    display: flex
    justify-content: space-between
    .UserAccount
      label
        font-size: 15px
      .name
        font-weight: bold
      .account
        margin-bottom: 5px
        color: #657786
    .UserAccount
      display: flex
      flex-direction: column

button
  width: 62px
  height: 30px
  border: 1px solid #FF6600
  border-radius: 100px
  color: #FF6600
  font-weight: bold
  font-size: 15px
.followingBtn
  width: 90px
  height: 25px
  background: #FF6600
  border-radius: 100px
  font-weight: bold
  font-size: 15px
  line-height: 15px
  color: #FFFFFF
p
  margin-bottom: 10px
</style>