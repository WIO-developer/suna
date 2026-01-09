import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    VUE_APP_SERVER_URL: process.env.VUE_APP_SERVER_URL,
    VUE_APP_STORAGE_URL: process.env.VUE_APP_STORAGE_URL,
    VUE_APP_KAKAO_AD_SERIAL: process.env.VUE_APP_KAKAO_AD_SERIAL,
    VUE_APP_DOWN_URL_ANDROID: process.env.VUE_APP_DOWN_URL_ANDROID,
    VUE_APP_DOWN_URL_IOS: process.env.VUE_APP_DOWN_URL_IOS
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'W I O',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/favicon/ms-icon-144x144.png" },
      { name: "theme-color", content: "#ffffff" },
      { name: "naver-site-verification", content: "f89136d0728206c2a43b33ac0861528970004255"}
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "57x57", href: "/favicon/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/favicon/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/favicon/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/favicon/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "/favicon/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/favicon/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/favicon/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon/android-icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
      { rel: "manifest", href: "/favicon/manifest.json" },

    ],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9011122083813788',
        async: true,
        crossorigin: 'anonymous'
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-712LB406VJ",
        async: true,
      },
      {
        src: 'https://developers.kakao.com/sdk/js/kakao.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global_modal.css',
    '~/assets/css/global_font.css',
    '~/assets/css/global_header.css',
    '~/assets/css/global_color.css',
    '~/assets/css/global_shell.css',
    '~/assets/css/global_button.css',
    '~/assets/css/global_shadow.css',
    '~/assets/css/global_footer.css',
    '~/assets/css/global.css',
    '~/assets/css/persnality.css',
    '~/assets/css/PL-PersLove.css',
    '~/assets/css/NL-NameLove.css',
    '~/assets/css/WR-WioRetro.css',
    '~/assets/css/global_service.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-gtag.js', mode: 'client' }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },
  modules: [
    ['nuxt-canonical', { baseUrl: `${process.env.VUE_APP_SERVER_URL}` }],
  
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: 8080
  }
}
