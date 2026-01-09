<template>
    <div style="margin: 0 auto; width:100vw; max-width: 1800px;">


        <div class="container_column">
            <!--
            <Header219 />
            -->
            <!--
        <div class="pc_row">
          <img class="pc_66" :src="storage_url + `/collection/219/1_1.jpg`">
          <div class="container_column">
            <img style="width:100%;" :src="storage_url + `/collection/219/1_2.jpg`">
            <img style="width:100%;" :src="storage_url + `/collection/219/1_3.jpg`">
            <img style="width:100%;" :src="storage_url + `/collection/219/1_4.jpg`">
          </div>
        </div>
        -->

            <section class="hero__container">
                <div class="hero__main">
                    <div class="hero">
                        <div class="hero__info">
                            <h2 class="hero__title" style="font-size:1.5em">SUNA</h2>
                            <p class="hero__sub" style="font-size:1em">WIO.COLLECTION</p>
                        </div>

                        <figure class="hero__media">
                            <video muted loop autoplay playsinline class="hero__video" preload="auto">
                                <source src="/image/home_main.mp4" type="video/mp4">
                            </video>
                        </figure>
                    </div>
                </div>

                <div class="hero__col hero__col-right"
                    style="background-image:url('/image/home_mall.jpg'); background-size: cover; background-position: center;">
                    <figure class="hero-col">
                        <a href="https://smartstore.naver.com/b219">
                            <figcaption class="hero-col-copy">
                                <small>SUNA shopping mall</small>
                                <h3>STORE</h3>
                                <p>Continue Watching</p>
                            </figcaption>
                        </a>
                    </figure>
                </div>


                <div class="hero__cols">
                    <div class="hero__col"
                        style="background-image:url('/image/home_insta.jpg'); background-size: cover; background-position: center;">
                        <figure class="hero-col">
                            <a href="https://www.instagram.com/suna.company/">
                                <figcaption class="hero-col-copy">
                                    <small>SUNA story</small>
                                    <h3>INSTAGRAM</h3>
                                    <p>Continue Watching</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>


                </div>
            </section>
            <!--
        <div class="container_column">
          <h1 style="margin: 1em 0 0 5vw; font-size:1.4em; color:black">BEST</h1>
  
          <ul class="slides mobile_ver" style="margin:1em 0">
            <div v-for="(collectionBestItemSet, index) in collectionBestItem">
              <input v-if="index == 0" type="radio" name="best-btn" :id="`best-${index}`" checked />
              <input v-else type="radio" name="best-btn" :id="`best-${index}`" />
              <li class="slide-container">
                <a :href="`https://smartstore.naver.com/twoonenine/products/` + collectionBestItemSet.naverItem"
                  class="slide slidein">
                  <img class="item_img"
                    :src="storage_url + `/collection/219/entire/` + (collectionBestItemSet.Item) + `.png`" />
                  <p style="font-size:1em; color:black; word-break: keep-all">{{ collectionBestItemSet.Name }}</p>
                  <p style="font-size:1em; color:black">{{ collectionBestItemSet.Price }}</p>
                </a>
                <div class="nav">
                  <label v-if="index - 1 < 0" for="best-4" class="prev">&#x2039;</label>
                  <label v-else :for="`best-${index - 1}`" class="prev">&#x2039;</label>
                  <label v-if="index + 1 > 4" for="best-0" class="next">&#x203a;</label>
                  <label v-else :for="`best-${index + 1}`" class="next">&#x203a;</label>
                </div>
              </li>
              <li class="nav-dots">
                <label for="best-0" class="nav-dot" id="best-dot-0"></label>
                <label for="best-1" class="nav-dot" id="best-dot-1"></label>
                <label for="best-2" class="nav-dot" id="best-dot-2"></label>
                <label for="best-3" class="nav-dot" id="best-dot-3"></label>
                <label for="best-4" class="nav-dot" id="best-dot-4"></label>
              </li>
            </div>
          </ul>
  
          <div class="container_row pc_ver" style="margin: 1em 0; width:100%; height: 20vw; position: relative;">
            <a v-for="(collectionBestItemSet, index) in collectionBestItem" class="item_a slidein"
              :style="`left:` + (index * 20) + `%;`"
              :href="`https://smartstore.naver.com/twoonenine/products/` + collectionBestItemSet.naverItem">
              <img class="item_img" :src="storage_url + `/collection/219/entire/` + (collectionBestItemSet.Item) + `.png`">
              <p style="font-size:1em; color:black; word-break: keep-all">{{ collectionBestItemSet.Name }}</p>
              <p style="font-size:1em; color:black">{{ collectionBestItemSet.Price }}</p>
            </a>
          </div>
        </div>
  
        <div class="pc_row">
          <div class="container_column pc_38">
            <img :src="storage_url + `/collection/219/2_1.jpg`">
            <img :src="storage_url + `/collection/219/2_2.jpg`">
          </div>
          <div class="container_row pc_62">
            <img style="width:36%;" :src="storage_url + `/collection/219/2_3.jpg`">
            <img style="width:64%;" :src="storage_url + `/collection/219/2_4.jpg`">
          </div>
        </div>
  
        <div class="container_column">
          <h1 style="margin: 1em 0 0 5vw; font-size:1.4em; color:black">NEW</h1>
  
          <ul class="slides mobile_ver" style="margin:1em 0">
            <div v-for="(collectionNewItemSet, index) in collectionNewItem">
              <input v-if="index == 0" type="radio" name="new-btn" :id="`new-${index}`" checked />
              <input v-else type="radio" name="new-btn" :id="`new-${index}`" />
              <li class="slide-container">
                <a :href="`https://smartstore.naver.com/twoonenine/products/` + collectionNewItemSet.naverItem"
                  class="slide slidein">
                  <img class="item_img"
                    :src="storage_url + `/collection/219/entire/` + (collectionNewItemSet.Item) + `.png`" />
                  <p style="font-size:1em; color:black; word-break: keep-all">{{ collectionNewItemSet.Name }}</p>
                  <p style="font-size:1em; color:black">{{ collectionNewItemSet.Price }}</p>
                </a>
                <div class="nav">
                  <label v-if="index - 1 < 0" for="new-4" class="prev">&#x2039;</label>
                  <label v-else :for="`new-${index - 1}`" class="prev">&#x2039;</label>
                  <label v-if="index + 1 > 4" for="new-0" class="next">&#x203a;</label>
                  <label v-else :for="`new-${index + 1}`" class="next">&#x203a;</label>
                </div>
              </li>
              <li class="nav-dots">
                <label for="new-0" class="nav-dot" id="new-dot-0"></label>
                <label for="new-1" class="nav-dot" id="new-dot-1"></label>
                <label for="new-2" class="nav-dot" id="new-dot-2"></label>
                <label for="new-3" class="nav-dot" id="new-dot-3"></label>
                <label for="new-4" class="nav-dot" id="new-dot-4"></label>
              </li>
            </div>
          </ul>
  
          <div class="container_row pc_ver" style="margin: 1em 0; width:100%; height: 20vw; position: relative;">
            <a v-for="(collectionNewItemSet, index) in collectionNewItem" class="item_a slidein"
              :style="`left:` + (index * 20) + `%;`"
              :href="`https://smartstore.naver.com/twoonenine/products/` + collectionNewItemSet.naverItem">
              <img class="item_img" :src="storage_url + `/collection/219/entire/` + (collectionNewItemSet.Item) + `.png`">
              <p style="font-size:1em; color:black; word-break: keep-all">{{ collectionNewItemSet.Name }}</p>
              <p style="font-size:1em; color:black">{{ collectionNewItemSet.Price }}</p>
            </a>
          </div>
        </div>
  
        <img style="width:100%;" :src="storage_url + `/collection/219/4.jpg`">
  
        <div class="container_column">
          <h1 style="margin: 1em 0 0 5vw; font-size:1.4em; color:black">ENTIRE</h1>
  
          <div class="entire_item">
            <a class="entire_item_a" v-for="(collectionItemSet, index) in collectionItem"
              :href="`https://smartstore.naver.com/twoonenine/products/` + collectionItemSet.naverItem">
              <img class="entire_item_img" :src="storage_url + `/collection/219/entire/` + (index + 1) + `.png`">
              <p style="font-size:0.8em; color:black; word-break: keep-all">{{ collectionItemSet.Name }}</p>
              <p style="font-size:0.8em; color:black">{{ collectionItemSet.Price }}</p>
            </a>
          </div>
        </div>
  
      </div>
        -->
            <!--
      <AppAd />
        -->
            <Footer219 style="max-width: none; background:black" />
        </div>
    </div>
