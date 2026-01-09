<template>
  <nuxt-link
    style="width: 30%; text-align: center"
    :to="url"
  >
    <img
      style="width: 100%; border-radius: 10px"
      :src="storage_url + service_img"
    />
    <div
      style="
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      "
      class="scdream_greyDark_07"
    >
      {{name}}
    </div>
  </nuxt-link>
</template>
    
  <script>
export default {
  data() {
    return {};
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    service_img: {
      type: String,
      required: true,
    },
  },
  components: {},
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
  },
  methods: {},
};
</script>
  
  