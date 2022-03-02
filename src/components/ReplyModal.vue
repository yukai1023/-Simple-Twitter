<template>
  <div
    class="modal fade"
    id="reply-modal"
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
        <div class="modal-body" id="reply-modal-body">
          <div class="TimeLine">
            <div class="Usertweet">
              <div class="UserPhoto">
                <img
                  :src="[
                    getData
                      ? initialData.User.avatar
                      : 'https://i.imgur.com/zYddUs8.png',
                  ]"
                />
                <p class="line"></p>
              </div>
              <div class="TweetsContent">
                <div class="UserAccount">
                  <label class="name">{{
                    getData ? initialData.User.name : ""
                  }}</label>
                  <label class="account"
                    >@{{ getData ? initialData.User.account : "" }}</label
                  >
                  <span>・</span>
                  <label class="time">{{
                    initialData.createdAt | fromNow
                  }}</label>
                </div>
                <div class="article">
                  <p class="content">
                    {{ getData ? initialData.description : "" }}
                  </p>
                  <div class="replyTo">
                    <span>回覆給 </span>
                    <span class="user"
                      >@{{ getData ? initialData.User.name : "" }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="replyContainer">
            <div class="face">
              <img
                :src="[
                  getData
                    ? initialUser.avatar
                    : 'https://i.imgur.com/zYddUs8.png',
                ]"
                alt=""
              />
            </div>
            <textarea
              id="data"
              class="form-control input"
              style="width: 700px; height: 160px"
              rows="7"
              cols="20"
              placeholder="推你的回覆"
              required
              autofocus
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-primary">回覆</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  props: {
    initialData: {
      type: [Array, Object],
      required: true,
    },
    initialUser: {
      type: [Array, Object],
      required: true,
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  data() {
    return {
      isProcessing: false,
      user: [],
      getData: false,
    };
  },
  beforeUpdate() {
    this.getData = true;
  },
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
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

.replyContainer
  display: flex

.face
  width: 60px
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
  height: 450px
  border-radius: 14px

.modal-body
  padding: 18px 15px 0 15px

.form-control
  padding-top: 0.5rem
  border: none
  font-size: 18px
  line-height: 26px
  color: #9197a3

.modal-footer
  border-top: 0px
  padding: 0 15px 15px 15px

textarea
  resize: none

.TimeLine
  width: 570px

.Usertweet
  display: flex

.UserPhoto
  width: 50px
  height: 50px
  .line
    margin: 5px 0 0 0
    width: 50%
    height: 60px
    border-right: solid #CCD6DD 3px
.TweetsContent
  padding-left: 10px
  .UserAccount
    font-size: 15px
    line-height: 22px
    color: #657786
    .name
      margin-right: 5px
      color: black
      font-weight: bold
.replyTo
  font-size: 13px
  line-height: 13px
  padding: 0px 0px 20px 0px
  color: #657786
  .user
    color: #ff6600
.content
  margin: 5px 0 19px 0
  font-size: 15px
  line-height: 22px

img
  width: 50px
  height: 50px
  display: block
  object-fit: cover
  border-radius: 100px
</style>