<template>
  <div style="margin: 0 auto; width:100vw; max-width: 1800px;">
    <div>
      <HeaderVillage />
      <div>
        <div style="background:rgb(207,255,255); text-align: center;">
          <img style="height:100vh; max-width: 100%; object-fit:cover; " :src="storage_url + `/village/gif/ep2_blue.gif`">
        </div>
        <div
          style="text-align : center; line-height: 230%; margin:1em 1em 0 1em; font-family: hotel; color:white; font-size: 1em;word-break:keep-all">

          <div class="row_group normal_shell" style="text-align : center; max-width: 500px">
            <div>
              <a style="font-family: hotel; color:white; font-size: 1.5em;"
                href="https://www.instagram.com/wio.village/">
                <img class="sns_icon" :src="storage_url + `/wio/sns/instagram.png`">
              </a>
            </div>
            <div>
              <a style="font-family: hotel; color:white; font-size: 1.5em;"
                href="https://www.youtube.com/channel/UCYXJExVTEPPoy5-ZDvlmorg/">
                <img class="sns_icon" :src="storage_url + `/wio/sns/youtube.png`"></a>
            </div>
            <div>
              <a style="font-family: hotel; color:white; font-size: 1.5em;" 
              href="https://www.tiktok.com/@wio.village">
              <img class="sns_icon" :src="storage_url + `/wio/sns/tiktok.png`">
            </a>
            </div>
            <div>
              <a style="font-family: hotel; color:white; font-size: 1.5em;" 
              href="https://twitter.com/wio_village">
              <img class="sns_icon" :src="storage_url + `/wio/sns/twitter.png`">
            </a>
            </div>
            <div>
              <a style="font-family: hotel; color:white; font-size: 1.5em;"
                href="https://www.facebook.com/Wio.Village">
                <img class="sns_icon" :src="storage_url + `/wio/sns/facebook.png`">
              </a>
            </div>
          </div>
        </div>
        <div style="position: relative; text-align : center;">
          <img style="width:80%;" :src="storage_url + `/village/marie.png`">
          <nuxt-link
            style="font-family: hotel; color:white; font-size: 2em; position:absolute; top: 3em; left:1.5em; text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;"
            to="/village/intro/marie/">Marie -></nuxt-link>
        </div>

        <div>
        </div>
        <div style="position: relative;  text-align : center;">
          <img style="width:80%;" :src="storage_url + `/village/baebae.png`">
          <nuxt-link
            style="font-family: hotel; color:white; font-size: 2em; position:absolute; bottom: 3em; right:1.5em; text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;"
            to="/village/intro/baebae/">Baebae -></nuxt-link>
        </div>
      </div>
    </div>

    <Footer style="max-width: none;" />

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
  name: "village",
  head() {
    return metaConfig.filter(menu => {
      return menu.fileNm === 'village'
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
}
</script>
<style scoped>
.sns_icon {
  width: 15vw;
  max-width : 100px;
}
</style>