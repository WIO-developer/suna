<template>
    <div id="home">
        <div id="popup_menu">
            <div class="hr_shell row_group" style="margin:1em auto">
                <div> </div>
                <div>
                    <img @click="onScroll" :src="storage_url + `/icon/x.png`" style="width:1.5em; margin-right: 0.5em;" />
                </div>
            </div>
            <div class="normal_shell scdream_greyDark_11" style="margin:0 auto 1em auto">
                테스트 바로가기
            </div>
            <div class="normal_shell row_group">
                <nuxt-link :to="`/personality/test/persindex/basic`" class="square_group_big">
                    <img style="width:100%; border-radius: 10px;" :src="storage_url + `/pers/menu/persindex_menu.png`" />
                </nuxt-link>

                <nuxt-link :to="`/personality/test/perslove/basic`" class="square_group_big">
                    <img style="width:100%; border-radius: 10px;" :src="storage_url + `/pers/menu/perslove_menu.png`" />
                </nuxt-link>

                <nuxt-link :to="`/personality/test/persbingo/basic`" class="square_group_big">
                    <img style="width:100%; border-radius: 10px;" :src="storage_url + `/pers/menu/persbingo_menu.png`" />
                </nuxt-link>
            </div>

            <div class="row_group normal_shell">
                <hr width="100%" style="border: solid 1px var(--greyLight-3); margin: 1em auto" />
            </div>

            <div style="line-height: 140%;">

                <div class="normal_shell scdream_greyDark_11" style="margin:0.5em auto 1em auto">
                    상세설명 바로가기
                </div>

                <div class="row_group normal_shell" style="font-size:0.9em">
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/INTJ`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>I<span class="gradient_text">NT</span>J<br><span>인티제</span></div>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/INTP`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>I<span class="gradient_text">NT</span>P<br><span>인팁</span></div>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ENTJ`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>E<span class="gradient_text">NT</span>J<br><span>엔티제</span></div>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ENTP`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>E<span class="gradient_text">NT</span>P<br><span>엔팁</span></div>
                        </div>
                    </nuxt-link>

                </div>

                <div class="row_group normal_shell" style="font-size:0.9em">
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/INFJ`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>I<span class="gradient_text">NF</span>J<br><span>인프제</span></div>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/INFP`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>I<span class="gradient_text">NF</span>P<br><span>인프피</span></div>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ENFJ`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>E<span class="gradient_text">NF</span>J<br><span>엔프제</span></div>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ENFP`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>E<span class="gradient_text">NF</span>P<br><span>엔프피</span></div>
                        </div>
                    </nuxt-link>
                </div>

                <div class="row_group normal_shell" style="font-size:0.9em">
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ISTJ`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>I<span class="gradient_text">S</span>T<span class="gradient_text">J<br></span></div>
                            <span>잇티제</span>
                        </div>
                    </nuxt-link>

                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ISFJ`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>I<span class="gradient_text">S</span>F<span class="gradient_text">J<br></span></div>
                            <span>잇프제</span>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ESTJ`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>E<span class="gradient_text">S</span>T<span class="gradient_text">J<br></span></div>
                            <span>엣티제</span>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ESFJ`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>E<span class="gradient_text">S</span>F<span class="gradient_text">J<br></span></div>
                            <span>엣프제</span>
                        </div>
                    </nuxt-link>
                </div>

                <div class="row_group normal_shell" style="font-size:0.9em">
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ISTP`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>I<span class="gradient_text">S</span>T<span class="gradient_text">P<br></span></div>
                            <span>잇팁</span>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ISFP`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>I<span class="gradient_text">S</span>F<span class="gradient_text">P<br></span></div>
                            <span>잇프피</span>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ESTP`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>E<span class="gradient_text">S</span>T<span class="gradient_text">P<br></span></div>
                            <span>엣팁</span>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="absolute_center square_group" :to="`/personality/types/ESFP`">
                        <div class="square_menu"></div>
                        <div class="square_text">
                            <div>E<span class="gradient_text">S</span>F<span class="gradient_text">P<br></span></div>
                            <span>엣프피</span>
                        </div>
                    </nuxt-link>
                </div>
            </div>

            <SideFooter/>
        </div>
        <div id="overlay_modal" @click="onScroll">
        </div>
    </div>
</template>

<script>
import Header from "~/assets/js/header";
export default {
    name: "ModalMenu",
    components: {
        Header: Header
    },
    data() {
        return {
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
    },
    mounted() {
    }
}
</script>