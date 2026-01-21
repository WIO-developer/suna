<template>
  <div style="padding:24px; max-width:540px; margin:0 auto;">
    <h2 style="font-size:20px; font-weight:700;">결과</h2>

    <!-- MBTI 메인 -->
    <div style="font-size:36px; margin:20px 0 8px; font-weight:800;">
      {{ mbti }}
    </div>

    <!-- 세부 비율형 -->
    <div style="font-size:16px; color:#666; margin-bottom:20px;">
      {{ variantLabel }}
    </div>

    <!-- 직장인 MBTI 결과 -->
    <div style="background:#f9f9f9; padding:18px; border-radius:10px; margin-bottom:24px;">
      <div style="font-size:18px; font-weight:700; margin-bottom:8px;">
        {{ jobType.label }}
      </div>
      <div style="font-size:14px; color:#555; line-height:1.5;">
        {{ jobType.desc }}
      </div>
    </div>

    <!-- MBTI 설명 (10개 중 랜덤 or 순차) -->
    <div style="margin-bottom:24px;">
      <div v-for="(t,i) in descriptions" :key="i" style="font-size:14px; margin-bottom:8px;">
        • {{ t }}
      </div>
    </div>

    <nuxt-link to="/test1/start" style="border:1px solid #ccc; padding:10px 14px; border-radius:6px; display:inline-block;">
      다시하기
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    raw() {
      return this.$route.query.answers || ""
    },
    arr() {
      return this.raw.split(',').map(n=>Number(n))
    },

    // MBTI 계산
    mbti() {
      const A = this.arr

      let E=0,I=0,S=0,N=0,T=0,F=0,J=0,P=0

      A.forEach((v,i)=>{
        if(i<8) v>1?E++:I++
        else if(i<16) v>1?S++:N++
        else if(i<24) v>1?T++:F++
        else v>1?J++:P++
      })

      return `${E>=I?'E':'I'}${S>=N?'S':'N'}${T>=F?'T':'F'}${J>=P?'J':'P'}`
    },

    // 세부비율형 구분 (INTJ-high vs INTJ-low)
    variant() {
      const mbti = this.mbti
      const counts = this.counts

      // 첫 글자 기준으로 강/약 계산
      const ratio = [
        counts[mbti[0]],
        counts[mbti[1]],
        counts[mbti[2]],
        counts[mbti[3]]
      ]

      const avg = ratio.reduce((a,b)=>a+b,0)/4

      return ratio.every(r=>r>=avg) ? 'H' : 'L' // High / Low
    },

    variantLabel() {
      return this.variant === 'H' ? '강한 유형' : '부드러운 유형'
    },

    // MBTI별 직장인 역할 매핑 (32개 중 일부 예시)
    jobType() {
      const map = {
        INTJ: {
          H: { label:"전략 설계자 (대표이사)", desc:"큰 그림을 그리고 구조를 설계하며 시스템을 만든다." },
          L: { label:"혁신 기획자 (전략기획실)", desc:"리스크를 조정하며 현실화하는 전략가 성향" }
        },
        ENTP: {
          H: { label:"신사업 개척자 (혁신센터)", desc:"새로운 영역을 뚫고 방향을 제시하며 조직을 흔든다." },
          L: { label:"프레임 메이커 (브랜드전략)", desc:"아이디어를 현실적인 대안으로 정제한다." }
        }
        // 나머지 30개 너가 말한 대기업 조직도 트리대로 채우면 됨
      }

      const m = this.mbti
      return map[m]?.[this.variant] || { label: m, desc:"준비중" }
    },

    // MBTI별 설명 (10개씩 넣기)
    descriptions() {
      const base = {
        INTJ: [
          "정보를 구조화하고 미래를 설계한다.",
          "독립적으로 문제를 해결하는 것을 선호한다.",
          "감정보다 논리 기반 의사결정을 선호한다.",
          "장기 관점을 유지하며 일관성을 중시한다.",
          "시스템과 프로세스를 고도화하는 편이다.",
          "몰입력이 높고 한 번 시작하면 끝을 본다.",
          "비효율을 참지 못한다.",
          "인간관계는 선택적으로 운영한다.",
          "혼자 있어도 크게 괴롭지 않다.",
          "위계보다 역량 기반 협업을 선호한다."
        ],
        ENTP: [
          "새로운 시도를 주저하지 않는다.",
          "문제를 다양한 각도에서 재해석한다.",
          "기존 질서를 의심하고 바꾼다.",
          "말로 설득하는 능력이 있다.",
          "학습 속도가 빠르다.",
          "지루함을 못 참는다.",
          "시작은 잘하지만 끝은 선택적으로 한다.",
          "권위적 환경을 싫어한다.",
          "개념 놀이를 즐긴다.",
          "규칙을 바꾸는 데서 재미를 느낀다."
        ]
      }
      return base[this.mbti] || []
    },

    // 각 축 count 계산
    counts() {
      const A = this.arr
      let c = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0}

      A.forEach((v,i)=>{
        if(i<8) v>1?c.E++:c.I++
        else if(i<16) v>1?c.S++:c.N++
        else if(i<24) v>1?c.T++:c.F++
        else v>1?c.J++:c.P++
      })

      return c
    }
  }
}
</script>
