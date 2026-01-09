<template>
  <ModalView v-show="isFirstPopupViewed" @close-modal="$store.commit('changePopupStatus')">
    <div id="appad">
      <h3>간편하게 앱으로 만나보세요!</h3>
      <img class="appad_img" :src="storage_url+`/wio/ad_app.jpg`">
      <div class="appad_link">
        <div class="appad_button"><a class="appad_a" :href="link">앱으로 보기</a></div>
      </div>
    </div>
  </ModalView>
</template>

<script>
export default {
  name: "AppAd",
  data() {
    return {
      link: process.env.VUE_APP_DOWN_URL_ANDROID,
      popupViewed: true
    }
  },
  computed: {
    isFirstPopupViewed() {
      return this.$device.isMobile ? this.$store.state.isFirstPopupViewed : false
    },
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    }
  },
  methods: {
    mobileAppURL() {
      /*isAndroid 코드는 모바일에서만 확인 가능*/
      let isAOS = this.$device.isAndroid
      if (isAOS) {
        return process.env.VUE_APP_DOWN_URL_ANDROID
      } else {
        return process.env.VUE_APP_DOWN_URL_IOS
      }
    }
  },
  mounted() {
    this.link = this.mobileAppURL()
  }
}
</script>

<style scoped>
* {
  font-family: 'hotel';
}

a {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
}

#appad {
  text-align: center;
  position: relative;
  z-index: 12;
  width: 70%;
  max-width: 350px;
  margin: 5% auto 0 auto;
}

.content {
  text-align: center;
}

.appad_img {
  width: 100%;
  border-radius: 20px;
  margin: 1%;
  max-height: 75vh;
}

.playstore_img {
  width: 50px;
  margin: 3% 0;
}

h3 {
  font-weight: normal;
  color: white;
}

.appad_button {
  border: 2px;
  border-color: white;
  border-radius: 15px;
  border-style: solid;
  width: 50%;
  margin: 0 auto;
}

.appad_a {
  font-weight: normal;
  color: white;
}
</style>
