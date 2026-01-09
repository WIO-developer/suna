<template>
  <div class="ad_inpeed">
    <ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-fb+5w+4e-db+86"
      data-ad-client="ca-pub-9011122083813788" :data-ad-slot="slotStr"></ins>
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