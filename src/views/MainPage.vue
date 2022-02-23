<template>
    <div class="container">
    <!--左側導覽列-->
    <NavBar />
    <!--中間混沌宇宙-->
    <SendTweet />
    <!--右側熱門用戶-->
    <PopularUser />
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import PopularUser from '../components/PopularUser'
import SendTweet from '../components/SendTweet'

export default {
  components: {
    NavBar,
    PopularUser,
    SendTweet
  }
}
</script>

<style lang="sass" scoped>

.container 
  display: flex
</style>