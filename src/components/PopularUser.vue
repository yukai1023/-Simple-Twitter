<template>
  <div class="card">
    <div class="photo">
      <img :src="user.avatar" alt="" />
    </div>
    <div class="UserAccount">
      <label class="name">{{ user.name }}</label>
      <label class="account">@{{ user.account }}</label>
    </div>
    <div>
      <button
        v-if="user.isFollowing"
        class="followingBtn"
        @click.stop.prevent="unFollow(user.id)"
        :disabled="isProcessing"
      >
        正在跟隨
      </button>
      <button
        v-else
        @click.stop.prevent="addFollow(user.id)"
        :disabled="isProcessing"
      >
        跟隨
      </button>
    </div>
  </div>
</template>

<script>
import userAPI from "./../apis/users";
export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
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
        this.user = {
          ...this.user,
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
        this.user = {
          ...this.user,
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
.card
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  padding: 10px 15px
  background: none
  border: none
  border-radius: 0
  border-top: 1px solid #E6ECF0
  .UserAccount
    width: 100%
    display: flex
    flex-direction: column

.photo
  width: 50px
  height: 50px

.UserAccount
  padding-left: 10px
  font-size: 15px
  line-height: 15px
  label
    margin-bottom: 0
  .name
    font-weight: bold
  .account
    color: #657786

img
  width: 50px
  height: 50px
  display: block
  object-fit: cover
  border-radius: 100px

button
  width: 60px
  height: 35px
  border: 1px solid #FF6600
  border-radius: 100px
  color: #FF6600
  font-weight: bold
.followingBtn
  width: 90px
  height: 35px
  background: #FF6600
  border-radius: 100px
  font-weight: bold
  font-size: 15px
  line-height: 15px
  color: #FFFFFF
</style>