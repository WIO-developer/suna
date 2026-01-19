<template>
  <div style="padding:24px; max-width:480px; margin:0 auto;">
    <div v-if="step < questions.length">

      <div style="margin-bottom:20px;">
        {{ step + 1 }} / {{ questions.length }}
      </div>

      <div style="font-size:18px; font-weight:600; margin-bottom:20px;">
        {{ questions[step].text }}
      </div>

      <div style="display:flex; flex-direction:column; gap:12px;">
        <button
          v-for="opt in questions[step].options"
          :key="opt.value"
          @click="select(opt.value)"
          style="padding:12px; border:1px solid #ccc; border-radius:8px; background:white;"
        >
          {{ opt.label }}
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 0,
      answers: [],
      questions: [
        {
          text: "혼자 있을 때 더 에너지가 차오른다.",
          options: [
            { label: "전혀 아님", value: 0 },
            { label: "아님", value: 1 },
            { label: "맞음", value: 2 },
            { label: "매우 맞음", value: 3 }
          ]
        },
        {
          text: "업무 중 즉흥적으로 대처하는 편이다.",
          options: [
            { label: "전혀 아님", value: 0 },
            { label: "아님", value: 1 },
            { label: "맞음", value: 2 },
            { label: "매우 맞음", value: 3 }
          ]
        },
        {
          text: "아이디어보다 사실과 데이터가 우선이다.",
          options: [
            { label: "전혀 아님", value: 0 },
            { label: "아님", value: 1 },
            { label: "맞음", value: 2 },
            { label: "매우 맞음", value: 3 }
          ]
        }
      ]
    }
  },
  methods: {
    select(v) {
      this.answers.push(v)
      if (this.step < this.questions.length - 1) {
        this.step++
      } else {
        this.finish()
      }
    },
    finish() {
      const query = this.answers.join(',')
      this.$router.push(`/test1/result?answers=${query}`)
    }
  }
}
</script>
