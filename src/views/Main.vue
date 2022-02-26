<template>
  <div class="main-container">
    <!--左側導覽列-->
    <NavBar />
    <!--推文模板-->
    <TweetModal />
    <div class="main">
      <!--中間上側推文-->
      <SendTweet />
      <!--中間推文時間軸-->
      <div class="TimeLine">
        <TimeLine
          v-for="tweet in tweets"
          :key="tweet.id"
          :initial-tweet="tweet"
        />
      </div>
    </div>
    <!--右側熱門用戶-->
    <PopularUser />
  </div>
</template>

<script>
import NavBar from "./../components/NavBar";
import SendTweet from "./../components/SendTweet";
import TweetModal from "./../components/TweetModal";
import TimeLine from "./../components/TimeLine";
import PopularUser from "./../components/PopularUser";

const dummyData = {
  tweets: [
    {
      name: "Amy",
      account: "AmazingAmy",
      image: "",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
      createdAt: "2019-06-22T09:00:43.000Z",
      reply: "15",
      like: "88",
    },
    {
      name: "Cathy",
      account: "AmazingCathy",
      image: "",
      content: "Lorem ascascsacasca",
      createdAt: "2019-06-22T09:00:43.000Z",
      reply: "15",
      like: "88",
    },
    {
      name: "John",
      account: "AmazingJohn",
      image: "",
      content: "Lorem ipsum dolor sit amet, consesadwqdqwd.",
      createdAt: "2019-06-22T09:00:43.000Z",
      reply: "15",
      like: "88",
    },
    {
      name: "Kenny",
      account: "AmazingKenny",
      image: "",
      content: "Lorem ipsum dolor sit amet, consecasd.",
      createdAt: "2019-06-22T09:00:43.000Z",
      reply: "15",
      like: "88",
    },
  ],
};

export default {
  components: {
    NavBar,
    SendTweet,
    TweetModal,
    TimeLine,
    PopularUser,
  },
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      const { tweets } = dummyData;
      this.tweets = tweets;
    },
  },
};
</script>

<style lang="sass" scoped>
.main-container
  display: flex

.main
  display: flex
  flex-direction: column

.TimeLine
  width: 600px
  height: 100vh
  border-left: 1px solid #E6ECF0
  border-right: 1px solid #E6ECF0
</style>
