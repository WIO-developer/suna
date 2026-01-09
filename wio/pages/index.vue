<template>
    <div class="service_width">

        <HomeHeader />

        <div class="normal_shell" style="margin-top: 5em; width:90%">
            <img style="width:35%;" :src="storage_url + `/wio/wio_black_logotext.png`" />
        </div>
        <div style="position: relative; height: 8em; margin-bottom: 0.1em;">
            <div class="normal_shell"
                style="position: absolute; top: 0; left: 0; right: 0; z-index: 9; border-radius: 10px; background: white; border: solid rgb(109, 109, 109) 2px; margin: 0 auto 0.8em auto; padding: 1em">
                <p class="scdream_greyDark_12">테스트</p>
                <!--인기 접힌상태-->
                <div v-show="showLinks">
                    <MainHomeLink v-for="(menu, index) in menuranklist" :key="menu.key"
                        :rank_img="`/icon/rank_` + (index + 1) + `.png`" :name="menu.menuListOption.name"
                        :service="menu.menuListOption.service" :url="menu.url"
                        :service_logo="menu.menuListOption.service_logo" v-show="index === currentKeywordIndex" />
                    <div style="display:flex; justify-content: center;" @click="toggleLinks">
                        <img style="width:1.2em;" :src="storage_url + `/icon/down_arrow.png`" />
                    </div>
                </div>
                <!--인기 펼쳐진 상태-->

                <div v-show="!showLinks">
                    <MainHomeLink v-for="(menu, index) in menuranklist" :key="menu.key"
                        :rank_img="`/icon/rank_` + (index + 1) + `.png`" :name="menu.menuListOption.name"
                        :service="menu.menuListOption.service" :url="menu.url"
                        :service_logo="menu.menuListOption.service_logo" />

                    <div style="display:flex; justify-content: center;" @click="toggleLinks">
                        <img style="width:1.2em;" :src="storage_url + `/icon/up_arrow.png`" />
                    </div>
                </div>
            </div>
        </div>

        <div class="normal_shell" style="width:90%; margin-bottom: 2em;">
            <nuxt-link style="width:100%; display:flex; justify-content: right;" to="/collection/219/">
                <img style="width:75%;" :src="storage_url + `/mainhomead/mainhomead.png`" />
            </nuxt-link>
        </div>

        <div class="white_shell flex_row_between_shell" style="margin-bottom: 4em;">
            <nuxt-link style="width:18%;" :to="`/collection/219/`">
                <img style="width:100%;" :src="storage_url + `/collection/collection_icon.png`" />
                <p class="scdream_greyDark_07" style="text-align: center;">콜렉션</p>
            </nuxt-link>

            <nuxt-link style="width:18%;" :to="`/village/`">
                <img style="width:100%;" :src="storage_url + `/village/village_icon.png`" />
                <p class="scdream_greyDark_07" style="text-align: center;">빌리지</p>
            </nuxt-link>

            <nuxt-link style="width:18%;" :to="`/personality/`">
                <img style="width:100%;" :src="storage_url + `/pers/pers_icon.png`" />
                <p class="scdream_greyDark_07" style="text-align: center;">퍼스널리티</p>
            </nuxt-link>

            <nuxt-link style="width:18%;" :to="`/retro/`">
                <img style="width:100%;" :src="storage_url + `/retro/retro_icon.png`" />
                <p class="scdream_greyDark_07" style="text-align: center;">레트로</p>
            </nuxt-link>
        </div>

        <!--광고-->
        <AppVif>
            <div class="normal_shell">
                <AdsenseInpeed slot-str="6469048657" />
            </div>
        </AppVif>

        <AppVifReverse>
            <div style="height: 7em;"></div>
        </AppVifReverse>


        <!--신규-->
        <div class="white_shell">
            <p class="scdream_greyDark_12">신규</p>
            <div style="margin: 1em auto;">
                <MainHomeLink v-for="menu in menunewlist" :key="menu.key" rank_img="/icon/new_red.png"
                    :name="menu.menuListOption.name" :service="menu.menuListOption.service" :url="menu.url"
                    :service_logo="menu.menuListOption.service_logo" />
            </div>
        </div>

        <!--콜렉션-->
        <div style="margin-top:1em; background-image: URL(https://wiodaily.com/images/collection/219/219_home_2.jpg); background-size : cover; background-position: center;"
            class="wide_shell">
            <div class="normal_shell">
                <div class="flex_row_between_shell" style="align-items: center;">
                    <p style="color:white" class="scdream_greyDark_12">콜렉션</p>
                    <nuxt-link to="/collection/219/" style="width:1.8em; height: 1.8em;">
                        <img style="width:100%;" :src="storage_url + `/collection/collection_icon.png`" />
                    </nuxt-link>
                </div>

                <div style="height:18em;"></div>

                <nuxt-link to="/collection/219/" class="flex_row_between_shell"
                    style="align-items: center; margin:1.5em auto 1em auto">
                    <p style="color:white" class="scdream_greyDark_11">TWOONENINE | 219</p>
                    <img style="height:1.2em;" :src="storage_url + `/icon/white_right_arrow.png`" />
                </nuxt-link>
            </div>
        </div>

        <!--빌리지-->
        <div style="margin-top:1em;height: auto; background-image: URL(https://wiodaily.com/images/village/wio_home.png); background-size : cover; background-position: center;"
            class="wide_shell">
            <div class="normal_shell">
                <div class="flex_row_between_shell" style="align-items: center;">
                    <p class="scdream_greyDark_12">빌리지</p>
                    <nuxt-link to="/village/" style="width:1.8em; height: 1.8em;">
                        <img style="width:100%;" :src="storage_url + `/village/village_icon.png`" />
                    </nuxt-link>
                </div>

                <div style="height:18em;"></div>

                <nuxt-link to="/village/" class="flex_row_between_shell"
                    style="align-items: center; margin:1.5em auto 1em auto">
                    <p class="scdream_greyDark_11">배배&마리</p>
                    <img style="height:1.2em;" :src="storage_url + `/icon/right_arrow.png`" />
                </nuxt-link>
            </div>
        </div>


        <!--퍼스널리티-->
        <div style="margin-top:1em" class="wide_shell">
            <div class="normal_shell">
                <div class="flex_row_between_shell" style="align-items: center;">
                    <p class="scdream_greyDark_12">퍼스널리티</p>
                    <nuxt-link to="/personality/" style="width:1.8em; height: 1.8em;">
                        <img style="width:100%;" :src="storage_url + `/pers/pers_icon.png`" />
                    </nuxt-link>
                </div>
                <div style="margin:1em auto">
                    <div class="flex_row_between_shell">
                        <MainHomeImg v-for="menu in menuperslist" :key="menu.key" :name="menu.menuListOption.name"
                            :url="menu.url" :service_img="menu.menuListOption.service_img" />
                    </div>
                </div>
                <nuxt-link to="/personality/" class="flex_row_between_shell"
                    style="align-items: center; margin:1.5em auto 1em auto">
                    <p class="scdream_greyDark_11">성격유형 전체보기</p>
                    <img style="height:1.2em;" :src="storage_url + `/icon/right_arrow.png`" />
                </nuxt-link>
            </div>
        </div>

        <!--레트로-->
        <div style="margin-top:1em" class="wide_shell">
            <div class="normal_shell">
                <div class="flex_row_between_shell" style="align-items: center;">
                    <p class="scdream_greyDark_12">레트로</p>
                    <nuxt-link to="/retro/" style="width:1.8em; height: 1.8em;">
                        <img style="width:1.8em;" :src="storage_url + `/retro/retro_icon.png`" />
                    </nuxt-link>
                </div>
                <div style="margin:1em auto">
                    <div class="flex_row_between_shell">
                        <MainHomeImg v-for="menu in menuretrolist" :key="menu.key" :name="menu.menuListOption.name"
                            :url="menu.url" :service_img="menu.menuListOption.service_img" />
                        <div style="width:30%"></div>
                    </div>
                </div>
            </div>
        </div>

        <!--전체서비스-->
        <div style="margin-top:1em" class="white_shell">
            <p class="scdream_greyDark_12">전체서비스</p>
            <div style="margin: 1em auto;">
                <nuxt-link to="/collection/219/" class="normal_shell">
                    <div class="flex_row_between_shell" style="align-items: center; margin:1em auto">
                        <div class="flex_row_baseline_shell">
                            <img style="width:3em; border-radius: 10px;" :src="storage_url + `/collection/collection_icon.png`" />
                            <div class="flex_column_endly_shell" style="margin-left: 0.8em;">
                                <p class="scdream_greyDark_09">위오콜렉션</p>
                                <p class="scdream_greyDark_11">위오의 패션 브랜드</p>
                            </div>
                        </div>
                        <img style="height:1.2em;" :src="storage_url + `/icon/right_arrow.png`" />
                    </div>
                </nuxt-link>
                <nuxt-link to="/village/" class="normal_shell">
                    <div class="flex_row_between_shell" style="align-items: center; margin:1em auto">
                        <div class="flex_row_baseline_shell">
                            <img style="width:3em; border-radius: 10px;" :src="storage_url + `/village/village_icon.png`" />
                            <div class="flex_column_endly_shell" style="margin-left: 0.8em;">
                                <p class="scdream_greyDark_09">위오빌리지</p>
                                <p class="scdream_greyDark_11">위오의 자식들</p>
                            </div>
                        </div>
                        <img style="height:1.2em;" :src="storage_url + `/icon/right_arrow.png`" />
                    </div>
                </nuxt-link>
                <nuxt-link to="/personality/" class="normal_shell">
                    <div class="flex_row_between_shell" style="align-items: center; margin:1em auto">
                        <div class="flex_row_baseline_shell">
                            <img style="width:3em; border-radius: 10px;" :src="storage_url + `/pers/pers_icon.png`" />
                            <div class="flex_column_endly_shell" style="margin-left: 0.8em;">
                                <p class="scdream_greyDark_09">위오퍼스널리티</p>
                                <p class="scdream_greyDark_11">성격유형 서비스</p>
                            </div>
                        </div>
                        <img style="height:1.2em;" :src="storage_url + `/icon/right_arrow.png`" />
                    </div>
                </nuxt-link>
                <nuxt-link to="/retro/" class="normal_shell">
                    <div class="flex_row_between_shell" style="align-items: center; margin:1em auto">
                        <div class="flex_row_baseline_shell">
                            <img style="width:3em; border-radius: 10px;" :src="storage_url + `/retro/retro_icon.png`" />
                            <div class="flex_column_endly_shell" style="margin-left: 0.8em;">
                                <p class="scdream_greyDark_09">위오레트로</p>
                                <p class="scdream_greyDark_11">복고감성 서비스</p>
                            </div>
                        </div>
                        <img style="height:1.2em;" :src="storage_url + `/icon/right_arrow.png`" />
                    </div>
                </nuxt-link>
                
            </div>
        </div>

        <!--블로그-->
        <div class="white_shell" style="margin-top:1em">
            <a href="https://blog.wiodaily.com" class="flex_row_between_shell" style="align-items: center; margin:1em auto">

                <p class="scdream_greyDark_12">WIO 블로그</p>
                <img style="height:1.2em;" :src="storage_url + `/icon/right_arrow.png`" />

            </a>
        </div>

        <Footer />

        <!--
        <AppCacheDelete />
        <AppVif>
            <AppAd />
        </AppVif>
        -->
    </div>
