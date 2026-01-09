<template>
  <div>
    <div class="normal_shell border_text margin_20" style="margin:1em auto 1em auto; padding:1% 2%">

      <div class="row_group">

        <div class="square_group outer_shell" @click="isModalViewed_basic = true"
          style="text-align:center;border-radius: 10px;background:var(--greyLight-1);padding:0.2em; width:23%; margin:0">
          <img style="width:60%; " :src="storage_url + `/icon/black_share.png`" />
          <div class="hotel_greyDark_07">테스트공유</div>
        </div>

      </div>
    </div>

    <!-- 모달 페이지 -->
    <ModalView v-if="isModalViewed_basic" @close-modal="isModalViewed_basic = false">
      <ShareLink :name="name" modal_title="테스트를 친구들에게 공유해보세요!" :title="basic_title" :url="basic_url"
        :description="basic_description" />
    </ModalView>
  </div>
</template>

<script>
import ShareLink from "~/components/ShareLink.vue";
import Header from "~/assets/js/header";
export default {
  name: "ShareForm",
  components: {
    ShareLink: ShareLink,
    Header: Header,
  },
  data() {
    return {
      isModalViewed: false,
      isModalViewed_basic: false,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    basic_title: {
      type: String,
      required: true,
    },
    basic_url: {
      type: String,
      required: true,
    },
    basic_description: {
      type: String,
      required: true,
    },
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`;
      },
    },
  },
  methods: {},
  mounted() {
  },
};
</script>
