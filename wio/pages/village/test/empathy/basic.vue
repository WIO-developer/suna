<template>
  <div style="height: 100%" class="service_width">

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

    <!--
      <AppVif>
        <div class="adfit_margin">
          <AdFit ad-unit="DAN-PUGKg8OpG5Thv4tJ" />
        </div>
      </AppVif>
    -->
    <div v-for="(questionSet, index) in questionList">
      <div :id="`scroll_target_${index}`"></div>
      <div class="result_shell opacity_shell" :id="`opacity_${index}`" style="position:absolute; ">
        <div class="margin_40">
          <div class="row_group">
            <hr :width="(3.57 * (index + 1)) + `%`" style="border: solid 1px var(--greyLight-3); margin: auto 0" />
            <p class="persresult_text padding_02"
              style="font-weight: bold; white-space: nowrap; color:var(--greyLight-4); font-size:1.0em">
              질문.{{ index + 1 }}
            </p>
            <hr :width="(100 - 3.57 * (index + 1)) + `%`" style="border: solid 1px var(--greyLight-3); margin: auto 0" />
          </div>
          <div class="persresult_subtitle" style="font-weight: bold; margin: 0.5em auto 1em auto;word-break: keep-all; ">
            {{ questionSet.PersQuestion }}
          </div>
        </div>
        <div class="inner_shell" style="width: auto; margin: 2% 0">
          <div class="row_group" :id="`scroll_${index}`">
            <div class="absolute_center border_text scdream_greyDark1_09" :id="`agree_${index}`">
              그렇습니다
            </div>
            <div class="absolute_center border_text scdream_greyDark1_09" :id="`disagree_${index}`">
              그렇지 않아요
            </div>
          </div>
          <div class="row_group" :id="`scroll_${index}`">
            <div class="absolute_center">
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="p3" class="outer_circle" />
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="p3" class="inner_circle" />
            </div>
            <div class="absolute_center">
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="p2" class="outer_circle" />
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="p2" class="inner_circle" />
            </div>
            <div class="absolute_center">
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="p1" class="outer_circle" />
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="p1" class="inner_circle" />
            </div>
            <div class="absolute_center">
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="m1" class="outer_circle" />
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="m1" class="inner_circle" />
            </div>
            <div class="absolute_center">
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="m2" class="outer_circle" />
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="m2" class="inner_circle" />
            </div>
            <div class="absolute_center">
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="m3" class="outer_circle" />
              <input @click="scroll_move(index)" type="radio" :name="`pers${index}`" :value="m3" class="inner_circle" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
    <AppVif>
      <div class="outer_shell">
        <div class="inner_shell" style="width: auto; margin: 2% 0">
          <AdsenseInpeed slot-str="6533243477" />
        </div>
      </div>
    </AppVif>
-->
    <div style="position:fixed; bottom:0; background:var(--persLight); width:100%; max-width:550px; height:3em"
      @click="testresult">
      결과 확인
    </div>
  </div>
</template>
<script>
import metaConfig from "~/config/metaConfig";
import PersHeader from "@/components/PersHeader.vue";
import PersQuestionList from "~/config/persQuestionList";
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
    PersHeader: PersHeader,
    PersQuestionList: PersQuestionList,
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
  },
  data() {
    return {
      questionList: [],
      pers_score: [0, 0, 0, 0, 0],
      //persindex에서 수정
      p3: 0,
      p2: 0,
      p1: 0,
      m1: 0,
      m2: 0,
      m3: 0,
    };
  },
  methods: {
    scroll_move(index) {

      persindex.test_click(index)

      setTimeout(() => {
        if (index > 0) {
          var ob = document.getElementById("scroll_target_" + Number(index));
          ob.scrollIntoView({ behavior: "smooth" });
        } else if (index == 0) {
          var ob = document.getElementById("scroll_target");
          ob.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      if (!document.getElementById("opacity_" + Number(index + 1))) {
        return;
      }
      var op = document.getElementById("opacity_" + Number(index + 1));
      op.style.opacity = 1;
    },
    testresult() {
      var count = 0;
      var pers = "";
      this.pers_score = [0, 0, 0, 0, 0];

      for (var i of this.questionList) {
        var chk_radio = document.getElementsByName("pers" + count);

        for (var j = 0; j < chk_radio.length; j++) {
          if (chk_radio[j].checked == true) {
            if (i.pers_type == "IE") {
              this.pers_score[0] += Number(chk_radio[j].value);

            } else if (i.pers_type == "EI") {
              this.pers_score[0] -= Number(chk_radio[j].value);

            } else if (i.pers_type == "NS") {
              this.pers_score[1] += Number(chk_radio[j].value);

            } else if (i.pers_type == "SN") {
              this.pers_score[1] -= Number(chk_radio[j].value);

            } else if (i.pers_type == "TF") {
              this.pers_score[2] += Number(chk_radio[j].value);

            } else if (i.pers_type == "FT") {
              this.pers_score[2] -= Number(chk_radio[j].value);

            } else if (i.pers_type == "JP") {
              this.pers_score[3] += Number(chk_radio[j].value);

            } else if (i.pers_type == "PJ") {
              this.pers_score[3] -= Number(chk_radio[j].value);

            }
            break;
          }
          /*else if(chk_radio[j].checked == false && j>10)
          {            
            alert("체크되지 않은 문항이 있어요!")
            this.scroll_move(count)
            return false
          }*/
        }
        count++;
      }

      if (this.pers_score[0] > 0) {
        pers += "I";
      } else {
        pers += "E";
      }
      if (this.pers_score[1] > 0) {
        pers += "N";
      } else {
        pers += "S";
      }
      if (this.pers_score[2] > 0) {
        pers += "T";
      } else {
        pers += "F";
      }
      if (this.pers_score[3] > 0) {
        pers += "J";
      } else {
        pers += "P";
      }

      this.$router.push({
        path: "/personality/test/persindex/result/",
        query: {
          pers: pers,
          ie: this.pers_score[0],
          ns: this.pers_score[1],
          tf: this.pers_score[2],
          jp: this.pers_score[3],
        },
      });
    },
  },
  created() {
    this.questionList = PersQuestionList;
  },
  mounted() {
    this.scroll_move(-1);
    this.p1 = persindex.makep1()
    this.p2 = persindex.makep2()
    this.p3 = persindex.makep3()
    this.m1 = persindex.makem1()
    this.m2 = persindex.makem2()
    this.m3 = persindex.makem3()
  },
};
</script>
