<template>
  <div id="persindex" class="service_width" style="padding: 0 0 3% 0">
    <div class="vh100_shell">
      <PersHeader />

      <div class="row_group hr_shell hr_title">
        <hr width="50%" :style="`border: solid 1px var(--greyLight-3); margin: auto 0`" />
        <div class="hotel_greyDark1_09 padding_02"
          style="white-space: nowrap; color: white; background: var(--greyLight-3); border-radius: 10px;">
          위오성격유형 테스트
        </div>
        <hr width="50%" :style="`border: solid 1px var(--greyLight-3); margin: auto 0`" />
      </div>
      <div class="vh_shell">
        <div style="text-align: center">

          <div class="persresult_subtitle normal_shell" style="color:var(--greyDark-0); text-align: center; width:96%;">
            성격지수가
            <span class="persresult_highlight" style="padding: 0 1%; font-weight: 900">{{ pers_percent }}%</span>인
            <span style="font-weight: 900">{{ pers_resultsubtext }}</span>
          </div>

          <div style="margin: 0.5em auto 1em auto">
            <div class="card__percent" style="margin: 0 auto 2% auto">
              <svg>
                <defs>
                  <radialGradient id="gradient" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
                    <stop id="circle_30" offset="30%" />
                    <stop id="circle_100" offset="100%" />
                  </radialGradient>
                </defs>
                <circle cx="90" cy="90" r="92" stroke="url(#gradient)" id="circle_max"></circle>
                <circle cx="52px" cy="52px" r="76px" stroke="url(#gradient)" id="circle_min"></circle>
              </svg>
              <div class="circle outer_long_shadow"></div>
              <div class="circle circle__medium inner_long_shadow"></div>
              <div class="circle circle__small outer_long_shadow"></div>
              <div class="circle circle__smaller inner_short_shadow"></div>
              <div id="card__number" style="font-family: 'hotel'; font-weight: normal;">
                <div class="gradient_text" style="font-size: 1.4em">
                  <span>{{ pers_percent }}</span><span style="font-size: 0.8em">%</span>
                </div>
                <div class="gradient_text" style="font-size: 1.2em">
                  {{ pers }}
                </div>
                <img class="persindex_arrow" style="height: 12px; margin-top: 2%"
                  :src="storage_url + `/icon/black_up_arrow.png`" />
              </div>
            </div>
          </div>

          <span class="persresult_title center"
            :style="`background:` + default_color + `;color:white; padding:0 0.2em; font-size:2.0em`">{{ pers_resulttext
            }} {{ pers }}
          </span>
        </div>

        <div>
          <div class="progress_form index_outer_shell" style="margin: 3% auto; padding: 1% 3% 0% 3%;">
            <div class="flex_column">
              <div class="wio_shadow" id="wio_shadow_ie_left">I</div>
              <div class="hotel_greyLight5_08" id="wio_text_ie_left">내향</div>
            </div>
            <div class="progress">
              <div class="progress_left" id="progressid_ie_left"></div>
              <div class="progress_right" id="progressid_ie_right"></div>
            </div>
            <div class="flex_column">
              <div class="wio_shadow" id="wio_shadow_ie_right">E</div>
              <div class="hotel_greyLight5_08" id="wio_text_ie_right">외향</div>
            </div>
          </div>

          <div class="progress_form index_outer_shell" style="margin: 3% auto; padding: 1% 3% 0% 3%;">
            <div class="flex_column">
              <div class="wio_shadow" id="wio_shadow_ns_left">N</div>
              <div class="hotel_greyLight5_08" id="wio_text_ns_left">이상</div>
            </div>
            <div class="progress">
              <div class="progress_left" id="progressid_ns_left"></div>
              <div class="progress_right" id="progressid_ns_right"></div>
            </div>
            <div class="flex_column">
              <div class="wio_shadow" id="wio_shadow_ns_right">S</div>
              <div class="hotel_greyLight5_08" id="wio_text_ns_right">현실</div>
            </div>
          </div>

          <div class="progress_form index_outer_shell" style="margin: 3% auto; padding: 1% 3% 0% 3%;">
            <div class="flex_column">
              <div class="wio_shadow" id="wio_shadow_tf_left">T</div>
              <div class="hotel_greyLight5_08" id="wio_text_tf_left">이성</div>
            </div>
            <div class="progress">
              <div class="progress_left" id="progressid_tf_left"></div>
              <div class="progress_right" id="progressid_tf_right"></div>
            </div>
            <div class="flex_column">
              <div class="wio_shadow" id="wio_shadow_tf_right">F</div>
              <div class="hotel_greyLight5_08" id="wio_text_tf_right">감정</div>
            </div>
          </div>

          <div class="progress_form index_outer_shell" style="margin: 3% auto; padding: 1% 3% 0% 3%;">
            <div class="flex_column">
              <div class="wio_shadow" id="wio_shadow_jp_left">J</div>
              <div class="hotel_greyLight5_08" id="wio_text_jp_left">계획</div>
            </div>
            <div class="progress">
              <div class="progress_left" id="progressid_jp_left"></div>
              <div class="progress_right" id="progressid_jp_right"></div>
            </div>
            <div class="flex_column">
              <div class="wio_shadow" id="wio_shadow_jp_right">P</div>
              <div class="hotel_greyLight5_08" id="wio_text_jp_right">적응</div>
            </div>
          </div>
        </div>

        <loveForm :pers="$route.query.pers"></loveForm>

      </div>
      <div class="row_group hr_shell" style="margin: 0 auto 1em auto">
        <hr width="100%" :style="`border: solid 1px var(--greyLight-3); margin: auto 2% auto 0`" />
        <div class="hotel_greyLight5_08" style="color: var(--greyLight-3)">
          <div style=" float: right; margin-bottom: 0; font-size: 0.9em; white-space: nowrap; margin-left: 2%;">
            Made By 위오퍼스널리티
          </div>
        </div>
      </div>
    </div>


    <descriptForm :pers="pers"></descriptForm>

    <ShareForm name="persindex" color="pers" :result_title="`성격유형 결과 : ` + this.pers_resulttext + ` ` + pers"
      basic_title="성격유형 테스트 - 위오퍼스널리티" :result_url="result_url" :basic_url="basic_url"
      :result_description="`성격지수가 ` + pers_percent + `%인 ` + this.pers_resultsubtext + ` ` + this.pers"
      basic_description="난 얼마나 성격이 뚜렷할까?" />

    <AppVif>

      <div class="grey_shell">
        <AdsenseInpeed slot-str="7386503291" />
      </div>
    </AppVif>

  </div>
