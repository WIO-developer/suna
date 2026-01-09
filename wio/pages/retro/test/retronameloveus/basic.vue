<template>
  <div id="namelove" class="service_width">
    <RetroHeader />

    <!-- us 두번째 페이지 -->
    <fieldset id="myname_s_us">
      <div class="second_shell" style="margin-top: 4em;">
        <AppVif>
      <div class="adfit_margin">
        <AdFit ad-unit="DAN-T4wqSxguykTpYIPJ" />
      </div>
    </AppVif>
        <div class="second_title">
          <h2 class="title">이름을 모두 입력하세요!</h2>
          <h6 class="subtitle">
            애정지수가 궁금한 모든 조합을 계산해서<br />랭킹으로 알려드릴거예요 :D
          </h6>
        </div>
        <div class="second_name">
          <p class="content"> {{ us_name.join(' ') }} </p>
          <div class="delete_shell">
            <div class="delete_right_shell">
              <span class="delete_button" @click="delete_name">잘못 쳤어요.</span>
              <div class="delete">
                <img :src="storage_url + `/icon/delete.png`" type="button" @click="delete_name" class="delete_img"
                  alt="삭제" tabindex="-1" />
              </div>
            </div>
          </div>
        </div>
        <div id="input_group">
          <input type="text" id="name" class="textbox" @click="namegetdata" v-model="name" placeholder="여기에 입력하세요 :)"
            @keypress.enter="add_name" />
          <img :src="storage_url + `/icon/add.png`" type="button" @click="add_name" class="add_button" alt="추가"
            tabindex="-1" />
        </div>
      </div>

      <div class="app_button default_button" style="padding: 0.5em 1em; margin-top: 2em;" @click="goToResultUs">
        결과확인
      </div>

      <AppVif>
        <div class="grey_shell">
          <AdsenseInpeed slot-str="6071902330" />
        </div>
      </AppVif>

    </fieldset>
  </div>
</template>

<script>
import namelovetest from '@/assets/js/namelovetest'
import AdFit from "@/components/AdFit";
import metaConfig from '~/config/metaConfig'

// history.scrollRestoration = "manual";
export default {
  name: "NL-NameLoveUs",
  head() {
    return metaConfig.filter(menu => {
      return menu.fileNm === 'retronameloveus'
    }).pop()
  },
  components: {
    AdFit: AdFit
  },
  data() {
    return {
      name: "",
      us_name: [],
    };
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    }
  },
  methods: {
    namegetdata() {
      this.name = "";
    },
    add_name() {
      if (!namelovetest.nameValidation(this.name)) {
        return;
      }
      this.us_name.push(this.name);
      this.name = "";
      document.getElementById('name').focus();
    },
    delete_name() {
      this.us_name.pop();
    },
    goToResultUs() {
      if (this.us_name.length < 2) {
        return alert('두명 이상 입력하세요!')
      }
      this.$router.push({
        path: '/retro/test/retronameloveus/result',
        query: {
          names: this.us_name.join(',')
        }
      })
    }
  }
};
</script>
