<template>
  <div id="perslove" class="service_width" style="padding:0 0 3% 0;">

    <div class="vh100_shell">

      <PersHeader />


      <div class="row_group hr_shell hr_title">
        <hr width="50%" :style="`border: solid 1px var(--greyLight-3); margin: auto 0`" />
        <div class="hotel_greyDark1_09 padding_02"
          style="white-space: nowrap; color:white; background:var(--greyLight-3); border-radius: 10px;">
          위오성격궁합
        </div>
        <hr width="50%" :style="`border: solid 1px var(--greyLight-3); margin: auto 0`" />
      </div>

      <div class="vh_shell" style="max-height: 550px;">

        <div class="card__description normal_shell" style="margin:0 auto 1em auto">
          <h5 class="persresult_title normal_shell" style="margin:0 auto;text-align: center;font-size:1.5em">
            <span class="color_class" style="padding: 0 3%; border-radius: 10px;">
              {{ mypers }} <span style="color:var(--redLight-1)">♥</span> {{ yourpers }} </span>
          </h5>
          <div class="card__percent" style="margin: 0 auto 1% auto">
            <svg>
              <defs>
                <radialGradient id="gradient" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
                  <stop id="circle_30" offset="30%" />
                  <stop id="circle_100" offset="100%" />
                </radialGradient>
              </defs>
              <circle cx="90" cy="90" r="92" stroke="url(#gradient)" id="circle_max"></circle>
              <circle cx="65" cy="65" r="72" stroke="url(#gradient)" id="circle_min"></circle>
            </svg>
            <div class="circle outer_long_shadow"></div>
            <div class="circle circle__medium inner_long_shadow"></div>
            <div class="circle circle__small outer_short_shadow"></div>
            <div class="circle circle__smaller inner_short_shadow"></div>
            <div id="card__number">
              <div>{{ rstObj.pers_percent }}%</div>
              <img class="perslove_arrow" style="height:10px; margin-top: 2%;"
                :src="storage_url + `/icon/black_up_arrow.png`" />
            </div>
          </div>
          <div class="persresult_title color_class_gradient" style="margin:2% auto 0 auto; color:white; padding:0 2%">{{
            rstObj.resultTitle
          }}</div>
          <div class="card__description normal_shell">
            <div class="persresult_subtitle" style="margin:2% auto">{{ rstObj.resultSubtitle }}</div>
            <div class="persresult_subtitle">{{ rstObj.resultDescription }}</div>
          </div>
        </div>

        <div class="normal_shell" style="width:70%">
          <div class="border_text default_button" @click="isModalViewed_table = true"
            style="margin:2% auto; padding:2% 0; background: var(--greyLight-1)">
            <span style="margin: auto 2%; color:var(--greyDark)">유형별 전체 궁합 확인</span>
            <img :src="storage_url + `/icon/black_description.png`" style="height: 20px;margin:auto 0" />
          </div>

        </div>
        <div class="normal_shell" style="width:74%">
          <div class="row_group" style="justify-content: space-between;">
            <div class="row_group scdream_greyDark1_10" style="margin:2% auto 0 auto; justify-content: center;">
              <nuxt-link :to="`/personality/types/` + mypers"
                style="display:flex; flex-direction: row; justify-content: center;">
                <div style="margin-right:0.2em; color:var(--persLink); font-size:1.0em;white-space:nowrap;">
                  {{ mypers }} 상세보기
                </div>
                <img :src="storage_url + `/icon/blue_link.png`" style="height: 1.0em;margin:auto 0" />
              </nuxt-link>
            </div>
            <div class="row_group scdream_greyDark1_10" style="margin:2% auto 0 auto; justify-content: center;">
              <nuxt-link :to="`/personality/types/` + yourpers"
                style="display:flex; flex-direction: row; justify-content: center;">
                <div style="margin-right:0.2em; color:var(--persLink); font-size:1.0em;white-space:nowrap;">
                  {{ yourpers }} 상세보기
                </div>
                <img :src="storage_url + `/icon/blue_link.png`" style="height: 1.0em;margin:auto 0" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="row_group hr_shell" style="margin: 0 auto 2em auto">
        <hr width="100%" :style="`border: solid 1px var(--greyLight-3); margin: auto 2% auto 0`" />
        <div class="hotel_greyLight5_08" style="color:var(--greyLight-3)">
          <div style="float: right;  font-size:0.9em; white-space: nowrap; margin-left:2%">Made By
            위오퍼스널리티</div>
        </div>
      </div>
    </div>

    <ShareForm name="perslove" color="perslove" :result_title="result_title" basic_title="성격궁합 테스트 - 위오퍼스널리티"
      :result_url="result_url" :basic_url="basic_url" :result_description="rstObj.resultSubtitle"
      basic_description="우리 궁합은 몇 퍼센트일까?" />

    <AppVif>
      <div class="grey_shell">
        <AdsenseInpeed slot-str="1203813604" />
      </div>
    </AppVif>

    <!-- 모달 페이지 -->

    <ModalView v-if="isModalViewed_table" @close-modal="isModalViewed_table = false">
      <img class="modal_img modal_popup" :src="storage_url + `/pers/perslove/perslove_table.jpg`" alt="궁합 테이블" />
    </ModalView>
  </div>
</template>
<script>
import AdsenseContent from "@/components/AdsenseContent";
import AdsenseInpeed from "@/components/AdsenseInpeed";
import AdFit from "@/components/AdFit";
import ModalView from "@/components/ModalView";
import metaConfig from "~/config/metaConfig";
import perslove from "~/assets/js/perslove";
import ShareLink from '~/components/ShareLink.vue';

export default {
  name: "PE-PersLoveResultApp",
  head() {
    return metaConfig
      .filter((menu) => {
        return menu.fileNm === "noindex";
      })
      .pop();
  },
  components: {
    AdsenseContent: AdsenseContent,
    AdsenseInpeed: AdsenseInpeed,
    AdFit: AdFit,
    ModalView: ModalView,
    ShareLink: ShareLink,
  },
  data() {
    return {
      isModalViewed_table: false,
      rstObj: {
        resultTitle: "",
        resultSubtitle: "",
        resultDescription: "",
        color: "",
      },
      mypers: "",
      yourpers: "",
      pers_percent: 0,
    };
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`;
      },
    },
    result_title: {
      get() {
        return this.mypers + "와 " + this.yourpers + "의 궁합은!?";
      },
    },
    result_url: {
      get() {
        return `/personality/test/perslove/result/?myPers=${this.mypers}&yourPers=${this.yourpers}`
      }
    },
    basic_url: {
      get() {
        return "/personality/test/perslove/basic/"
      }
    },
  },
  methods: {

  },
  mounted() {
    if (this.$route.query.myPers && this.$route.query.yourPers) {
      this.mypers = this.$route.query.myPers;
      this.yourpers = this.$route.query.yourPers;
      this.rstObj = perslove.circlePercent(this.mypers, this.yourpers);
    }
  },
};
</script>
