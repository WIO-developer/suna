<template>
  <footer class="side_footer">
    <div class="container" style="word-break: keep-all">
      <a class="scdream_greyLight5_09" href="/privacy">개인정보처리방침</a>
    </div>
    <p style="margin-top: 1em;" class="scdream_greyLight5_08">
      Copyright &copy; 2023.01 All Rights Reserved by
    </p>
  <nuxt-link to="/home/">
    <img style="width: 22%;" :src="storage_url + `/wio/wio_black_text.png`">
  </nuxt-link>
  
  </footer>
</template>

<script>
export default {
  props: {
    type: String
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    }
  },
  data() {
    return {
    }
  },
  created() {
  }
}
</script>

<style></style>
