<template>
  <div class="admin-container">
    <AdminNavBar />
    <UserList />
  </div>
</template>
<script>
import AdminNavBar from "./../components/AdminNavBar";
import UserList from "./../components/UserList";

export default {
  components: {
    AdminNavBar,
    UserList,
  },
};
</script>

<style lang="sass" scoped>
.admin-container
  display: flex
</style>

