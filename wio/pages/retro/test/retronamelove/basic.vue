<!--Copyright (c) 2022 by Atakan Goktepe (https://codepen.io/atakan/pen/nPOZZR) / msform 라이선스-->
<template>
  <div id="namelove" class="service_width">
    <RetroHeader />


    <!-- 두번째 페이지 -->
    <fieldset id="myname_s">
      <div class="second_shell" style="margin-top: 4em;">
        <AppVif>
      <div class="adfit_margin">
        <AdFit ad-unit="DAN-JXuRNG6ahh6vo3qJ" />
      </div>
    </AppVif>
        <div class="second_title">
          <h6 class="title">이름을 입력하세요!</h6>
          <h6 class="subtitle">
            <span class="result_myname">{{ myNm }}</span> 님은
            <span class="result_yourname">{{ yourNm }}</span> 님을
            <br />얼마나 좋아하는지<br />애정지수를
            알아볼거예요 :D
          </h6>
        </div>

        <div id="input_group">
          <input type="text" id="myname" class="textbox" @blur="myname_blur" @click="mynamegetdata"
            @keydown.tab="myname_tab" @keypress.enter="myname_enter" v-model="myname" placeholder="김철수" />

          <input @click="myname_checkbox_click" type="checkbox" id="myname_add_button" />
          <label for="myname_add_button" id="myname_checkbox">
            <img :src="storage_url + `/icon/check.png`" alt="추가" />
          </label>
        </div>

        <div id="input_group">
          <input type="text" id="yourname" class="textbox" @blur="yourname_blur" @keypress.enter="yourname_blur"
            @click="yournamegetdata" v-model="yourname" placeholder="김수지" />

          <input @click="yourname_blur" type="checkbox" id="yourname_add_button" />
          <label for="yourname_add_button" id="yourname_checkbox">
            <img :src="storage_url + `/icon/check.png`" alt="추가" />
          </label>
        </div>

      </div>
      <div class="app_button default_button" style="padding: 0.5em 1em; margin-top: 2em;" @click="goToResult">
        결과확인
      </div>

      <AppVif>
        <div class="grey_shell">
          <AdsenseInpeed slot-str="4894552038" />
        </div>
      </AppVif>

    </fieldset>
  </div>
</template>
<script>
import namelovetest from '@/assets/js/namelovetest'
import global from '@/assets/js/global'
import AdFit from "@/components/AdFit"
import metaConfig from '~/config/metaConfig'

// window.history.scrollRestoration = "manual";
export default {
  name: "NL-NameLoveBasic",
  head() {
    return metaConfig.filter(menu => {
      return menu.fileNm === 'retronamelove'
    }).pop()
  },
  components: {
    AdFit: AdFit
  },
  computed: {
    myNm: {
      get() {
        return this.isInitMyname ? '김철수' : this.myname
      }
    },
    yourNm: {
      get() {
        return this.isInitYourname ? '김수지' : this.yourname
      }
    },
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    }
  },
  data() {
    return {
      myname: "",
      yourname: "",
      isInitMyname: true,
      isInitYourname: true,
    }
  },
  methods: {
    mynamegetdata() {
      if (this.isInitMyname) {
        this.isInitMyname = false
      }
    },
    yournamegetdata() {
      if (this.isInitYourname) {
        this.isInitYourname = false
      }
    },
    myname_blur() {
      if (!global.nameValidation(this.myname)) {
        document.getElementById("myname_add_button").checked = false;
        return;
      }
      document.getElementById("myname_add_button").checked = true;
    },
    yourname_blur() {
      if (!global.nameValidation(this.yourname)) {
        document.getElementById("yourname_add_button").checked = false;
        return;
      }
      document.getElementById("yourname_add_button").checked = true;
    },
    myname_enter() {
      document.getElementById('yourname').focus();
      this.yournamegetdata();
    },
    myname_checkbox_click() {
      if (!global.nameValidation(this.myname)) {
        document.getElementById("myname_add_button").checked = false;
        return;
      }
      document.getElementById("myname_add_button").checked = true;
      document.getElementById('yourname').focus();
      this.yournamegetdata();
    },
    myname_tab() {
      this.yournamegetdata();
    },
    goToResult() {
      if (!namelovetest.nameValidation(this.myname)) {
        return;
      }
      if (!namelovetest.nameValidation(this.yourname)) {
        return;
      }
      this.$router.push({
        path: '/retro/test/retronamelove/result',
        query: {
          myName: this.myname,
          yourName: this.yourname
        }
      })
    }
  }
}
</script>
