<template>
  <div class="admin-container">
    <!--左側後台導覽列-->
    <AdminNavBar />
    <!--右側推文清單-->
    <div class="list-container">
      <div class="title">
        <span>推文清單</span>
      </div>
      <div class="list">
        <TweetList
          v-for="tweet in tweets"
          :key="tweet.id"
          :initial-tweet="tweet"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavBar from "./../components/AdminNavBar";
import TweetList from "./../components/TweetList";

const dummyData = {
  tweets: [
    {
      name: "Amy",
      account: "AmazingAmy",
      image: "",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
      createdAt: "2019-06-22T09:00:43.000Z",
    },
    {
      name: "Cathy",
      account: "AmazingCathy",
      image: "",
      content: "Lorem ascascsacasca",
      createdAt: "2019-06-22T09:00:43.000Z",
    },
    {
      name: "John",
      account: "AmazingJohn",
      image: "",
      content: "Lorem ipsum dolor sit amet, consesadwqdqwd.",
      createdAt: "2019-06-22T09:00:43.000Z",
    },
    {
      name: "Kenny",
      account: "AmazingKenny",
      image: "",
      content: "Lorem ipsum dolor sit amet, consecasd.",
      createdAt: "2019-06-22T09:00:43.000Z",
    },
  ],
};

export default {
  components: {
    AdminNavBar,
    TweetList,
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
    height: 100%
    border-left: 2px solid #E6ECF0
</style>

