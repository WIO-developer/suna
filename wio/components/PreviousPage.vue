<template>
  <div class="back" @click="moveToPreviousPage">
    <span>
      <img class="back_img" :src="storage_url + `/icon/back.png`" alt="뒤로" />
    </span>
  </div>
</template>

<script>
import webConfig from "~/config/webConfig";
export default {
  data() {
    return {
      menuList: [],
    };
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`;
      },
    },
    server_url: {
      get() {
        return `${process.env.VUE_APP_SERVER_URL}`;
      },
    },
    isPreviousPage: {
      get() {
        return this.$store.state.isPreviousPage;
      },
    },
  },
  methods: {
    moveToPreviousPage() {
      let slashIndex = this.$route.path.lastIndexOf("/");
      let current =
        slashIndex == this.$route.path.length - 1
          ? this.$route.path.slice(0, slashIndex)
          : this.$route.path;
      let prePage = this.menuList
        .filter((menu) => {
          return menu.path === current;
        })
        .map((menu) => menu.prePage)
        .pop();


      if (!(this.$store.state.isPreviousPageUsedIndex)
        && (this.$store.state.isPreviousPageInitUrl == window.location.href)) {
        this.$router.replace({
          path: prePage,
        });
        this.$store.commit('PreviousPageUsedIndexStatus', true)
      } else if (window.location.href.indexOf("basic") > 0) {
        this.$router.replace({
          path: prePage,
        });
      } else {

        history.back();
      }
    }
  },
  created() {
    this.menuList = [...webConfig];
  },
  mounted() {
    if (!(this.$store.state.isPreviousPageInitIndex)) {
      this.$store.commit('PreviousPageInitUrlStatus', window.location.href)
      this.$store.commit('PreviousPageInitIndexStatus', true)
    }
  }
};
</script>