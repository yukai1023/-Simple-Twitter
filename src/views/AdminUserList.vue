<template>
  <div class="admin-container">
    <!--左側後台導覽列-->
    <AdminNavBar />
    <!--右側使用者資料-->
    <div class="list-container">
      <div class="title">
        <span>使用者列表</span>
      </div>
      <div class="list">
        <UserList v-for="user in users" :key="user.id" :initial-user="user" />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavBar from "./../components/AdminNavBar";
import UserList from "./../components/UserList";
import adminAPI from "./../apis/admin";

export default {
  components: {
    AdminNavBar,
    UserList,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await adminAPI.getUsers();
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        this.users = response.data.data.users;
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.admin-container
  display: flex

.list-container
  width: 100%
  padding-left: 378px
.title
  display: flex
  height: 55px
  padding-left: 26.5px
  align-items: center
  border-left: 2px solid #E6ECF0
  border-bottom: 2px solid #E6ECF0
  span
    font-size: 18px
    line-height: 26px
    color: #1C1C1C
    font-weight: bold

.list
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: 330px
  width: 100%
  height: 100%
  padding: 15px 0px 0px 15px
  border-left: 2px solid #E6ECF0
</style>

