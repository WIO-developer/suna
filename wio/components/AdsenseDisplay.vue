<template>
  <div class="ad_display">
      <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9011122083813788"
     :data-ad-slot="slotStr"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  </div>
</template>
<script>
export default {
  props: {
    slotStr: String
  },
  mounted() {
    (window.adsbygoogle || []).push({});
  },
  updated() {
    (adsbygoogle = window.adsbygoogle || []).push({});
  },
  beforeUpdated() {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
}
</script>