</template>
<script>
import menuConfig from '@/config/webConfig'
import AdsenseContent from '@/components/AdsenseContent.vue'
import AdsenseInpeed from '@/components/AdsenseInpeed.vue'
import Footer from '@/components/Footer.vue'
import Footer219 from '@/components/Footer219.vue'
import AdFit from "@/components/AdFit"
import metaConfig from '~/config/metaConfig'
import modalView from "~/components/ModalView"
import ShareLink from "~/components/ShareLink"
import AppAd from "@/components/AppAd.vue"
import CollectionItem from "~/config/CollectionItem"

export default {
    name: "twoonenine",
    head() {
        return metaConfig.filter(menu => {
            return menu.fileNm === 'twoonenine'
        }).pop()
    },
    components: {
        Footer: Footer,
        AdsenseContent: AdsenseContent,
        AdsenseInpeed: AdsenseInpeed,
        AdFit: AdFit,
        ModalView: modalView,
        AppAd: AppAd,
        ShareLink: ShareLink,
        CollectionItem: CollectionItem,
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
            view_num: true,
            collectionItem: [],
            collectionBestItem: [],
            collectionNewItem: [],
        }
    },
    mounted() {
        this.collectionItem = CollectionItem;

        for (var i = 0; i < CollectionItem.length; i++) {
            if (CollectionItem[i].bestItem > 0) {
                this.collectionBestItem[CollectionItem[i].bestItem - 1] = CollectionItem[i];
            }
            if (CollectionItem[i].newItem > 0) {
                this.collectionNewItem[CollectionItem[i].newItem - 1] = CollectionItem[i];
            }
        }

    },
}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Varela+Round);

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0
}

