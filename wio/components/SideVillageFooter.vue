<template>
  <footer style="right:0" class="side_footer">
    <p style="margin-top: 1em; font-size:0.6em" class="scdream_greyLight5_08">
      Copyright &copy; 2023.08 All Rights Reserved by
    </p>
    <div style="margin:0 0 1em 0">
      <nuxt-link to="/home/">
      <img style="width: 4em" :src="storage_url + `/wio/wio_black_text.png`">
    </nuxt-link>
    </div>
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
