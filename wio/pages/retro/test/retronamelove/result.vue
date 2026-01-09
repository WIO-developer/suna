<!--Copyright (c) 2022 by Atakan Goktepe (https://codepen.io/atakan/pen/nPOZZR) / msform 라이선스-->
<template>
  <div id="namelove" class="service_width">
    <!-- 결과 페이지 -->
    <RetroHeader />


    <fieldset id="result_f_iu">

      <ShareForm style="margin-top: 4em;" name="retronamelove" result_title="이름궁합 너와나.ver - 위오레트로"
        basic_title="이름궁합 너와나.ver - 위오레트로" :result_url="result_url" :basic_url="basic_url"
        :result_description="myname + `과 `+ yourname +`의 궁합은?`" basic_description="너와 나의 이름궁합은 몇 퍼센트일까?" />


      <div id="result_animation"></div>
      <img id="result_animation_img" :src="storage_url+`/retro/namelove/result_back.jpg`"/>

      <div class="result_shell">
        <h5 class="rs-title">
          <span class="result_myname">{{ myname }}</span>님은 <span class="result_yourname">{{ yourname }}</span>님을
        </h5>
        <h5 class="rs-titlescore">
          <span id="result_score">{{ rstObj.resultTitleScore }}</span>&nbsp;애정합니다!
        </h5>
        <div class="progress_form">
          <div class="progress">
            <div class="progress-done" id="progressid"></div>
          </div>
        </div>

        <div class="default_button app_button" @click="reverseTest">
        <p>반대 궁합보기</p>
      </div>
      </div>

      <AppVif>
        <div class="grey_shell">
          <AdsenseInpeed slot-str="1885245319" />
        </div>
      </AppVif>


    </fieldset>
    <!-- 모달 페이지 -->
    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
      <ShareLink modal_title="결과를 친구들과 공유해보세요!" :title="rstObj.resultSubmaintitle" :sharelink-txt="share_link"
        :imageUrl="image_url" :description="share_description" :android-exec-params="share_androidParam" kakaokey="namelove"/>
    </ModalView>

    <ModalView v-if="isModalViewed_basic" @close-modal="isModalViewed_basic = false">
      <ShareLink modal_title="이름궁합 테스트를 친구들에게 공유해보세요!" title="이름궁합 테스트 너와 나.ver" :sharelinkTxt="share_link_root"
        :imageUrl="image_url" description="너와 나의 애정지수는 몇 %일까? ♥" androidExecParams="" kakaokey="namelove"/>
    </ModalView>

    <!--<AppAd />-->
  </div>
</template>
<script>
import namelovetest from '@/assets/js/namelovetest'
import AdsenseContent from "@/components/AdsenseContent"
import AdsenseInpeed from "@/components/AdsenseInpeed"
import AdFit from "@/components/AdFit";
import ModalView from "@/components/ModalView";
import AppAd from "@/components/AppAd.vue";
import ShareLink from '~/components/ShareLink.vue';
import metaConfig from '~/config/metaConfig'
// window.history.scrollRestoration = "manual";
export default {
  name: "NL-NameLoveResult",
  head() {
    return metaConfig.filter(menu => {
      return menu.fileNm === 'noindex'
    }).pop()
  },
  components: {
    AdsenseContent: AdsenseContent,
    AdsenseInpeed: AdsenseInpeed,
    AdFit: AdFit,
    ModalView: ModalView,
    AppAd: AppAd,
    ShareLink: ShareLink,
  },
  data() {
    return {
      isModalViewed: false,
      isModalViewed_basic: false,
      rstObj: {
        resultTitle: "",
        resultTitleScore: "",
        resultSubtitle: "",
        resultSubmaintitle: ""
      },
      myname: "",
      yourname: ""
    }
  },
  computed: {
    result_url: {
      get() {
        return `/retro/test/retronamelove/result?myName=${this.myname}&yourName=${this.yourname}`
      }
    },
    basic_url: {
      get() {
        return "/retro/test/retronamelove/basic/"
      }
    },
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    }

  },
  methods: {
    reverseTest() {
      let tmpName = ""
      tmpName = this.yourname
      this.yourname = this.myname
      this.myname = tmpName
      this.goToResult()
    },
    goToResult() {
      let result_num = namelovetest.nameLoveTestResult(this.myname, this.yourname)
      this.rstObj = namelovetest.makeTitle(this.myname, this.yourname, result_num)
    }
  },
  mounted() {
    if (this.$route.query.myName && this.$route.query.yourName) {
      this.myname = this.$route.query.myName
      this.yourname = this.$route.query.yourName
      this.goToResult()
    }
  }
}
</script>