body {
    font-family: sans-serif;
}

.slides {
    padding: 0;
    width: 100%;
    height: 100vw;
    display: block;
    margin: 0 auto;
    position: relative;
}

.slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

.slides input {
    display: none;
}

.slide-container {
    display: block;
}

.slide {
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    transform: translate(-100%, 0);
    text-align: center;
    transition: all .7s ease-in-out;
}

.nav label {
    width: 20%;
    height: 100%;
    display: none;
    position: absolute;

    opacity: 0.3;
    z-index: 9;
    cursor: pointer;

    transition: opacity .2s;

    color: #FFF;
    font-size: 156pt;
    text-align: center;
    line-height: 100vw;
    font-family: "Varela Round", sans-serif;
    text-shadow: 0px 0px 15px rgb(119, 119, 119);
}

.slide:hover+.nav label {
    opacity: 0.5;
}

.nav label:hover {
    opacity: 1;
}

.nav .next {
    right: 0;
}

input:checked+.slide-container .slide {
    opacity: 1;

    transform: scale(1);

    transition: opacity 1s ease-in-out;
}

input:checked+.slide-container .nav label {
    display: block;
}

.nav-dots {
    width: 100%;
    bottom: 0px;
    height: 11px;
    display: block;
    position: absolute;
    text-align: center;
}

.nav-dots .nav-dot {
    top: -5px;
    width: 11px;
    height: 11px;
    margin: 0 4px;
    position: relative;
    border-radius: 100%;
    display: inline-block;
    background-color: rgba(117, 117, 117, 0.6);
}

.nav-dots .nav-dot:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 255.8);
}


