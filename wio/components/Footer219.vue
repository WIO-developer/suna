<template>
  <footer style="padding-top:2em" class="site_footer">
    <div class="container" style="word-break: keep-all">
      <!--
      <span class="scdream_greyLight5_08">|</span>
      <a class="scdream_greyLight5_09" href="https://www.instagram.com/wio.daily/">인스타그램</a>
      <span class="scdream_greyLight5_08">|</span>
      <a class="scdream_greyLight5_09" href="https://blog.suna.company/">블로그</a>
      -->
    </div>
    <p style="margin-top: 0.5em; color:white" class="scdream_greyLight5_08">
      <span style="font-weight: bold;">COMPANY INFO</span>
    </p>
    <p style="margin-top: 0.5em; color:white" class="scdream_greyLight5_08">
      | COMPANY WIO | LICENSE 614-02-67518 |</p>

    <p style="margin-top: 0.3em; color:white" class="scdream_greyLight5_08">
      | E-MAIL wio_baebae@naver.com |
    </p>
    <p style="margin-top: 0.3em; color:white" class="scdream_greyLight5_08">
      | Tel 010-5967-8707 |
    </p>
    <p style="margin-top: 1.5em; color:white" class="scdream_greyLight5_08">
      Copyright &copy; 2023.11 All Rights Reserved by
    </p>
    <div style="margin-top: 0.3em;">
      <a href="https://store.suna.company">
        <img style="height:1em; line-height: 1em;" src="/image/white_suna.png">
      </a>
    </div>

  </footer>
</template>

<script>
export default {
  props: {
    type: String
  },
  data() {
    return {
      aboutTxt: '',
      contact: '',
      url: '',
      urlNm: ''
    }
  },
  computed: {
    storage_url: {
      get() {
        return `${process.env.VUE_APP_STORAGE_URL}/images`
      }
    }
  },
  created() {
    this.contact = 'wio_baebae@naver.com'
    this.url = 'https://store.suna.company'
    this.urlNm = 'WIO 기술 블로그'
    if (this.type === 'wiopers') {
      this.aboutTxt = `WIO퍼스널리티(위오퍼스널리티)는 사용자 여러분께 시각적이고 역동적인 성격유형 컨텐츠로
      재미와 감동을 선사하고자 합니다. 성격유형에 대한 신선한 접근과 다양한 색감, 인터렉티브한 디자인으로 여러분의
      깊은 마음속을 가득 색칠해보세요.`
    } else if (this.type === 'retro') {
      this.aboutTxt = `
              위오레트로 (WIOretro)는 과거 혹은 현재 유행하는 아기자기하고
              감성적인 놀이의 집합소 입니다! 위오가 준비한 믿거나 말거나
              테스트와 다양한 서비스들을 이용해보세요! :D`
    } else {
      this.aboutTxt = `위오(WIO)는 World Is Opportunity의 약자로 세계의 모든 곳에서
              기회를 찾는다는 의미입니다. 세대를 아우르는 유행, 젊음, 감정 등을
              주제로 다양한 매개체의 문화 공간에서 깊은 공감대를 형성할
              것입니다. 위오의 첫 출발점인 이름궁합 테스트에서 여러분만의 믿음을
              가져보세요 :)`
    }
  }
}
</script>

<style></style>
