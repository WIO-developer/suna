<template>
  <ins
      :class="adClass"
      :data-ad-unit="adUnit"
      :style="adStyle"
  />
</template>

<script>
function adFitLoader(url) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script')
    script.async = true

    script.onload = function () {
      document.head.removeChild(script)
      resolve()
    }

    script.onerror = function () {
      document.head.removeChild(script)
      reject()
    }

    script.src = url

    document.head.appendChild(script)
  })
}
export default {
  name: "AdFit",
  props: {
    adUnit: {
      type: String,
      required: true
    },
    adStyle: {
      type: String,
      required: false,
      default: 'display: none'
    },
    adClass: {
      type: String,
      required: false,
      default: 'kakao_ad_area'
    }
  },
  mounted() {
    let vm = this
    adFitLoader("https://t1.daumcdn.net/kas/static/ba.min.js")
        .then(() => {
          const insId = Math.random().toString(36).substr(2, 9)
          //
          // bind ad load  callback to `ad-loaded` event
          //
          window[`adfit-${insId}-onload`] = function (el) {
            vm.$emit('ad-loaded', el)
            window[`adfit-${insId}-onload`] = null
          }
          vm.$el.setAttribute('data-ad-onload', `adfit-${insId}-onload`)
          //
          // bind ad fail callback to `ad-loaded` event
          //
          window[`adfit-${insId}-onfail`] = function (el) {
            vm.$emit('ad-failed', el)
            window[`adfit-${insId}-onfail`] = null
          }
          vm.$el.setAttribute('data-ad-onfail', `adfit-${insId}-onfail`)
          // eslint-disable-next-line no-useless-catch
          try {
            window['adfit'].render(vm.$el)
          } catch (ex) {
            throw ex
          }
        })
  }
}
</script>