input#best-1:checked~.nav-dots label#best-dot-1,
input#best-2:checked~.nav-dots label#best-dot-2,
input#best-3:checked~.nav-dots label#best-dot-3,
input#best-4:checked~.nav-dots label#best-dot-4,
input#best-0:checked~.nav-dots label#best-dot-0,
input#new-1:checked~.nav-dots label#new-dot-1,
input#new-2:checked~.nav-dots label#new-dot-2,
input#new-3:checked~.nav-dots label#new-dot-3,
input#new-4:checked~.nav-dots label#new-dot-4,
input#new-0:checked~.nav-dots label#new-dot-0 {
    background: rgba(255, 255, 255, 0.767);
    z-index: 2;
}

.pc_66 {
    width: 66%;
}

.pc_38 {
    width: 38%;
}

.pc_62 {
    width: 62%;
}

.pc_100 {
    width: 100%;
}

.container_column {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container_row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.entire_item {
    margin: 1em 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.entire_item_a {
    width: 20%;
    height: 20vw;
    text-align: center;
    transition: 0.3s ease;
    margin: 1em 0;
}


.entire_item_img {
    width: auto;
    max-width: 95%;
    height: 80%;
    margin: auto;
    align-content: center;

}

.pc_row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.item_a {
    width: 20%;
    height: 100%;
    position: absolute;
    transition: 0.3s ease;
    text-align: center;
}

.item_img {
    width: auto;
    max-width: 95%;
    height: 80%;
    margin: auto;
    align-content: center;
}



.item_a:hover {
    transform: scale(0.9);
    z-index: 2;
}

.entire_item_a:hover {
    transform: scale(0.9);
    z-index: 2;
}

.mobile_ver {
    display: none;
}

.pc_ver {
    display: flex;
}

@keyframes slidein {
    0% {
        top: 0em;
    }

    50% {
        top: 0.5em;
    }

    100% {
        top: 0em;
    }
}

.slidein {
    animation-duration: 2.5s;
    animation-name: slidein;
    animation-iteration-count: infinite;
}

@keyframes slideout {
    0% {
        top: 0em;
    }

    50% {
        top: -0.2em;
    }

    100% {
        top: 0em;
    }
}

.slideout {
    animation-duration: 3s;
    animation-name: slideout;
    animation-iteration-count: infinite;
}

@media screen and (max-width: 900px) {
    .mobile_ver {
        display: flex;
    }

    .entire_item_a {
        width: 50%;
        text-align: center;
        height: 55vw;
    }

    .pc_ver {
        display: none;
    }

    .pc_66 {
        width: 100%;
    }

    .pc_38 {
        width: 100%;
    }

    .pc_62 {
        width: 100%;
    }

    .pc_100 {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: auto;
    }

    .pc_row {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

}

/*미디어*/
.carousel__wrap {
    margin: 48px 0;
    text-align: center;
}

.hero__container {
    display: flex;
    flex-direction: column;
}

.hero {
    display: block;
}

.hero__cols {
    display: block;
    margin: 0 auto;
    width: 100%;
}

.hero__col {
    background-color: #a7a7a7;
    margin-top: 8px;
    margin-bottom: 8px;
    position: relative;
    width: 100%;
    display: block;
    height: 150px;
}




.hero-col-copy {
    bottom: 16px;
    color: #FFFFFF;
    display: block;
    padding: 0 4%;
    position: absolute;
    z-index: 2;
}

.hero-col-copy a {
    color: #FFFFFF;
    font-size: 1em;
    line-height: 1em;
}

.hero-col-copy h3 {
    font-size: 1.5em;
    line-height: 1.5em;
    margin-bottom: 0.5em;
}

.hero-col-copy small {
    display: block;
    font-size: 0.8em;
    line-height: 0.8em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
}


.hero__info {
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 20vh;
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

.hero__media {
    background-color: #333;
    position: relative;
    width: 100%;
    display: block;
    padding-top: 80vh;
}

.hero__video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0px;
    left: 0px;
}

@media (min-width: 900px) {


    .hero__cols {
        display: flex;
        width: 100%
    }

    .hero__col {
        margin: 0;
        height: 400px;
    }

    .hero {
        display: flex;
    }

    .carousel__wrap {
        margin: 96px 0;
    }

    .hero__media {
        width: 56%
    }

    .hero__info {
        display: flex;
        text-align: left;
        width: 44%;
    }
}
</style>