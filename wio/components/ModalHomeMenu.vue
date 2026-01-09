<template>
    <div id="home">
        <div id="popup_menu">
            <div class="hr_shell row_group" style="margin:1em auto">
                <div> </div>
                <div>
                    <img @click="onScroll" :src="storage_url + `/icon/x.png`" style="width:1.1em; margin-right: 0.5em;" />
                </div>
            </div>


            <div class="normal_shell scdream_greyDark1_12" style="margin:2em auto 0.5em auto">
                전체서비스
            </div>

            <div class="white_shell flex_row_between_shell">

                <nuxt-link style="width:23%;" :to="`/collection/219/`">
                    <img style="width:100%;" :src="storage_url + `/collection/collection_icon.png`" />
                    <p class="scdream_greyDark_07" style="text-align: center;">콜렉션</p>
                </nuxt-link>

                <nuxt-link style="width:23%;" :to="`/village/`">
                    <img style="width:100%;" :src="storage_url + `/village/village_icon.png`" />
                    <p class="scdream_greyDark_07" style="text-align: center;">빌리지</p>
                </nuxt-link>

                <nuxt-link style="width:23%;" :to="`/personality/`">
                    <img style="width:100%;" :src="storage_url + `/pers/pers_icon.png`" />
                    <p class="scdream_greyDark_07" style="text-align: center;">퍼스널리티</p>
                </nuxt-link>

                <nuxt-link style="width:23%;" :to="`/retro/`">
                    <img style="width:100%;" :src="storage_url + `/retro/retro_icon.png`" />
                    <p class="scdream_greyDark_07" style="text-align: center;">레트로</p>
                </nuxt-link>


            </div>


            <div class="normal_shell scdream_greyDark1_12" style="margin:2em auto 0.5em auto">
                앱 추천
            </div>

            <div class="white_shell">

                <a class="normal_shell" :href="link">
                    <div class="flex_row_baseline_shell">
                        <img style="width:25%; border-radius: 10px;" :src="storage_url + `/wio/wio_app_icon.png`" />
                        <div class="flex_column_endly_shell" style="margin-left: 0.8em;">
                            <p class="scdream_greyDark_11">위오</p>
                            <p class="scdream_greyDark_09">위오 통합 서비스 앱</p>
                        </div>
                    </div>
                </a>

            </div>

            <SideFooter></SideFooter>

        </div>
        <div id="overlay_modal" @click="onScroll">
        </div>
    </div>
</template>

<script>
import Header from "~/assets/js/header";
export default {
    name: "ModalHomeMenu",
    components: {
        Header: Header
    },
    data() {
        return {
            link: process.env.VUE_APP_DOWN_URL_ANDROID,
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
        onScroll() {
            Header.onScroll()
        },
        mobileAppURL() {

            var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

            if (varUA.indexOf('android') > -1) {
                //안드로이드
                return process.env.VUE_APP_DOWN_URL_ANDROID
            } else if (varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1) {
                //IOS
                return process.env.VUE_APP_DOWN_URL_IOS

            } else {
                //아이폰, 안드로이드 외
                return process.env.VUE_APP_DOWN_URL_ANDROID
            }
        },
        isMobile() {
            var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));

            if (mobile) {
                //모바일 처리
                this.link = this.mobileAppURL()
            } else {
                //비 모바일 처리
            }

        }
    },
    mounted() {
        this.isMobile()
    }
}
</script>