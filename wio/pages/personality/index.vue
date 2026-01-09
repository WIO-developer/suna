<template>
    <div class="service_width">

        <PersHeader />
        <div class="inner_shell margin_40" style="margin-top:4em">
            <div class="row_group margin_40">
                <div class="hotel_persDark_11 padding_02" style="white-space:nowrap; color:var(--greyDark)">테스트</div>
                <hr width="100%" style="border: solid 1px var(--greyDark); margin:auto 0">
            </div>
            <div class="wrap-vertical">
                <div class="scroll_row_group">
                    <div class="absolute_center square_group_big">
                        <div class="scroll_square outer_long_shadow">
                            <img class="square_img" :src="storage_url + `/kakaoimg/kakaoimg_persindex.jpg`" />
                            <div style="padding:1em; ">
                                <p style="margin-bottom: 0.7em;font-weight: 600;" class="scdream_greyLight5_08">
                                    성격유형 테스트
                                </p>
                                <P class="hotel_greyDark_10" style="white-space: normal;line-height: 140%;">
                                    난 몇 퍼센트 ENFP일까?</p>
                                <p class="hotel_greyDark_09">내 성격은 얼마나 뚜렷할까?</P>
                                <nuxt-link to="/personality/test/persindex/basic" class="app_button default_button" style="margin:1em auto 0 auto; background: var(--persGradient); color:var(--greyLight-0);
                                font-size:1.1em; padding:0.4em 0">
                                    바로가기
                                </nuxt-link>
                            </div>
                        </div>
                    </div>

                    <div class="absolute_center square_group_big">
                        <div class="scroll_square outer_long_shadow">
                            <img class="square_img" :src="storage_url + `/kakaoimg/kakaoimg_perslove.jpg`" />
                            <div style="padding:1em; ">
                                <p style="margin-bottom: 0.7em;font-weight: 600;" class="scdream_greyLight5_08">
                                    성격궁합 테스트
                                </p>
                                <P class="hotel_greyDark_10" style="white-space: normal;line-height: 140%;">
                                    우리 궁합은 몇 퍼센트?</p>
                                <p class="hotel_greyDark_09">파국궁합? 인생궁합?</P>
                                <nuxt-link to="/personality/test/perslove/basic" class="app_button default_button" style="margin:1em auto 0 auto; background: var(--persloveGradient); color:var(--greyLight-0);
                                font-size:1.1em; padding:0.4em 0">
                                    바로가기
                                </nuxt-link>
                            </div>
                        </div>
                    </div>

                    <div class="absolute_center square_group_big">
                        <div class="scroll_square outer_long_shadow">
                            <img class="square_img" :src="storage_url + `/kakaoimg/kakaoimg_persbingo.jpg`" />
                            <div style="padding:1em; ">
                                <p style="margin-bottom: 0.7em;font-weight: 600;" class="scdream_greyLight5_08">
                                    성격빙고 게임
                                </p>
                                <P class="hotel_greyDark_10" style="white-space: normal;line-height: 140%;">
                                    난 몇 빙고일까? 빙고!</p>
                                <p class="hotel_greyDark_09">맞는 설명을 클릭해보세요!</P>
                                <nuxt-link to="/personality/test/persbingo/basic" class="app_button default_button" style="margin:1em auto 0 auto; background: var(--persbingoGradient); color:var(--greyLight-0);
                                font-size:1.1em; padding:0.4em 0">
                                    바로가기
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AppVif>
            <div class="inner_shell">
                <div class="outer_shell" style="width: auto; margin: 2% 0">
                    <AdsenseInpeed slot-str="8293068506" />
                </div>
            </div>
        </AppVif>

        <div class="inner_shell margin_40">
            <div class="row_group margin_40">
                <div class="hotel_persDark_11 padding_02" style="white-space:nowrap; color:var(--greyDark)">상세설명
                </div>
                <hr width="100%" style="border: solid 1px var(--greyDark); margin:auto 0">
            </div>
            <p class="hotel_greyDark1_09">X<span class="gradient_text">NT</span>X</p>
            <div class="row_group">
                <nuxt-link class="absolute_center square_group" to="/personality/types/INTJ">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>I<span class="gradient_text">NT</span>J<br><span>인티제</span></div>
                    </div>
                </nuxt-link>
                <nuxt-link class="absolute_center square_group" to="/personality/types/INTP">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>I<span class="gradient_text">NT</span>P<br><span>인팁</span></div>
                    </div>
                </nuxt-link>
                <nuxt-link class="absolute_center square_group" to="/personality/types/ENTJ">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>E<span class="gradient_text">NT</span>J<br><span>엔티제</span></div>
                    </div>
                </nuxt-link>
                <nuxt-link class="absolute_center square_group" to="/personality/types/ENTP">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>E<span class="gradient_text">NT</span>P<br><span>엔팁</span></div>
                    </div>
                </nuxt-link>

            </div>
            <p class="hotel_greyDark1_09">X<span class="gradient_text">NF</span>X</p>
            <div class="row_group">

                <nuxt-link class="absolute_center square_group" to="/personality/types/INFJ">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>I<span class="gradient_text">NF</span>J<br><span>인프제</span></div>
                    </div>
                </nuxt-link>
                <nuxt-link class="absolute_center square_group" to="/personality/types/INFP">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>I<span class="gradient_text">NF</span>P<br><span>인프피</span></div>
                    </div>
                </nuxt-link>
                <nuxt-link class="absolute_center square_group" to="/personality/types/ENFJ">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>E<span class="gradient_text">NF</span>J<br><span>엔프제</span></div>
                    </div>
                </nuxt-link>
                <nuxt-link class="absolute_center square_group" to="/personality/types/ENFP">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>E<span class="gradient_text">NF</span>P<br><span>엔프피</span></div>
                    </div>
                </nuxt-link>
            </div>
            <p class="hotel_greyDark1_09">X<span class="gradient_text">S</span>X<span class="gradient_text">J</span></p>
            <div class="row_group">
                <nuxt-link class="absolute_center square_group" to="/personality/types/ISTJ">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>I<span class="gradient_text">S</span>T<span class="gradient_text">J<br></span></div>
                        <span>잇티제</span>
                    </div>
                </nuxt-link>

                <nuxt-link class="absolute_center square_group" to="/personality/types/ISFJ">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>I<span class="gradient_text">S</span>F<span class="gradient_text">J<br></span></div>
                        <span>잇프제</span>
                    </div>
                </nuxt-link>
                <nuxt-link class="absolute_center square_group" to="/personality/types/ESTJ">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>E<span class="gradient_text">S</span>T<span class="gradient_text">J<br></span></div>
                        <span>엣티제</span>
                    </div>
                </nuxt-link>
                <nuxt-link class="absolute_center square_group" to="/personality/types/ESFJ">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>E<span class="gradient_text">S</span>F<span class="gradient_text">J<br></span></div>
                        <span>엣프제</span>
                    </div>
                </nuxt-link>
            </div>
            <p class="hotel_greyDark1_09">X<span class="gradient_text">S</span>X<span class="gradient_text">P</span></p>
            <div class="row_group">
                <nuxt-link class="absolute_center square_group" to="/personality/types/ISTP">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>I<span class="gradient_text">S</span>T<span class="gradient_text">P<br></span></div>
                        <span>잇팁</span>
                    </div>
                </nuxt-link>
                <nuxt-link class="absolute_center square_group" to="/personality/types/ISFP">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>I<span class="gradient_text">S</span>F<span class="gradient_text">P<br></span></div>
                        <span>잇프피</span>
                    </div>
                </nuxt-link>
                <nuxt-link class="absolute_center square_group" to="/personality/types/ESTP">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>E<span class="gradient_text">S</span>T<span class="gradient_text">P<br></span></div>
                        <span>엣팁</span>
                    </div>
                </nuxt-link>
                <nuxt-link class="absolute_center square_group" to="/personality/types/ESFP">
                    <div class="square outer_long_shadow"></div>
                    <div class="square_text">
                        <div>E<span class="gradient_text">S</span>F<span class="gradient_text">P<br></span></div>
                        <span>엣프피</span>
                    </div>
                </nuxt-link>
            </div>
        </div>
        <Footer type="wiopers" />
        <AppAd />
        
    </div>
</template>
<script>
import metaConfig from '~/config/metaConfig'
import AdsenseInpeed from "@/components/AdsenseInpeed";
import Footer from "@/components/Footer";


export default {
    name: "PE-PersApp",
    head() {
        return metaConfig
            .filter((menu) => {
                return menu.fileNm === "wiopers";
            })
            .pop();
    },
    components: {
        AdsenseInpeed: AdsenseInpeed,
        Footer: Footer,
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
    methods: {

    },
    mounted() {
        const slider = document.querySelector('.wrap-vertical');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', e => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            slider.scrollLeft = scrollLeft - walk;
        });
    }
}
</script>
