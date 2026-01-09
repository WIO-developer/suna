<template>
  <div>
    <nuxt-link class="flex_row_between_shell" :to="url" style="margin: 0.5em auto;">
      <span style="
                        overflow: hidden;
                        display: flex;
                        justify-content: left;
                        align-items: center;
                        width: 60%;
                      ">
        <img :src="storage_url + rank_img" style="margin-right: 0.5em; width:2em" />
        <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden" class="scdream_greyDark_10">{{ name
        }}</span>
      </span>
      <span style="
                        display: flex;
                        justify-content: right;
                        align-items: center;
                        width: 40%;
                      ">
        <span class="scdream_greyLight5_08">{{ service }}</span>
        <img style="width: 2.2em; margin-left: 0.5em" :src="storage_url + service_logo" />
      </span>
    </nuxt-link>
  </div>
</template>
  
<script>
export default {
  data() {
    return {};
  },
  props: {
    rank_img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    service_logo: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  components: {
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
  },
  methods: {},
};
</script>

