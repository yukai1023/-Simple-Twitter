<template>
  <div class="PopularUser">
    <h3>Popular</h3>
    <div class="card">
      <div class="photo">
        <img src="../images/coverPhoto.png" alt="" />
      </div>
      <div class="UserAccount">
        <label class="name">Pizza hut</label>
        <label class="account">@pizzahut</label>
      </div>
      <div>
        <button>跟隨</button>
      </div>
    </div>

    <div class="card">
      <div class="photo">
        <img src="../images/coverPhoto.png" alt="" />
      </div>
      <div class="UserAccount">
        <label class="name">Pizza hut</label>
        <label class="account">@pizzahut</label>
      </div>
      <div>
        <button>跟隨</button>
      </div>
    </div>

    <div class="card">
      <div class="photo">
        <img src="../images/coverPhoto.png" alt="" />
      </div>
      <div class="UserAccount">
        <label class="name">Pizza hut</label>
        <label class="account">@pizzahut</label>
      </div>
      <div>
        <button>跟隨</button>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.PopularUser
  margin: 15px 0 0 30px
  width: 350px
  height: 756px
  background: #F5F8FA
  border-radius: 14px

h3
  padding: 10px 0 0 15px
  font-size: 18px
  font-weight: bold
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
</style>