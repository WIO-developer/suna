<template>
  <div id="namelove" class="service_width">
    <RetroHeader />

    <!--us 결과 페이지 -->
    <fieldset id="result_f">

      <ShareForm style="margin-top: 4em;" name="retronameloveus" result_title="이름궁합 우리.ver - 위오레트로"
        basic_title="이름궁합 우리.ver - 위오레트로" :result_url="result_url" :basic_url="basic_url"
        :result_description="us_name + `의 궁합은?`" basic_description="우리들 중 가장 높은 이름궁합은 누굴까?" />

      <div class="result_shell">
        <div class="result_title">사랑의 애정지수 결과</div>
        <div id="result_title_group">

          <div class="search_box" style="align-items: center; padding-top:0.3em; padding-bottom:0.3em; ">
            <div style="display:flex; align-items: center;">
              <img :src="storage_url + `/icon/search.png`" type="button" @click="findResultByName(searchNm)"
                style="height: 1.5em;" alt="검색" tabindex="-1" />
              <input type="text" class="rank_text" @keypress.enter="findResultByName(searchNm)"
                placeholder="이름을 검색해보세요 :)" v-model="searchNm" />
            </div>
            <div style="display:flex; align-items: center;">
              <img :src="storage_url + `/icon/column.png`" class="rank_column" alt="세로선" tabindex="-1" />
              <img :src="storage_url + `/icon/x.png`" @click="initResultList" type="button" style="height: 1em;" alt="초기화"
                tabindex="-1" />
            </div>
          </div>

          <hr style="margin:5%">
          <div class="subtitle" style="color:var(--nameloveblack)">
            <div class="result_content_us" :id="'result' + rst.rank" v-for="(rst, idx) in us_result_search" :key="idx">
              <p class="result">{{ rst.myname }} ➡️ {{ rst.yourname }} : <span style="color:var(--namelovered)">{{
                rst.result }}%</span> {{ rst.emoticon }}</p>
            </div>
          </div>
        </div>
      </div>

      <AppVif>
        <div class="grey_shell">
          <AdsenseInpeed slot-str="5720363175" />
        </div>
      </AppVif>

    </fieldset>

    <!--<AppAd />-->
  </div>
</template>

<script>
import namelovetest from '@/assets/js/namelovetest';
import AdsenseInpeed from "@/components/AdsenseInpeed";
import AdsenseDisplay from "@/components/AdsenseDisplay";
import AdsenseContent from "@/components/AdsenseContent";
import AdFit from "@/components/AdFit";
import AppAd from "@/components/AppAd.vue";
import ModalView from "@/components/ModalView";
import ShareLink from '~/components/ShareLink.vue';
import metaConfig from '~/config/metaConfig'

// history.scrollRestoration = "manual";
export default {
  name: "NL-NameLoveUs",
  head() {
    return metaConfig.filter(menu => {
      return menu.fileNm === 'noindex'
    }).pop()
  },
  components: {
    AdsenseInpeed: AdsenseInpeed,
    AdsenseContent: AdsenseContent,
    AdsenseDisplay: AdsenseDisplay,
    AdFit: AdFit,
    ModalView: ModalView,
    AppAd: AppAd,
    ShareLink: ShareLink
  },
  data() {
    return {
      isModalViewed: false,
      isModalViewed_basic: false,
      us_name: [], // 이름 리스트 [ '홍길동', '홍길순', '배경환' ]
      us_result_origin: [], // {myname: '', yourname: '', result: ''} 담은 배열,
      us_result_search: [],
      searchNm: '',
    }
  },
  computed: {
    result_url: {
      get() {
        return `/retro/test/retronameloveus/result?names=${this.us_name.join(',')}`
      }
    },
    basic_url: {
      get() {
        return "/retro/test/retronameloveus/basic/"
      }
    },
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    }
  },
  methods: {
    /**
     * METHOD: goToResultUs
     * DESCRIPTION: 우리ver. RESULT FN
     */
    goToResultUs() {
      let cnt = this.us_name.length
      let firstNm = ''
      let secondNm = ''
      let rst = 0
      while (cnt > 0) {
        firstNm = this.us_name[0]
        for (let i = 1; i < this.us_name.length; i++) {
          secondNm = this.us_name[i]
          rst = namelovetest.nameLoveTestResult(firstNm, secondNm)
          this.us_result_origin.push({
            isAd: false,
            myname: firstNm,
            yourname: secondNm,
            result: rst
          })
        }
        this.us_name.push(this.us_name[0])
        this.us_name.splice(0, 1)
        cnt--
      }
      this.us_result_origin.sort(function (a, b) {
        return b.result - a.result
      })

      this.us_result_search = [...this.us_result_origin]
      this.applyRankToResultList(this.us_result_search)
    },
    applyRankToResultList(usResult) {
      usResult.forEach((rst, idx) => {
        rst.rank = idx + 1
        if (idx === 0) rst.emoticon = '🏅'
        else if (idx === 1) rst.emoticon = '🥈'
        else if (idx === 2) rst.emoticon = '🥉'
        else if (rst.result > 50) {
          rst.emoticon = '💘'
        } else {
          rst.emoticon = '💔'
        }
      })
    },
    findResultByName(name) {
      let mynameList = this.us_result_origin.filter(rst => {
        return rst.myname === name
      })
      let yournameList = this.us_result_origin.filter(rst => {
        return rst.yourname === name
      })
      // 없는 이름 검색했을 때
      if (mynameList.length === 0 && yournameList.length === 0) {
        return alert('이름을 확인해주세요 !')
      }
      this.us_result_search = [
        ...mynameList,
        ...yournameList
      ]
      this.us_result_search.sort(function (a, b) {
        return b.result - a.result
      })
      this.applyRankToResultList(this.us_result_search)
    },
    initResultList() {
      this.searchNm = ''
      this.us_result_search = [...this.us_result_origin]
      this.applyRankToResultList(this.us_result_search)
    }
  },
  mounted() {
    if (this.$route.query.names) {
      this.us_name = this.$route.query.names.split(',')
      this.goToResultUs()
    }
  }
}
</script>
