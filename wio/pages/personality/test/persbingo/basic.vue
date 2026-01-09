<template>
  <div style="padding: 0 0 3% 0" class="service_width">

    <PersHeader />
    <div class="perstest_background" style=" padding-bottom: 2%;background: var(--persbingoGradient)">
      <div class="normal_shell persresult_title" style="color:var(--greyLight-0)">위오</div>
      <div class="normal_shell persresult_title" style="color:var(--greyLight-0)">성격빙고</div>
      <div class="normal_shell persresult_title" style="color:var(--greyLight-0)">게임</div>
      <div class="normal_shell persresult_text margin_20" style="color:var(--greyLight-0)">Made By <span
          style="font-family:'hotel'; font-weight:100; font-size:1.2em;">WIO퍼스널리티</span>
      </div>

      <div class="normal_shell border_text row_group_left" style="padding:4% 2%">
        <img style="height:20px; margin: auto 2% auto 0" :src="storage_url + `/edition/socks.png`" />
        <span class="scdream_greyDark1_08 margin_20" style="margin:auto 0">내 성격유형을 선택하세요</span>
      </div>
      <div class="normal_shell border_text margin_20 row_group_left" style="padding:4% 2%">
        <img style="height:20px; margin: auto 2% auto 0" :src="storage_url + `/edition/cherry.png`" />
        <span class="scdream_greyDark1_08" style="margin:auto 0">
          자신과 맞는 문항을 클릭해보세요
        </span>
      </div>
      <div class="normal_shell border_text margin_20 row_group_left" style="padding:4% 2%">
        <img style="height:20px; margin: auto 2% auto 0" :src="storage_url + `/edition/tree.png`" />
        <span class="scdream_greyDark1_08" style="margin:auto 0">표시 후 빙고를 맞춰보세요!</span>
      </div>
      <ShareFormBasic name="persbingo" color="persbingo" basic_title="성격빙고 게임 - 위오퍼스널리티" :basic_url="basic_url"
        basic_description="여러분의 성격빙고를 맞춰보세요!" />
    </div>

    <AppVif>
      <div class="adfit_margin">
        <AdFit ad-unit="DAN-sR0oEEVXmAAdlxxA" />
      </div>
    </AppVif>

    <div class="inner_shell margin_40">

      <div class="row_group margin_40">
        <div class="hotel_persDark_11 padding_02" style="white-space:nowrap; color:var(--persbingoLight)">성격유형 선택</div>
        <hr width="100%" style="border: solid 1px var(--persbingoLight); margin:auto 0">
      </div>
      <div class="row_group">
        <div class="row_group scdream_greyDark1_10" style="margin: 0 1% 0 auto; float: right;">
          <nuxt-link to="/personality/test/persindex/basic"
            style="display:flex; flex-direction: row; justify-content: center;">
            <div style="margin-right:2%; color:var(--persLink); font-size:0.8em;white-space:nowrap">
              내 성격유형을 모른다면?
            </div>
            <img :src="storage_url + `/icon/blue_link.png`" style="height: 0.8em;margin:auto 0" />
          </nuxt-link>
        </div>
      </div>
      <p class="hotel_greyDark1_09">X<span class="persbingo_gradient_text">NT</span>X</p>
      <div class="row_group">
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/INTJ">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>I<span class="persbingo_gradient_text">NT</span>J<br><span>인티제</span></div>
          </div>
        </nuxt-link>
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/INTP">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>I<span class="persbingo_gradient_text">NT</span>P<br><span>인팁</span></div>
          </div>
        </nuxt-link>
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ENTJ">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>E<span class="persbingo_gradient_text">NT</span>J<br><span>엔티제</span></div>
          </div>
        </nuxt-link>
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ENTP">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>E<span class="persbingo_gradient_text">NT</span>P<br><span>엔팁</span></div>
          </div>
        </nuxt-link>

      </div>
      <p class="hotel_greyDark1_09">X<span class="persbingo_gradient_text">NF</span>X</p>
      <div class="row_group">

        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/INFJ">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>I<span class="persbingo_gradient_text">NF</span>J<br><span>인프제</span></div>
          </div>
        </nuxt-link>
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/INFP">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>I<span class="persbingo_gradient_text">NF</span>P<br><span>인프피</span></div>
          </div>
        </nuxt-link>
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ENFJ">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>E<span class="persbingo_gradient_text">NF</span>J<br><span>엔프제</span></div>
          </div>
        </nuxt-link>
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ENFP">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>E<span class="persbingo_gradient_text">NF</span>P<br><span>엔프피</span></div>
          </div>
        </nuxt-link>
      </div>
      <p class="hotel_greyDark1_09">X<span class="persbingo_gradient_text">S</span>X<span
          class="persbingo_gradient_text">J</span></p>
      <div class="row_group">
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ISTJ">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>I<span class="persbingo_gradient_text">S</span>T<span class="persbingo_gradient_text">J<br></span></div>
            <span>잇티제</span>
          </div>
        </nuxt-link>

        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ISFJ">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>I<span class="persbingo_gradient_text">S</span>F<span class="persbingo_gradient_text">J<br></span></div>
            <span>잇프제</span>
          </div>
        </nuxt-link>
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ESTJ">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>E<span class="persbingo_gradient_text">S</span>T<span class="persbingo_gradient_text">J<br></span></div>
            <span>엣티제</span>
          </div>
        </nuxt-link>
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ESFJ">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>E<span class="persbingo_gradient_text">S</span>F<span class="persbingo_gradient_text">J<br></span></div>
            <span>엣프제</span>
          </div>
        </nuxt-link>
      </div>
      <p class="hotel_greyDark1_09">X<span class="persbingo_gradient_text">S</span>X<span
          class="persbingo_gradient_text">P</span></p>
      <div class="row_group">
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ISTP">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>I<span class="persbingo_gradient_text">S</span>T<span class="persbingo_gradient_text">P<br></span></div>
            <span>잇팁</span>
          </div>
        </nuxt-link>
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ISFP">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>I<span class="persbingo_gradient_text">S</span>F<span class="persbingo_gradient_text">P<br></span></div>
            <span>잇프피</span>
          </div>
        </nuxt-link>
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ESTP">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>E<span class="persbingo_gradient_text">S</span>T<span class="persbingo_gradient_text">P<br></span></div>
            <span>엣팁</span>
          </div>
        </nuxt-link>
        <nuxt-link class="absolute_center square_group" to="/personality/test/persbingo/ESFP">
          <div class="square outer_long_shadow"></div>
          <div class="square_text">
            <div>E<span class="persbingo_gradient_text">S</span>F<span class="persbingo_gradient_text">P<br></span></div>
            <span>엣프피</span>
          </div>
        </nuxt-link>
      </div>
    </div>

    <AppVif>
      <div class="grey_shell">
        <AdsenseInpeed slot-str="7938827479" />
      </div>
    </AppVif>
  </div>
</template>
<script>
import metaConfig from "~/config/metaConfig";
import PersHeader from "@/components/PersHeader.vue";
import PersQuestionList from "~/config/PersQuestionList";

export default {
  name: "persbingo",
  head() {
    return metaConfig
      .filter((menu) => {
        return menu.fileNm === "persbingo";
      })
      .pop();
  },
  components: {
    PersHeader: PersHeader,
    PersQuestionList: PersQuestionList,
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`;
      },
    },
    basic_url: {
      get() {
        return "/personality/test/persbingo/basic/"
      }
    },
  },
  data() {
    return {
    };
  },
  methods: {

  },
  created() {
  },
  mounted() {
  },
};
</script>
