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
        <UserList
          v-for="user in users"
          :key="user.id"
          :initial-user="user"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavBar from "./../components/AdminNavBar";
import UserList from "./../components/UserList";

const dummyData = {
  users: [
    {
      name: "Amy",
      account: "AmazingAmy",
      image: "",
      tweet: "1.5k",
      like: "20k",
      following: "34",
      follower: "59",
    },
    {
      name: "Cathy",
      account: "AmazingCathy",
      image: "",
      tweet: "1.5k",
      like: "20k",
      following: "34",
      follower: "59",
    },
    {
      name: "John",
      account: "AmazingJohn",
      image: "",
      tweet: "1.5k",
      like: "20k",
      following: "34",
      follower: "59",
    },
    {
      name: "Kenny",
      account: "AmazingKenny",
      image: "",
      tweet: "1.5k",
      like: "20k",
      following: "34",
      follower: "59",
    },
  ],
};

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
    fetchUsers() {
      const { users } = dummyData;
      this.users = users;
    },
  },
};
</script>

<style lang="sass" scoped>
.admin-container
  display: flex

.list-container
  width: 100%

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

