<template>
  <div class="popup">
    <h5>{{ modal_title }}</h5>
    <div class="content">
      <div id="img_share">
        <img id="kakao_share"
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="카카오 공유하기"
          @click="sendkakao" />
      </div>
      <hr id="popup_share" />
      <div id="url_share">
        <p id="textlink">{{ share_url }}</p>
        <p style="color: #3366cc" @click="copylink">복사</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShareLink",
  data() {
    return {
      share_url: "",
      app_url: "",
    };
  },
  components: {
  },
  props: {
    name: {
      type: String,
      required: true
    },
    modal_title: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    }
  },
  methods: {
    copylink() {
      let share_link = document.createElement("textarea");
      document.body.appendChild(share_link);
      share_link.value = this.share_url
      share_link.select();
      document.execCommand("copy");
      document.body.removeChild(share_link);
      alert("복사되었습니다.");
    },

    sendkakao() {
      Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: this.title,
          description: this.description,
          imageUrl: `${process.env.VUE_APP_STORAGE_URL}/images/kakaoimg/kakaoimg_${this.name}.jpg`,
          link: {
            mobileWebUrl: this.share_url,
            webUrl: this.share_url,
            iosExecutionParams: `path=${this.app_url}`,
            androidExecParams: `path=${this.app_url}`,
          }
        },
        buttons: [{
          title: '앱으로 보기',
          link: {
            iosExecutionParams: `path=${this.app_url}`,
            androidExecParams: `path=${this.app_url}`,
          },
        },
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: this.share_url,
            webUrl: this.share_url,
          },
        },
        ]
      });
    }
  },
  mounted() {
    Kakao.cleanup()
    Kakao.init(process.env.VUE_APP_KAKAO_AD_SERIAL)
    this.share_url = process.env.VUE_APP_SERVER_URL + this.url
    this.app_url = this.url.replace('?', '&');
  }
}
</script>
