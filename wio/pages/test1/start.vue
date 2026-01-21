<template>
  <div class="wrap">
    <transition name="fade" mode="out-in">
      <div v-if="step < questions.length" :key="step">

        <div class="progress">
          {{ step + 1 }} / {{ questions.length }}
        </div>

        <div class="question">
          {{ questions[step].text }}
        </div>

        <div class="options">
          <button
            v-for="opt in questions[step].options"
            :key="opt.value"
            @click="select(opt.value)"
            class="btn"
          >
            {{ opt.label }}
          </button>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 0,
      answers: [],
      questions: [
        { text: "혼자 있을 때 더 에너지가 차오른다.", options: btns() },
        { text: "업무 중 즉흥적으로 대처하는 편이다.", options: btns() },
        { text: "아이디어보다 사실과 데이터가 우선이다.", options: btns() },
        { text: "발표나 보고서를 준비할 때 구조를 먼저 잡는다.", options: btns() },
        { text: "동료와 잡담하며 풀리는 편이다.", options: btns() },
        { text: "계획보다 상황에 따라 흐름이 바뀌어도 괜찮다.", options: btns() },
        { text: "타인의 감정보다 논리를 더 중시한다.", options: btns() },
        { text: "과정보다 결과가 중요하다고 생각한다.", options: btns() },
        { text: "규칙과 절차는 지켜져야 한다고 생각한다.", options: btns() },
        { text: "회의에서 말보다 듣는 비중이 크다.", options: btns() },
        { text: "정보는 구체적이어야 편하다.", options: btns() },
        { text: "실험적으로 시도하는 걸 좋아한다.", options: btns() },
        { text: "갈등 상황에서도 직설적으로 말하는 편이다.", options: btns() },
        { text: "마감은 최소 하루 전에 끝내는 게 마음 편하다.", options: btns() },
        { text: "여러 사람을 설득하는 상황이 어렵지 않다.", options: btns() }
      ]
    }
  },
  methods: {
    select(v) {
      this.$el.classList.add('clicked')
      this.answers.push(v)

      setTimeout(() => {
        this.$el.classList.remove('clicked')
        if (this.step < this.questions.length - 1) {
          this.step++
        } else {
          this.finish()
        }
      }, 180)
    },
    finish() {
      const query = this.answers.join(',')
      this.$router.push(`/test1/result?answers=${query}`)
    }
  }
}

function btns() {
  return [
    { label: "전혀 아님", value: 0 },
    { label: "아님", value: 1 },
    { label: "맞음", value: 2 },
    { label: "매우 맞음", value: 3 }
  ]
}
</script>

<style scoped>
.wrap {
  padding: 24px;
  max-width: 480px;
  margin: 0 auto;
  font-family: sans-serif;
}

.progress {
  text-align: right;
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
}

.question {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  line-height: 1.45;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  padding: 14px;
  border: 1px solid #bbb;
  border-radius: 10px;
  background: white;
  transition: 0.18s ease;
  font-size: 15px;
}

.btn:active {
  background: #eef3ff;
  border-color: #4677ff;
  transform: scale(0.96);
}

.wrap.clicked .btn {
  pointer-events: none;
}

/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
