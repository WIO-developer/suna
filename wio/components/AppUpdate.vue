<template>
  <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
    <div id="appad">
      <h3>새로운 버전이 출시됐어요!</h3>
      <img class="appad_img" :src="storage_url + `/wio/update_app.jpg`">
      <a class="appad_button" :href="link">
        <p>스토어 바로가기</p>
      </a>
    </div>
  </ModalView>
</template>

<script>

export default {
  name: "AppAd",
  data() {
    return {
      link: process.env.VUE_APP_DOWN_URL_ANDROID,
      isModalViewed: false,
    }
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    }
  },
  methods: {
    mobileAppURL() {
      var varUA = navigator.userAgent.toLowerCase();
      if (varUA.indexOf('android') > -1) {
        return process.env.VUE_APP_DOWN_URL_ANDROID
      } else {
        return process.env.VUE_APP_DOWN_URL_IOS
      }
    },
    setBuildNumber(buildNumber) {
      if (buildNumber < "1010101") {
        this.isModalViewed = true
      }
    }
  },
  mounted() {
    let useragent= navigator.userAgent
    this.link = this.mobileAppURL()
    this.setBuildNumber(useragent.substr(useragent.indexOf('WIO')+3,useragent.length))
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
  font-weight: normal;
  color: white;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 2% 4%;
  padding: 1%;
  font-size: 1.2em;
}
</style>
