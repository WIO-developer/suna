let bsound = [
  [
    0x3131, 0x3132, 0x3134, 0x3137, 0x3138, 0x3139, 0x3141, 0x3142,
    0x3143, 0x3145, 0x3146, 0x3147, 0x3148, 0x3149, 0x314a, 0x314b,
    0x314c, 0x314d, 0x314e,
  ],
  [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ],
  [2, 4, 2, 3, 6, 5, 4, 4, 8, 2, 4, 1, 3, 6, 4, 4, 4, 4, 3],
]
let msound = [
  [
    0x314f, 0x3150, 0x3151, 0x3152, 0x3153, 0x3154, 0x3155, 0x3156,
    0x3157, 0x3158, 0x3159, 0x315a, 0x315b, 0x315c, 0x315d, 0x315e,
    0x315f, 0x3160, 0x3161, 0x3162, 0x3163,
  ],
  [
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅘ",
    "ㅙ",
    "ㅚ",
    "ㅛ",
    "ㅜ",
    "ㅝ",
    "ㅞ",
    "ㅟ",
    "ㅠ",
    "ㅡ",
    "ㅢ",
    "ㅣ",
  ],
  [2, 3, 3, 4, 2, 3, 3, 4, 2, 4, 5, 3, 3, 2, 4, 5, 3, 3, 1, 2, 1],
]
let esound = [
  [
    0x0000, 0x3131, 0x3132, 0x3133, 0x3134, 0x3135, 0x3136, 0x3137,
    0x3139, 0x313a, 0x313b, 0x313c, 0x313d, 0x313e, 0x313f, 0x3140,
    0x3141, 0x3142, 0x3144, 0x3145, 0x3146, 0x3147, 0x3148, 0x314a,
    0x314b, 0x314c, 0x314d, 0x314e,
  ],
  [
    "",
    "ㄱ",
    "ㄲ",
    "ㄳ",
    "ㄴ",
    "ㄵ",
    "ㄶ",
    "ㄷ",
    "ㄹ",
    "ㄺ",
    "ㄻ",
    "ㄼ",
    "ㄽ",
    "ㄾ",
    "ㄿ",
    "ㅀ",
    "ㅁ",
    "ㅂ",
    "ㅄ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ],
  [
    0, 2, 4, 4, 2, 5, 5, 3, 5, 7, 9, 9, 7, 9, 9, 8, 4, 4, 6, 2, 4, 1, 3,
    4, 3, 3, 4, 3,
  ],
]
//결과 화면 숫자
function result_animation(name, namelen, fadeinnum, len) {
  if(! document.getElementById("result_animation")) {
    return
  }
  let result_animation_parent = document.getElementById("result_animation");
  let result_animation_child = [];
  let result_animation_id;
  if (fadeinnum == 0 && result_animation_parent.childNodes[0]) {
    result_animation_parent.innerHTML = "";
  }

  result_animation_id = document.createElement("div");

  if (fadeinnum == 0) {
    result_animation_id.setAttribute("id", "result_animation_id0");
  } else if (fadeinnum == len - 1) {
    result_animation_id.setAttribute("id", "result_animation_id7");
  } else {
    result_animation_id.setAttribute(
      "id",
      "result_animation_id" + Math.ceil((8 / len) * fadeinnum)
    );
  }

  //result_animation의 이름 생성 후 br
  let result_animation_br = document.createElement("br");
  result_animation_id.appendChild(result_animation_br);

  for (var i = 0; i < namelen; i++) {
    if (len < 7) result_animation_child[i] = document.createElement("h3");
    else result_animation_child[i] = document.createElement("h4");

    if (namelen == 2 && i == 1) {
      result_animation_child[i].innerHTML = name[i];
    } else {
      result_animation_child[i].innerHTML = name[i];
    }

    result_animation_child[i].style.margin = "0 0.3em";
    result_animation_id.appendChild(result_animation_child[i]);
    if (fadeinnum == 0) {
      if (i % 2 == 0) {
        result_animation_child[i].style.color = "rgb(76, 202, 227)";
        result_animation_child[i].style.margin = "0.3em 0.14em 0 0.15em";
      } else {
        result_animation_child[i].style.color = "rgb(255, 114, 128)";
        result_animation_child[i].style.margin = "0 0.14em 0.3em 0.15em";
      }
    }
  }
  result_animation_parent.appendChild(result_animation_id);
  result_animation_id.style.fontSize = "1.4em";
  result_animation_id.style.color = "#414141";
  result_animation_id.style.display = "flex";
  result_animation_id.style.flexWrap = "nowrap";
  result_animation_id.style.flexDirection = "row";
  result_animation_id.style.justifyContent = "center";
  result_animation_id.style.width = "100%";
  result_animation_id.style.fontFamily = "hotel";


  if (namelen == 2) {
    result_animation_id.style.color = "rgb(255, 54, 78)";
  }
}

function makeTitle(myname, yourname, score) {
  let subfull_result = "";
  let subtitle_result = "";
  //subfull_result 는 상대방에게 메세지를 전달하는 느낌
  if (score > 90) {
    subfull_result =
      myname + "님은 " +
      yourname +
      "님에게 이 지구상 최고의 소울메이트입니다! 축하합니다!";
    subtitle_result = "#영혼의 듀오! ♥";
  } else if (score > 80 && score <= 90) {
    subfull_result =
      myname +
      "님은 " +
      yourname +
      "님을 향한 넘치는 사랑이자 환상의 짝꿍! 해바라기가 되줄 거예요!";
    subtitle_result = "#복덩이 애정해♥";
  } else if (score > 70 && score <= 80) {
    subfull_result =
      yourname +
      "님의 부족한 부분을 채워줄 수 있는 좋은 궁합! 진실된 마음이 보일 거예요!";
    subtitle_result = "#내안에 너있다?!★";
  } else if (score > 60 && score <= 70) {
    subfull_result =
      myname + "님과 가까이 지내면 좋은 궁합이예요! 부럽습니다!";
    subtitle_result = "#내가 너 아낀다!♠";
  } else if (score > 50 && score <= 60) {
    subfull_result =
      myname +
      "님은 " +
      yourname +
      "님에게 좋은 관계 일지도 몰라요! 신중하게 생각해 보세요!";
    subtitle_result = "#우리 더 알아가자!♣";
  } else if (score > 40 && score <= 50) {
    subfull_result =
      myname +
      "님은 " +
      yourname +
      "님에게 좋은 쪽도, 나쁜 쪽도 아닌 마음이예요! 좀 더 알아가 보는건 어떤가요?";
    subtitle_result = "#우리.. 친해져볼까..?";
  } else if (score > 30 && score <= 40) {
    subfull_result =
      "좋은 관계를 이어나가기 위해선 많은 노력이 필요할 것 같아요!";
    subtitle_result = "#우리.. 무슨사이..?";
  } else if (score > 20 && score <= 30) {
    subfull_result =
      myname +
      "님과 " +
      yourname +
      "님은 많은 고비가 있었을까요? 좀 더 신중하게 관계를 확인하세요!";
    subtitle_result = "#우리 괜찮은거지!?";
  } else if (score > 10 && score <= 20) {
    subfull_result =
      myname +
      "님과 " +
      yourname +
      "님은 너무 많은 노력이 필요해 보여요! 혹시 틀어진 사이는 아니겠죠?";
    subtitle_result = "#이거 잘못된거지?!";
  } else if (score <= 10) {
    subfull_result =
      yourname +
      "님에게 " +
      myname +
      "님은 모르는게 나을지도! 친한 사이라면 기적일 정도!";
    subtitle_result = "#우린 뒤에서 제일 잘맞아!";
  }
  return {
    resultTitle: myname + "님은 " + yourname + "님을 ",
    resultTitleScore: score + "%",
    resultSubtitle: subfull_result,
    resultSubmaintitle: subtitle_result,
  }
}

// //이름 궁합 테스트 nn(%) 반환 함수
function nameLoveTestResult(fname, sname) {
  let fname_arr = new Array();
  let sname_arr = new Array();
  let resultnum_arr = new Array();

  //fname = [장, 동, 건] , sname = [고, 소, 영]
  //fname_arr[0] = [ㅈ, ㅏ, ㅇ]
  for (let i = 0; i < fname.length; i++) {
    fname_arr[i] = koreanDivision(fname[i]);
  }

  for (let i = 0; i < sname.length; i++) {
    sname_arr[i] = koreanDivision(sname[i]);
  }

  let lenSum = fname.length + sname.length;

  let fname_seq = 0;
  let sname_seq = 0;
  let fadeinnum = 1;
  let name_arr = [];

  //각 글자의 획수를 순서대로 담는 루프 / 장, 고, 동, 소, 건, 영 -> resultSum = [6 4 6 4 6 5]
  for (let i = 0; i < lenSum; i++) {
    if (i % 2 == 0) {
      if (fname_arr.length <= fname_seq) {
        lenSum++;
        resultnum_arr.push(0);
        name_arr[i] = "X";
      } else {
        resultnum_arr.push(
          koreanDivisionCalcResult(fname_arr[fname_seq])
        );

        //result_animation에 장, 고, 동, 소, 건, 영 을 생성
        name_arr[i] = fname[fname_seq];

        fname_seq++;
      }
    } else {
      if (sname_arr.length <= sname_seq) {
        lenSum++;
        resultnum_arr.push(0);
        name_arr[i] = "X";
      } else {
        resultnum_arr.push(
          koreanDivisionCalcResult(sname_arr[sname_seq])
        );
        //result_animation에 장, 고, 동, 소, 건, 영 을 생성

        name_arr[i] = sname[sname_seq];
        sname_seq++;
      }
    }
  }

  result_animation(name_arr, resultnum_arr.length, 0, lenSum);
  result_animation(resultnum_arr, resultnum_arr.length, fadeinnum, lenSum);
  //순서대로 담긴 획수를 더하는 루프 / resultSum = [7 5 6 5 2 4] -> resultSum = [2 1 1 7 6] -> resultSum = [3 2 8 3] ...
  while (resultnum_arr.length > 2) {
    let tempLen = resultnum_arr.length;

    for (let i = 0; i < tempLen - 1; i++) {
      let resultSum = 0;

      resultSum = parseInt(resultnum_arr[i]) + parseInt(resultnum_arr[i + 1]);
      if (resultSum >= 10) {
        resultSum = resultSum - 10;
        resultnum_arr.push(resultSum);
      } else {
        resultnum_arr.push(resultSum);
      }
    }

    //resultSum = [7 5 6 5 2 4 2 1 1 7 6]
    resultnum_arr.splice(0, tempLen);
    fadeinnum++;
    result_animation(resultnum_arr, resultnum_arr.length, fadeinnum, lenSum);

    //splice -> resultSum = [2 1 1 7 6]
    // if (resultnum_arr.length <= 2) {
    //     break;
    // }
  }
  let result_num = parseInt(resultnum_arr[0]) * 10 + parseInt(resultnum_arr[1]);
  
  result_progressbar_animation(result_num);

  return result_num;
}

function koreanDivision(name) {
  let ko_u = new Array();
  let ko = new Array();
  let bs, ms, es;
  for (let i = 0; i < name.length; i++) {
    ko_u[i] = name.charCodeAt(i);

    if (ko_u[i] >= 0xac00 && ko_u[i] <= 0xd7a3) {
      es = ko_u[i] - 0xac00;
      bs = es / (21 * 28);
      es = es % (21 * 28);
      ms = es / 28;
      es = es % 28;

      ko.push(String.fromCharCode(bsound[0][parseInt(bs)]));
      ko.push(String.fromCharCode(msound[0][parseInt(ms)]));
      if (es != 0x0000) {
        ko.push(String.fromCharCode(esound[0][parseInt(es)]));
      }
    } else {
      ko.push(String.fromCharCode(ko_u[i]));
    }
  }
  return ko;
}

function koreanDivisionCalcResult(kd) {
  let count = 0;

  count =
    koreanDivisionCalc(bsound[1], bsound[2], kd[0]) +
    koreanDivisionCalc(msound[1], msound[2], kd[1]) +
    koreanDivisionCalc(esound[1], esound[2], kd[2]);

  return count;
}

function koreanDivisionCalc(sound, soundcount, kd) {
  //종성이 없을 경우 0
  if (kd == undefined) {
    return 0;
  }
  for (let i = 0; i < sound.length; i++) {
    if (kd == sound[i]) {
      return soundcount[i];
    }
  }
}



function nameValidation(name) {
  if (!name || name.length < 1) {
    alert("이름을 입력하세요.");
    return false;
  }

  if (name.length > 4) {
    // TODO! 이름 길이 제한 기준 설정 필요
    alert("이름은 4자리까지 입력가능합니다.");
    return false;
  }

  // TODO! [,],\ 입력 방지 필요
  const regex = /[0-9|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|`~!@#$%^&*()_|+\-=?;:'",.<>{}/ ]/;
  if (regex.exec(name) !== null) {
    alert(
      `한글 이름만 입력 가능합니다. '${regex.exec(name)}'을 지워주세요.`
    );
    return false;
  }
  return true;
}

function result_progressbar_animation(result_num) {
  if(! document.getElementById("progressid")) {
    return 
  }
  let prograssbar = document.getElementById("progressid");
  prograssbar.style.opacity = "0";
  prograssbar.style.width = "0%";
  prograssbar.innerHTML = "0%";
  setTimeout(() => {
    prograssbar.style.width = result_num + "%";
    prograssbar.innerHTML = result_num + "%";
    prograssbar.style.opacity = "1";
  }, 500);
}
const namelovetest = {
  result_animation,
  makeTitle,
  nameLoveTestResult,
  koreanDivision,
  koreanDivisionCalcResult,
  koreanDivisionCalc,
  nameValidation,
  result_progressbar_animation
}

export default namelovetest