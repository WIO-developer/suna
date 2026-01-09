<template>
  <div class="service_width" style="padding-bottom: 3%">
    <div class="persdes_background" :style="`background:` + result_color"></div>
    <div class="flex_column" style="margin-top:5em">
      <div class="persdes_title" style="color: var(--greyLight-0)">
        {{ info.title }}
      </div>
    </div>

    <div class="inner_shell" style="margin: 2% auto 3% auto">
      <div class="row_group" style="margin: 1em auto 1em auto">
        <hr width="50%" :style="`border: solid 1px var(--greyLight-3); margin: auto 0`" />
        <div class="hotel_greyDark1_09 padding_02"
          style="white-space: nowrap; color:white; background:var(--greyLight-3); border-radius: 10px;">
          {{ info.alias }} 상세설명
        </div>
        <hr width="50%" :style="`border: solid 1px var(--greyLight-3); margin: auto 0`" />
      </div>

      <div class="scdream_greyDark1_08" style="line-height: 150%; font-size: 0.7em"
        v-for="(infoset, index) in info.content">
        <div class="row_group button_active" style="justify-content: left; margin-bottom: 3%">
          <img :id="`img_` + index" style="height: 20px; margin: auto 2% auto 0" :src="
            storage_url +
            `/icon/check_button/` +
            result_button_img +
            `_check_button.png`
          " />
          <span :id="`text_` + index" style="margin: auto 0; color: var(--greyDark)">{{ infoset }}</span>
        </div>
      </div>

      <div class="normal_shell" style="width:70%">
        <nuxt-link :to="`/personality/test/persbingo/` + info.title" class="border_text default_button"
          style="margin:1.5em auto 0.8em auto; padding:2% 0; background: var(--greyLight-1)">
          <span style="margin: auto 2%; color:var(--greyDark)">{{ info.title }} 빙고게임</span>
          <img :src="storage_url + `/icon/black_link.png`" style="height: 1em;margin:auto 0" />
        </nuxt-link>
      </div>

      <loveForm :pers="title"></loveForm>

      <div class="row_group" style="margin: 1em auto 1em auto">
        <hr width="100%" :style="`border: solid 1px var(--greyLight-3); margin: auto 2% auto 0`" />
        <div class="hotel_greyLight5_08" style="color: var(--greyLight-3)">
          <div style=" float: right; margin-bottom: 0; font-size: 0.9em; white-space: nowrap; margin-left: 2%;">
            Made By 위오퍼스널리티
          </div>
        </div>
      </div>


    </div>

    <AppVif>
      <div class="grey_shell" style="margin: 1.5em auto; width:86%">
        <AdsenseInpeed slot-str="9898528980" />
      </div>
    </AppVif>

  </div>
</template>
  
  
<script>
import metaConfig from "~/config/metaConfig";
import perslove from "~/assets/js/perslove";
import persgingo from "~/assets/js/types";
import types from "~/assets/js/types";
import loveForm from "@/components/loveForm";

export default {
  asyncData({ params }) {
    return {
      title: params.title,
    };
  },
  head() {
    return metaConfig
      .filter((menu) => {
        return menu.fileNm === "noindex";
      })
      .pop();
  },
  components: {
    perslove: perslove,
    types: types,
    types: types,
    loveForm: loveForm,
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`;
      },
    },
  },
  data() {
    return {
      info: {
        title: "INTJ",
        aliastitle: "",
        hashtag: "",
        subtitle_1: "",
        content_1: "",
        subtitle_2: "",
        content_2: "",
        subtitle_3: "",
        content_3: "",
        subtitle_4: "",
        content_4: "",
      },
      result_color: "var(--greyDark)",
      result_color_dark: "var(--greyDark)",
      result_color_light: "var(--greyDark)",
      result_color_button: "greyLight-3",
      arr: [],
      result_color_font: "var(--greyLight-3)",
      result_button_img: "",
      perslove_pers: "",
      pershate_pers: "",
    };
  },
  methods: {
    textonoff(index) {
      types.textonoff(index, this.result_button_img, this.result_button_img, this.storage_url)
    },
  },
  created() {
  },
  mounted() {
    this.info = types.changeInfo(this.title);

    this.perslove_pers = perslove.perslove_search100(this.info.title);
    this.pershate_pers = perslove.pershate_search100(this.info.title);

    this.arr = types.setcolor(this.info.title);

    this.result_color = this.arr[0]
    this.result_color_dark = this.arr[1]
    this.result_color_light = this.arr[2]
    this.result_button_img = this.arr[3]
  }
};
</script>