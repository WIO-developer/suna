<template>
  <div class="ad_content">
     <ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-9011122083813788"
     :data-ad-slot="slotStr"></ins>
  </div>
</template>
<script>
export default{
  props:{
    slotStr : String
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