<template>
  <div style="padding-bottom: 3%" class="service_width">
    <PersHeader />
    <div class="persdes_background" :style="`background:` + result_color"></div>
    <div class="flex_column" style="margin-top:5em">
      <div class="persdes_title" style="color: var(--greyLight-0)">
        {{ info.title }}
      </div>
    </div>

    <div class="inner_shell" style="margin: 2% auto 3% auto; width:95%; padding:1%">
      <div class="row_group hr_shell" style="margin: 1em auto 1em auto">
        <hr width="50%" :style="`border: solid 1px var(--greyLight-3); margin: auto 0`" />
        <div class="hotel_greyDark1_09 padding_02"
          style="white-space: nowrap; color:white; background:var(--greyLight-3); border-radius: 10px;">
          {{ info.alias }} 빙고판
        </div>
        <hr width="50%" :style="`border: solid 1px var(--greyLight-3); margin: auto 0`" />
      </div>

      <div class="bingo_shell">
        <div class="bingo" v-for="(infoset, index) in items" :id="`text_` + index" style="color: var(--greyDark)"
          @click="textonoff(index)">
          <p class="bingo_text" :id="`text_p_` + index">{{ infoset }}</p>
          <img :id="`img_` + index"
            :class="result_path[index] == '0' ? 'bingo_img bingo_default' : 'bingo_img bingo_' + pers_color"
            style="z-index:2" />
        </div>
      </div>

      <div class="normal_shell" style="width:70%">
        <nuxt-link :to="`/personality/types/` + info.title" class="border_text default_button"
          style="margin:1.5em auto 1.5em auto; padding:2% 0; background: var(--greyLight-1)">
          <span style="margin: auto 2%; color:var(--greyDark)">{{ info.title }} 상세보기</span>
          <img :src="storage_url + `/icon/black_link.png`" style="height: 1em;margin:auto 0" />
        </nuxt-link>
      </div>

      <loveForm :pers="title"></loveForm>

      <div class="row_group hr_shell" style="margin: 1em auto 1em auto">
        <hr width="100%" :style="`border: solid 1px var(--greyLight-3); margin: auto 2% auto 0`" />
        <div class="hotel_greyLight5_08" style="color:var(--greyLight-3)">
          <div style="float: right;  font-size:0.9em; white-space: nowrap; margin-left:2%">Made By
            위오퍼스널리티</div>
        </div>
      </div>
    </div>

    <ShareForm name="persbingo" color="persbingo" :result_title="info.title + ` 빙고`" basic_title="성격빙고 게임 - 위오퍼스널리티"
      :result_url="result_url" :basic_url="basic_url" :result_description="`25개 중, ` + count + `개 지문이 일치해요!`"
      basic_description="여러분의 성격빙고를 맞춰보세요!" />

    <AppVif>
      <div class="grey_shell" style="margin: 1.5em auto; width:86%">
        <AdsenseInpeed slot-str="7032197654" />
      </div>
    </AppVif>

  </div>
</template>


<script>
import { relative } from "path";
import metaConfig from "~/config/metaConfig";
import perslove from "~/assets/js/perslove";
import persbingo from "~/assets/js/persbingo";
import types from "~/assets/js/types";

export default {
  asyncData({ params }) {
    return {
      title: params.title,
      result_path: "0000000000000000000000000",
      items: "",
      count: 0,
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
    persbingo: persbingo,
    types: types,
  },
  computed: {
    result_url: {
      get() {
        return `/personality/test/persbingo/${this.title}?bingo=${this.result_path}`
      }
    },
    basic_url: {
      get() {
        return "/personality/test/persbingo/basic/"
      }
    },
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
      perslove_pers: "",
      pershate_pers: "",
      result_color: "var(--greyDark)",
      result_color_dark: "var(--greyDark)",
      result_color_light: "var(--greyDark)",
      result_button_img: "greyLight-3",
      pers_color: "",
      isModalViewed_basic: false
    };
  },
  methods: {
    textonoff(index) {
      let arr = persbingo.makepath(index, this.result_path, this.count);
      this.result_path = arr[0]
      this.count = arr[1]
    },
  },
  created() {
  },
  mounted() {
    this.info = persbingo.changeInfo(this.title);
    this.items = this.info.content
    this.perslove_pers = perslove.perslove_search100(this.info.title);
    this.pershate_pers = perslove.pershate_search100(this.info.title);

    this.arr = types.setcolor(this.info.title);

    this.result_color = this.arr[0]
    this.result_color_dark = this.arr[1]
    this.result_color_light = this.arr[2]
    this.result_button_img = this.arr[3]
    this.pers_color = this.arr[4]

    if (this.$route.query.bingo) {
      this.result_path = this.$route.query.bingo
      let pos = this.result_path.indexOf("1");
      while (pos !== -1) {
        this.count++;
        pos = this.result_path.indexOf("1", pos + 1); // 첫 번째 a 이후의 인덱스부터 a를 찾습니다.
      }
    }
  }
};
</script>
