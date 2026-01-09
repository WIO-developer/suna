<template>
  <div id="wioretro" class="service_width">

    <RetroHeader />
    <div style="padding:0" class="wide_shell">
    <nuxt-link to="/retro/test/retronameloveus/basic/">
      <img style="width:100%;" :src="storage_url + `/metaimg/metaimg_retronameloveus.jpg`">
    </nuxt-link>
  </div>

    <AppVif>
      <div class="wioretro_adform">
        <AdsenseInpeed slot-str="6409267504" />
      </div>
    </AppVif>
    <div style="margin-top:1em" class="wide_shell">
            <div class="normal_shell">
              <div v-if="view_num">
                <span class="scdream_greyDark_12" @click="view_num=true">인기</span>
                <span class="scdream_greyLight5_12" @click="view_num=false">신규</span>
                </div>
                <div v-else >
                <span class="scdream_greyLight5_12" @click="view_num=true">인기</span>
                  <span class="scdream_greyDark_12" @click="view_num=false">신규</span>
              </div>
                
                <div style="margin:1em auto">
                      <div v-if="view_num" class="flex_row_between_shell">
                        <MainHomeImg v-for="menu in menuranklist" :key="menu.key" :name="menu.menuListOption.name"
                            :url="menu.url" :service_img="menu.menuListOption.service_img" />
                        <div style="width:30%"></div>
                      </div>
                      <div v-else class="flex_row_between_shell">
                        <MainHomeImg v-for="menu in menuretrolist" :key="menu.key" :name="menu.menuListOption.name"
                            :url="menu.url" :service_img="menu.menuListOption.service_img" />
                        <div style="width:30%"></div>
                      </div>
                </div>
            </div>
        </div>

    <Footer />

    <!--
    <AppAd />
  -->
  </div>
</template>
<script>
import menuConfig from '@/config/webConfig'
import AdsenseContent from '@/components/AdsenseContent.vue'
import AdsenseInpeed from '@/components/AdsenseInpeed.vue'
import Footer from '@/components/Footer.vue'
import AdFit from "@/components/AdFit"
import metaConfig from '~/config/metaConfig'
import modalView from "~/components/ModalView"
import ShareLink from "~/components/ShareLink"
import AppAd from "@/components/AppAd.vue"

export default {
  name: "WioRetro",
  head() {
    return metaConfig.filter(menu => {
      return menu.fileNm === 'wioretro'
    }).pop()
  },
  components: {
    Footer: Footer,
    AdsenseContent: AdsenseContent,
    AdsenseInpeed: AdsenseInpeed,
    AdFit: AdFit,
    ModalView: modalView,
    AppAd: AppAd,
    ShareLink: ShareLink
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    }
  },
  data() {
    return {
      isModalViewed: false,
      menulist: [],
      menuranklist: [],
      image_url: `${process.env.VUE_APP_STORAGE_URL}/images/kakaoimg/kakaoimg_wioretro.jpg`,
      url: `${process.env.VUE_APP_SERVER_URL}`,
      view_num: true
    }
  },
  created() {
    this.menulist = menuConfig.filter((menu) => {
      return menu.IsMain === true
    })
    // this.menuranklist = menurankConfig.filter((menu) => {
    //   return menu.IsMain === true
    // })
    this.menuretrolist = [...this.menulist]
      .filter(menu => { return menu.menuListOption.service === "레트로" })

    this.menuranklist = [...this.menuretrolist]
      .filter(menu => { return menu.priority < 6 })
      .sort((a, b) => { return a.priority - b.priority })
  }
}
</script>