</template>

<script>
import metaConfig from "~/config/metaConfig";
import PersHeader from "@/components/PersHeader.vue";
import ModalView from "@/components/ModalView";
import loveForm from "@/components/loveForm";
import perslove from "~/assets/js/perslove";
import persindex from "~/assets/js/persindex";

export default {
  name: "PE-percent",
  head() {
    return metaConfig
      .filter((menu) => {
        return menu.fileNm === "noindex";
      })
      .pop();
  },
  components: {
    PersHeader: PersHeader,
    ModalView: ModalView,
    perslove: perslove,
    persindex: persindex,
    loveForm: loveForm,
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`;
      },
    },
    result_url: {
      get() {
        return `/personality/test/persindex/result/?pers=${this.pers}&ie=${this.$route.query.ie}&ns=${this.$route.query.ns}&tf=${this.$route.query.tf}&jp=${this.$route.query.jp}`
      }
    },
    basic_url: {
      get() {
        return "/personality/test/persindex/basic/"
      }
    },
  },
  data() {
    return {
      isModalViewed: false,
      isModalViewed_basic: false,
      pers: "",
      perslove_pers: "",
      pershate_pers: "",
      second_pers: "",
      second_pers_percent: 0,
      second_pers_resulttext: "",
      second_pers_resulttext1: "",
      second_pers_resulttext2: "",
      ie: 0,
      ns: 0,
      tf: 0,
      jp: 0,
      min: 0,
      min_index: "",
      min_index_reverse: "",
      basic_ie: 0,
      basic_ns: 0,
      basic_tf: 0,
      basic_jp: 0,
      pers_percent: 0,
      pers_resulttext: "",
      pers_resultsubtext: "",
      total_sum: 150,
      text_color_dark: "var(--greyDark)",
      text_color_light: "var(--greyLight-5)",
      //result_color: "var(--greyDark)",
      //result_color_dark: "var(--greyDark)",
      //result_color_light: "var(--greyDark)",
      default_color: "var(--persGradient)",
      default_color_dark: "var(--persDark)",
      default_color_light: "var(--persLight)",
      result_shadow: "var(--greyLight-3)",
    };
  },
  methods: {

    gotoresult() {
      this.ie = persindex.makepercent100(this.ie);
      this.ns = persindex.makepercent100(this.ns);
      this.tf = persindex.makepercent100(this.tf);
      this.jp = persindex.makepercent100(this.jp);

      persindex.result_progressbar_animation(this.ie, "ie");
      persindex.result_progressbar_animation(this.ns, "ns");
      persindex.result_progressbar_animation(this.tf, "tf");
      persindex.result_progressbar_animation(this.jp, "jp");

      this.pers_percent = persindex.makeperspercent(this.ie, this.ns, this.tf, this.jp)
      this.pers_resulttext = persindex.makepers_resulttext(this.pers_percent);
      this.pers_resultsubtext = persindex.makepers_resultsubtext(this.pers_percent);

      persindex.circlePercent(this.pers_percent);
    },
  },
  mounted() {
    if (
      this.$route.query.pers &&
      this.$route.query.ie &&
      this.$route.query.ns &&
      this.$route.query.tf &&
      this.$route.query.jp
    ) {
      this.pers = this.$route.query.pers;
      this.ie = this.$route.query.ie;
      this.ns = this.$route.query.ns;
      this.tf = this.$route.query.tf;
      this.jp = this.$route.query.jp;
      this.basic_ie = this.ie;
      this.basic_ns = this.ns;
      this.basic_tf = this.tf;
      this.basic_jp = this.jp;
      this.gotoresult();
    }
  },
};
</script>