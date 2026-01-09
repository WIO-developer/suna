<template>
  <div class="service_width" style="padding-bottom: 3%;">
    <PersHeader />
    <div class="perstest_background" style=" padding-bottom: 2%;background:var(--persloveGradient)">
      <div class="normal_shell persresult_title" style="color:var(--greyLight-0)">위오</div>
      <div class="normal_shell persresult_title" style="color:var(--greyLight-0)">성격궁합</div>
      <div class="normal_shell persresult_title" style="color:var(--greyLight-0)">테스트</div>
      <div class="normal_shell persresult_text margin_20" style="color:var(--greyLight-0)">Made By <span
          style="font-family:'hotel'; font-weight:100; font-size:1.2em;">WIO퍼스널리티</span>
      </div>

      <div class="normal_shell border_text row_group_left" style="padding:4% 2%">
        <img style="height:20px; margin: auto 2% auto 0" :src="storage_url + `/edition/socks.png`" />
        <span class="scdream_greyDark1_08 margin_20" style="margin:auto 0">각 성격 유형을 선택하세요!</span>
      </div>
      <div class="normal_shell border_text margin_20 row_group_left" style="padding:4% 2%">
        <img style="height:20px; margin: auto 2% auto 0" :src="storage_url + `/edition/cherry.png`" />
        <span class="scdream_greyDark1_08" style="margin:auto 0">
          두 유형간의 성격궁합을 알아볼꺼에요!
        </span>
      </div>
      <ShareFormBasic name="perslove" color="perslove" basic_title="성격궁합 테스트 - 위오퍼스널리티" :basic_url="basic_url"
        basic_description="우리 궁합은 몇 퍼센트일까?" />

    </div>

    <AppVif>
      <div class="adfit_margin">
        <AdFit ad-unit="DAN-VlQp6fHYEZeSB3zS" />
      </div>
    </AppVif>


    <div class="outer_shell" style="margin:7% auto">
      <div class="inner_shell" style="width: auto; margin: 2% 0">
        <div class="normal_shell" style="width:100%; text-align: center;margin-bottom: 6%;">
          <span class="hotel_greyDark1_11" style="margin:auto auto ;color:var(--persloveLight);">
            <span>{{ myPers }} </span>♥
            <span>{{ yourPers }} </span>
          </span>

          <div class="row_group" style="margin:5% 0; font-size:0.9em">
            <input type="checkbox" id="myname_add_button" @click="openModal('mypers')" />
            <div style="font-weight:600" id="perslove_mypers" class="choicebox inner_short_shadow"
              @click="openModal('mypers')">{{ mypers }}
            </div>
            <label for="myname_add_button" id="myname_checkbox">
              <img :src="storage_url + `/icon/check.png`" alt="추가" />
            </label>

          </div>
          <div class="row_group" style="margin:4% 0; font-size:0.9em">
            <input type="checkbox" id="yourname_add_button" @click="openModal('yourpers')" />
            <div style="font-weight:600" id="perslove_yourpers" class="choicebox inner_short_shadow"
              @click="openModal('yourpers')">{{
                yourpers
              }}
            </div>
            <label for="yourname_add_button" id="yourname_checkbox">
              <img :src="storage_url + `/icon/check.png`" alt="추가" />
            </label>
          </div>

          <div class="row_group scdream_greyDark1_10" style="margin: 0 1% 1.2em auto; float: right;">
            <nuxt-link to="/personality/test/persindex/basic"
              style="display:flex; flex-direction: row; justify-content: center;">
              <div style="margin-right:2%; color:var(--persLink); font-size:0.8em;white-space:nowrap">
                내 성격유형을 모른다면?
              </div>
              <img :src="storage_url + `/icon/blue_link.png`" style="height: 0.8em;margin:auto 0" />
            </nuxt-link>
          </div>
        </div>

        <div class="second_bottom_shell">
          <input type="button" class="app_button default_button" onclick="window.scrollTo(0,0);" value="결과확인"
            @click="goToResult"
            style="background:var(--persloveGradient); color:var(--greyLight-0); font-size: 1.0em; width:100%" />
        </div>

      </div>
    </div>

    <AppVif>
      <div class="grey_shell">
        <AdsenseInpeed slot-str="9854112202" />
      </div>
    </AppVif>

    <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
      <PersloveInput @confirmInput="(e) => closeModal(e)" />
    </ModalView>

  </div>
</template>
<script>
import AdFit from "@/components/AdFit"
import ModalView from "@/components/ModalView"
import PersloveInput from "@/components/PersloveInput"
import metaConfig from '~/config/metaConfig'

// window.history.scrollRestoration = "manual";
export default {
  name: "perslove",
  head() {
    return metaConfig
      .filter((menu) => {
        return menu.fileNm === "perslove";
      })
      .pop();
  },
  components: {
    AdFit: AdFit,
    PersloveInput: PersloveInput,
    ModalView: ModalView
  },
  computed: {
    myPers: {
      get() {
        return this.isInitMypers ? 'I' : this.mypers
      }
    },
    yourPers: {
      get() {
        return this.isInitYourpers ? 'YOU' : this.yourpers
      }
    },
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    },
    basic_url: {
      get() {
        return "/personality/test/perslove/basic/"
      }
    },
  },
  data() {
    return {
      mypers: "성격유형 선택 : I",
      yourpers: "성격유형 선택 : YOU",
      isInitMypers: true,
      isInitYourpers: true,
      isModalViewed: false,
      type: 'mypers'
    }
  },
  methods: {
    openModal(type) {
      this.type = type
      this.isModalViewed = true
      if (this.type == "mypers")
        this.mypers_enter()
      else
        this.yourpers_enter()
    },
    closeModal(e) {
      if (this.type === 'mypers') {
        this.mypers = e
        this.isInitMypers = false
        this.mypers_enter()
      } else {
        this.yourpers = e
        this.isInitYourpers = false
        this.yourpers_enter()
      }
      this.isModalViewed = false
    },
    mypers_enter() {
      if (this.mypers == "성격유형 선택 : I") {
        document.getElementById("myname_add_button").checked = false;
        return;
      }
      document.getElementById("myname_add_button").checked = true;
    },
    yourpers_enter() {
      if (this.yourpers == "성격유형 선택 : YOU") {
        document.getElementById("yourname_add_button").checked = false;
        return;
      }
      document.getElementById("yourname_add_button").checked = true;
    },
    goToResult() {
      if (this.mypers == "성격유형 선택 : I" || this.yourpers == "성격유형 선택 : YOU") {
        alert("성격유형을 모두 입력하세요");
        return;
      }
      this.$router.push({
        path: '/personality/test/perslove/result',
        query: {
          myPers: this.mypers,
          yourPers: this.yourpers
        }
      })
    }
  },
  mounted() {
  }
}
</script>
