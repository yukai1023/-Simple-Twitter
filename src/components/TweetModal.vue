<template>
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
            src="../images/cross@2x.png"
            data-bs-dismiss="modal"
            type="button"
          />
        </div>
        <div class="modal-body" id="movie-modal-body">
          <img class="face" src="../images/logo@2x.png" alt="" />
          <textarea
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
          <span></span>
          <button type="button" class="btn-primary">推文</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      isShow: false,
    };
  },
  watch: {
    content() {
      if (this.content.length > 140) {
        console.log('123')
      }
    },
  },
};
</script>
<style scoped>
.btn-primary {
  background: #ff6600;
  border-radius: 100px;
  width: 66px;
  height: 38px;
  font-size: 18px;
  line-height: 18px;
}
.face {
  width: 50px;
  height: 50px;
  display: block;
  object-fit: cover;
  border-radius: 100px;
}
.cross {
  width: 15px;
  height: 15px;
}
.modal-header {
  padding: 19.5px;
}
.modal-content {
  width: 600px;
  height: 300px;
  border-radius: 14px;
}
.modal-body {
  display: flex;
  padding: 15px 15px 0 15px;
}
.form-control {
  padding-top: 0.5rem;
  border: none;
  font-size: 18px;
  line-height: 26px;
  color: #9197a3;
}
.modal-footer {
  border-top: 0px;
  padding: 0 15px 15px 15px;
}

textarea {
  resize: none;
}
</style>