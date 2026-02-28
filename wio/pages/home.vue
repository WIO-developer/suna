<template>
    <!--Copyright (c) 2023 by miranda (https://codepen.io/mirandalwashburn/pen/MWawdxr)-->
    <div>
        <div class="main">
            <section style="width:80%; position:relative;" class="card-lg__container">
                <p class="card__text-sm">"The wolrd is opportunity"</p>
                <img class="slidein" style="width:10em; position:absolute;"
                    :src="storage_url + `/wio/wio_android_splash.png`" />
                <div style="height:12em"></div>
                <p style="font-weight: 500; font-size:1.2em" class="card__text-md">꿈과 열정을 세상을 향한 기회로</p>
            </section>

            <section style="width:80%; padding-bottom: 0;" class="card-lg__container">
                <p style="word-break: keep-all;" class="card__text-sm">Service</p>
            </section>
            
            <div style="margin-top:0em" class="card__container">
                <p style="word-break: keep-all; margin-bottom: 0.5em;font-size:1.5em; text-align: center;" class="card__text-sm  left_text_900">위오는 다양한 분야에 "끊임없이" 도전합니다</p>

                <section class="card-sm__container">
                    <!--- START: CARD --->
                    <a href="https://store.suna.company/collection/219/" class="card-sm"
                        style="background-image:url('https://store.suna.company/images/collection/219/219_home_2.jpg')">
                        <h1 style="text-align:right; font-size:1.0em" class="card__text-lg">Fashion</h1>
                        <div>
                            <p class="card__text-sm">Shopping에서 Luxury까지</p>
                            <h1 class="card__text-lg">wio.collection</h1>
                        </div>
                    </a>
                    <!--- END: CARD --->

                    <!--- START: CARD --->
                    <a href="https://store.suna.company/village/" class="card-sm"
                        style="background-image: url('https://store.suna.company/images/village/wio_home.png'); background-position: center right;">
                        <h1 style="text-align:right; font-size:1.0em" class="card__text-lg">Character</h1>
                        <div>
                            <p class="card__text-sm">사랑이 넘치는 캐릭터 마을</p>
                            <h1 class="card__text-lg">wio.village</h1>
                        </div>
                    </a>
                    <!--- END: CARD --->

                    <!--- START: CARD --->
                    <a href="https://store.suna.company/" class="card-sm"
                        style="background-image: url('https://store.suna.company/images/wio/app.png')">
                        <h1 style="text-align:right; font-size:1.0em" class="card__text-lg">Service</h1>
                        <div>
                            <p class="card__text-sm">다양한 IT서비스</p>
                            <h1 class="card__text-lg">wio.dailly</h1>
                        </div>
                    </a>
                    <!--- END: CARD --->
                </section>
            </div>
            <section style="width:80%; padding-bottom: 0;" class="card-lg__container">
                <p style="word-break: keep-all;" class="card__text-sm">Value</p>
            </section>

            <section style="width:80%; margin-top:0" class="card-ds__container card__container">
                <div>
                    <p style="word-break: keep-all; font-size:1.5em" class="card__text-sm">"More Opportunities, for more
                        people."</p>
                    <h1 style="font-size:2.5em" class="card__text-lg">Opportunity</h1>
                    <p style="font-weight: 500; margin-top: 1em;  font-size:1.0em; opacity: 0.9;" class="card__text-md">"더
                        많은 사람들에게, 더 많은 기회를"</p>
                    <p style="font-weight: 500; font-size:1.0em; opacity: 0.9;" class="card__text-md">그것이 위오가 추구하는 가치입니다</p>
                </div>
                <img style="width:10em; height:fit-content; margin-top: 1em; " :src="storage_url + `/wio/wio_purple.png`" />
            </section>

            <section style="width:80%;" class="card-ds__container card__container">
                <img class="rotatein" style="width:10em; height:fit-content; margin-top: 1em; "
                    :src="storage_url + `/wio/wio_mark.png`" />
                <div class="left_900">
                    <p style="word-break: keep-all; font-size:1.5em" class="card__text-sm">"To reach out to you"</p>
                    <h1 style="font-size:2.5em" class="card__text-lg">Inspiration</h1>
                    <p style="font-weight: 500; margin-top: 1em;  font-size:1.0em; opacity: 0.9;" class="card__text-md">눈물을
                        형상화한 위오의 로고는 감정을 두드리는 다양한 컨텐츠로 영감을 전달하는 것이 목표입니다</p>
                </div>
            </section>

            <section style="width:80%;" class="card-ds__container card__container">
                <div>
                    <p style="word-break: keep-all; font-size:1.5em" class="card__text-sm">"Small inspirations and most
                        passions create opportunities."</p>
                    <h1 style="font-size:2.5em" class="card__text-lg">Passion</h1>
                    <p style="font-weight: 500; margin-top: 1em;  font-size:1.0em; opacity: 0.9;" class="card__text-md">위오는
                        노력과 끈기, 열정에 기반합니다</p>
                    <p style="font-weight: 500; font-size:1.0em; opacity: 0.9;" class="card__text-md">작은 영감과 대부분의 열정은 기회를
                        만들어냅니다</p>
                </div>
                <img style="width:10em; height:fit-content; margin-top: 1em; " :src="storage_url + `/wio/wio_smile.jpg`" />
            </section>


            <section style="width:80%;" class="card-lg__container">
                <p style="word-break: keep-all;" class="card__text-sm">Contact us</p>
                <div style="display: flex; flex-direction: row;">
                    <a href="https://instagram.com/wio.baebae/" class="card__btn">instagram</a>
                    <!--<a href="https://blog.suna.company/" class="card__btn">blog</a>-->
                </div>
            </section>

        </div>
        <div>
            <Footer style="max-width:none" />
        </div>
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
    name: "home",
    head() {
        return metaConfig.filter(menu => {
            return menu.fileNm === 'home'
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
<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
}

.main {
    background: url('https://store.suna.company/images/wio/background.png') no-repeat center;
    background-size: cover;
    box-shadow:
        inset 0 0 100vw 100vw rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    padding: 0 0 32px;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}



/*CARD*/
.card__btn {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 24px;
    font-family: scdream;
    font-size: 0.8em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 88px;
    margin: 8px 0 0;
    opacity: 0.9;
    padding: 8px;
}

.card__text-sm {
    color: #fff;
    font-family: scdream;
    font-size: 0.8em;
    margin: 0;
    padding: 16px 0 8px;
    position: relative;
}

.card__text-sm::before {
    content: "";
    background: #fff;
    height: 1px;
    width: 16px;
    position: absolute;
    top: 0;
}

.card__text-lg {
    color: #fff;
    font-family: scdream;
    font-size: 1.4em;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.2;
    width: 100%;
    margin: 0;
}

/*...large...*/
.card-lg__container {
    padding: 40px 16px 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}

.center_900 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card-lg__container .card__text-lg {
    font-family: scdream;
    font-size: 4em;
    font-weight: 400;
    letter-spacing: 1.4px;
}

.card__text-md {
    color: #fff;
    font-family: scdream;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5;
}

.card-lg__container .card__text-sm {
    font-size: 1.5em;
    transition: 0.3s ease;
}

.card-lg__container .card__text-sm::before {
    width: 24px;
    height: 2px;
}

.card__container {
    padding: 1em;
    margin-top: 1em;
    background-color: rgba(0, 0, 0, 0.2);
}

.card-sm__container {
    height: 400px;
    display: flex;
    align-self: center;
}

.card-ds__container {

    height: 250px;
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    align-self: center;
}

.card-sm {
    background-size: cover;
    background-position: center center;
    box-shadow: inset 0 0 100vw 100vw rgba(0, 0, 0, 0.3),
        0 16px 8px -8px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    width: 20vw;
    height: calc(100% - 64px);
    margin: 0 8px;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.3s ease;



}

.card-sm:hover {
    margin: -8px 8px 0;
}

.card-sm .card__text-sm {
    opacity: 0.9;
}


/*HIDE DEFAULT SCROLL BAR*/
.main::-webkit-scrollbar {
    display: none;
}

.main {
    -ms-overflow-style: none;
}

.slidein {
    animation-duration: 1.5s;
    animation-name: slidein;
    animation-iteration-count: infinite;
}

@keyframes slidein {
    0% {
        top: 6em;
    }

    50% {
        top: 6.3em;
    }

    100% {
        top: 6em;
    }
}

.rotatein {
    animation-duration: 10s;
    animation-name: rotatein;
    animation-iteration-count: infinite;
}

@keyframes rotatein {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(70deg);
    }

    100% {
        transform: rotate(0deg);
    }
}


@media screen and (max-width: 900px) {

    section.card-sm__container {
        height: unset;
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    section.card-ds__container {
        height: unset;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .card-lg__container {
        padding: 40px 16px 40px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: baseline;
    }

    .card-sm {
        width: calc(100% - 32px);
        height: 200px;
        margin: 0 0 16px;
    }

    .left_900 {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: baseline;
    }
    .left_text_900 {
        width: 80%;
        align-items: baseline;

    }

    .card-sm:hover {
        margin: 8px 0;
        transform: scale(0.9);
    }
}


@media screen and (max-width: 390px) {
    @keyframes slidein {
        0% {
            top: 8.5em;
        }

        50% {
            top: 8.8em;
        }

        100% {
            top: 8.5em;
        }
    }
}
</style>