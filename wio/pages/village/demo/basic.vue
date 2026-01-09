<template>
  <div class="service_width" style="height: 100%">

    <header id="header" style="background:white">
      <div class="flex_row_between_shell" style="align-items: center; height: 100%; display: flex;">
        <div style="margin-left: 1em; align-items: center;" class="flex_row_baseline_shell">
          <nuxt-link style="width:2.4em; height: 2.4em;" to="/">
            <img style="width:2.4em; height: 2.4em" :src="storage_url + `/wio/wio_sub_black_logo.png`" />
          </nuxt-link>
          <nuxt-link style="margin-left: 0.2em;" to="/village">
            <p class="scdream_greyDark_12">빌리지</p>
          </nuxt-link>
        </div>
      </div>
    </header>

    <div style="text-align: center;">
      <img style="margin-top: 3em; height: 50vh; max-width:550px" :src="storage_url + `/test/testbaebae2.gif`">
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">

<!--      <div v-for="(question, index) in showQuestionList">-->
<!--        <div style="display: flex; gap: 10px; padding: 17px 10px; align-items: center; justify-content: space-between;">-->
<!--          <div class="answer" @click="(e) => onClickAnswer(e, index, question.answerPoint)"-->
<!--               :style="{backgroundColor: answerPointList[index] > 0 ? '#666666' : ''}">-->
<!--            {{question.tAnswer}}</div>-->
<!--          <div class="answer" @click="(e) => onClickAnswer(e, index, question.answerPoint * -1)"-->
<!--               :style="{backgroundColor: answerPointList[index] < 0 ? '#666666' : ''}"-->
<!--               >-->
<!--            {{question.fAnswer}}</div>-->
<!--        </div>-->
<!--      </div>-->
      <div v-if="isTAnswerFirst == 0">
        <div class="button-container">
          <button class="answer" @click="onClickAnswer2(showQuestionList.length-1, 1)">
           T {{showQuestionList[showQuestionList.length-1].tAnswer}}</button>
          <button class="answer" @click="onClickAnswer2(showQuestionList.length-1, -1)">
            {{showQuestionList[showQuestionList.length-1].fAnswer}}</button>
        </div>
      </div>
      <div v-else>
        <div class="button-container">
          <button class="answer" @click="onClickAnswer2(showQuestionList.length-1, -1)">
            F {{showQuestionList[showQuestionList.length-1].fAnswer}}</button>
          <button class="answer" @click="onClickAnswer2(showQuestionList.length-1, 1)">
            {{showQuestionList[showQuestionList.length-1].tAnswer}}</button>
        </div>
      </div>
      <div>테스트 완료까지: {{ answerPointList.length+ '/' + questionList.length }}</div>
      <progress id="progress" :value=progress_rate max="100"></progress>

    </div>
  </div>
</template>
<script>
import metaConfig from "~/config/metaConfig";
import FTAnswers from "~/config/FTAnswers.js";
import persindex from "~/assets/js/persindex";

export default {
  name: "persindex",
  head() {
    return metaConfig
      .filter((menu) => {
        return menu.fileNm === "noindex";
      })
      .pop();
  },
  components: {
    persindex: persindex,
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`;
      },
    },
    basic_url: {
      get() {
        return "/personality/test/persindex/basic/"
      }
    },
    progress_rate: {
      get() {
        return Math.floor(this.answerPointList.length/ this.questionList.length * 100)
      }

    }
  },
  data() {
    return {
      questionList: FTAnswers,
      showQuestionList : [],
      answerPointList : [],
      isTAnswerFirst: true
    };
  },
  methods: {
    // onClickAnswer(e, index, answerPoint) {
    //   this.answerPointList.splice(index, 1, answerPoint);
    //   if(this.answerPointList.length == index+1 && this.showQuestionList.length < this.questionList.length) {
    //     this.showQuestionList.push(this.questionList[index+1]);
    //     this.answerPointList.push(0);
    //   }
    //   console.log(this.answerPointList);
    // },
    onClickAnswer2(index, point) {
      if(this.answerPointList.length == this.showQuestionList.length) { // 모두 선택하고 페이지 이동 안될 경우
        return;
      }
      let answerPoint = this.questionList[index].answerPoint * point;
      this.answerPointList.push(answerPoint);
      if(index < this.questionList.length -1) {
        this.showQuestionList.push(this.questionList[this.showQuestionList.length]);
        // t, f 랜덤하게 표시
        this.isTAnswerFirst = Math.floor(Math.random()*2) == 0;
      }else {
        // 결과 페이지로 이동
        console.log('finish test', this.answerPointList);
      }
    }
  },
  created() {
    this.showQuestionList.push(this.questionList[0]);
    // this.answerPointList.push(0);
  },
  mounted() {
  },
};
</script>
<style>
  .answer {
    text-align:center;
    width:50vh;
    padding: 18px 10px;
    border: 1px solid #000;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
  }
  .button-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 18px;
    align-items: center;
    box-sizing: border-box;
    width: 100vw;
  }
  #progress {
    appearance: none;
  }
  #progress::-webkit-progress-bar {
    background:#f0f0f0;
    border-radius:10px;
    box-shadow: inset 3px 3px 10px #ccc;
  }
  #progress::-webkit-progress-value {
    border-radius:10px;
    background: #9999FF;
    background: -webkit-linear-gradient(to right, #CCCCFF, #9999FF);
    background: linear-gradient(to right, #CCCCFF, #9999FF);

  }
</style>
