<template>
    <div>
        <section class="hero__container">
            <div class="hero__main">
                <div class="hero">
                    <div class="hero__info">
                        <h2 class="hero__title">LOVE IS LIFE</h2>
                        <p class="hero__sub">with TWOONENINE</p>
                    </div>

                    <figure class="hero__media">
                        <video muted="" loop="" autoplay="" playsinline="" class="hero__video" preload="auto">
                            <source
                                :src="storage_url + `/collection/home_main.mp4`"
                                type="video/mp4">
                        </video>
                    </figure>
                </div>
            </div>

            <div class="hero__cols">
                <div class="hero__col">
                    <figure class="hero-col">
                        <figcaption class="hero-col-copy">
                            <small>Last Watched</small>
                            <h3>The Parts Of The Electric Guitar</h3>
                            <a href="">Continue Watching</a>
                        </figcaption>
                    </figure>
                </div>

                <div class="hero__col hero__col-right">
                    <figure class="hero-col">
                        <figcaption class="hero-col-copy">
                            <small>Last Watched</small>
                            <h3>The Parts Of The Electric Guitar</h3>
                            <a href="">Continue Watching</a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>

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
    created() {
    },
    mounted() {

    }
}
</script>
<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0
}

body {
    font-family: sans-serif;
}

.carousel__wrap {
    margin: 48px 0;
    text-align: center;

    @media (min-width: 1024px) {
        margin: 96px 0;
    }
}

.hero__container {
    display: flex;
    flex-direction: column;
}

.hero {
    display: block;

    @media (min-width: 1024px) {
        display: flex;
    }
}

.hero__cols {
    display: block;
    margin: 0 auto;
    width: 91.5%;

    @media (min-width: 1024px) {
        display: flex;
        width: 100%
    }

    @media (min-width: 1440px) {
        flex-grow: 1;
    }
}

.hero__col {
    background-color: #a7a7a7;
    margin-top: 16px;
    position: relative;
    width: 100%;

}

.hero__col:before {
        content: "";
        display: block;
        padding-top: 55.50%;
    }

    .hero__col-right {
        background-color: #777;
    }

    @media (min-width: 1024px) {
        .hero__col {
        margin: 0;
    }
    }

.hero-col-copy {
    bottom: 16px;
    color: #FFFFFF;
    display: block;
    padding: 0 4%;
    position: absolute;

}

.hero-col-copy a {
        color: #FFFFFF;
        font-size: 16px;
        line-height: 16px;
    }

    .hero-col-copy h3 {
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 8px;
    }

    .hero-col-copy small {
        display: block;
        font-size: 12px;
        line-height: 24px;
        margin-bottom: 8px;
        text-transform: uppercase;
    }

    @media (min-width: 1024px) {
        .hero-col-copy {
            bottom: 32px;
        padding: 0 32px;
        }
    }

.hero__info {
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 234px;
    padding: 0 4%;
    text-align: center;
    width: 100%;

    
}

.hero__info h2 {
        font-size: 42px;
        line-height: 50px;
        margin-bottom: 8px;
    }

    .hero__info p {
        font-size: 16px;
        line-height: 20px;
    }

    @media (min-width: 1024px) {
        .hero__info {
        display: flex;
        text-align: left;
        width: 44%;
        }
    }

    @media (min-width: 1728px) {

        .hero__info h2 h2 {
            font-size: 48px;
            line-height: 56px;
        }
    }

.hero__media {
    background-color: #333;
    position: relative;
    width: 100%;



}

.hero__media:before {
    content: "";
    display: block;
    padding-top: 150%;
}

@media (min-width: 1024px) {
    .hero__media {
        width: 56%
    }
}

.hero__video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0px;
    left: 0px;
}
</style>