</template>
<script>
import metaConfig from '~/config/metaConfig'
import menuConfig from '~/config/webConfig'
import AdsenseInpeed from "@/components/AdsenseInpeed";
import Footer from "@/components/Footer";
import MainHomeLink from "@/components/MainHomeLink"
import MainHomeImg from "@/components/MainHomeImg"


export default {
    name: "wio",
    head() {
        return metaConfig
            .filter((menu) => {
                return menu.fileNm === "wio";
            })
            .pop();
    },
    components: {
        AdsenseInpeed: AdsenseInpeed,
        Footer: Footer,
        MainHomeLink: MainHomeLink,
        MainHomeImg: MainHomeImg,
        menuConfig: menuConfig,
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
            showLinks: true,
            menulist: [],
            menuranklist: [],
            currentKeywordIndex: 0,

        }
    },
    methods: {
        toggleLinks() {
            this.showLinks = !this.showLinks;
        }
    },
    created() {
        this.menulist = menuConfig.filter((menu) => {
            return menu.IsMain === true
        })
        // this.menuranklist = menurankConfig.filter((menu) => {
        //   return menu.IsMain === true
        // })
        this.menuperslist = [...this.menulist]
            .filter(menu => { return menu.menuListOption.service === "퍼스널리티" })

        this.menuretrolist = [...this.menulist]
            .filter(menu => { return menu.menuListOption.service === "레트로" })

        this.menunewlist = [...this.menulist]
            .filter(menu => { return menu.new === true })

        this.menuranklist = [...this.menulist]
            .filter(menu => { return menu.priority < 6 })
            .sort((a, b) => { return a.priority - b.priority })

        setInterval(() => {
            this.currentKeywordIndex++;
            if (this.currentKeywordIndex >= 5) {
                this.currentKeywordIndex = 0;
            }
        }, 2000);
    },
    mounted() {

    }
}
</script>
