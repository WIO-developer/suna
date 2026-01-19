<template>
  <div style="padding:24px; max-width:480px; margin:0 auto;">
    <h2>결과</h2>
    <div style="font-size:28px; margin:20px 0; font-weight:700;">
      {{ mbti }}
    </div>

    <nuxt-link to="/test1/start" style="border:1px solid #ccc; padding:10px 14px; border-radius:6px; display:inline-block;">
      다시하기
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    mbti() {
      const raw = this.$route.query.answers
      if (!raw) return "??"
      const arr = raw.split(',').map(n=>Number(n))

      let E=0,I=0,S=0,N=0,T=0,F=0,J=0,P=0

      arr.forEach((v,i)=>{
        if(i<1) v>1?E++:I++
        else if(i<2) v>1?S++:N++
        else if(i<3) v>1?T++:F++
        else v>1?J++:P++
      })

      return `${E>=I?'E':'I'}${S>=N?'S':'N'}${T>=F?'T':'F'}${J>=P?'J':'P'}`
    }
  }
}
</script>
