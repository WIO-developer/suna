<template>
    <div style="margin: 0 auto; width:100vw; max-width: 1800px;">
        <img style="width:100%;" :src="storage_url + `/village/intro_marie .png`">
        <Footer style="max-width: none;" />
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
            return menu.fileNm === 'noindex'
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

        }
    },
}
</script>
  