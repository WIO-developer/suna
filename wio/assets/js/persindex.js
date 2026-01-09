let pers_array =
    [
        [75, 75, 75, 100, 75, 100, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0],
        [75, 75, 100, 75, 100, 75, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0],
        [75, 100, 75, 75, 75, 75, 75, 100, 0, 0, 0, 0, 0, 0, 0, 0],
        [100, 75, 75, 75, 75, 75, 75, 75, 100, 0, 0, 0, 0, 0, 0, 0],
        [75, 100, 75, 75, 75, 75, 75, 100, 50, 50, 50, 50, 25, 25, 25, 25],
        [100, 75, 75, 75, 75, 75, 100, 75, 50, 50, 50, 50, 25, 25, 25, 25],
        [75, 75, 75, 75, 75, 100, 75, 75, 50, 50, 50, 50, 25, 25, 25, 100],
        [75, 75, 100, 75, 100, 75, 75, 75, 50, 50, 50, 50, 25, 25, 25, 25],
        [0, 0, 0, 100, 50, 50, 50, 50, 25, 25, 25, 25, 50, 100, 50, 100],
        [0, 0, 0, 0, 50, 50, 50, 50, 25, 25, 25, 25, 100, 50, 100, 50],
        [0, 0, 0, 0, 50, 50, 50, 50, 25, 25, 25, 25, 50, 100, 50, 100],
        [0, 0, 0, 0, 50, 50, 50, 50, 25, 25, 25, 25, 100, 50, 50, 50],
        [0, 0, 0, 0, 25, 50, 25, 25, 50, 100, 50, 100, 75, 75, 75, 75],
        [0, 0, 0, 0, 25, 50, 25, 25, 100, 50, 100, 50, 75, 75, 75, 75],
        [0, 0, 0, 0, 25, 50, 25, 25, 50, 100, 50, 50, 75, 75, 75, 75],
        [0, 0, 0, 0, 25, 50, 100, 25, 100, 50, 100, 50, 75, 75, 75, 75]
    ]
let pers_map = ["INFP", "ENFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP", "ENTP", "ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"]
let perslove_map = ["ENFJ", "INTJ", "ENTP", "INFP", "ENFP", "INTP", "ENTJ", "INFJ", "ESFJ", "ISTJ", "ESTJ", "ISFJ", "ESTP", "ISFP", "ESFP", "ISTP"]
let pershate_map = ["ESTP", "ISFP", "ESFP", "ISTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ", "ENFP", "INFJ", "ENFJ", "INFP", "INTJ", "ENTJ", "INTP", "ENTP"]

let isModalViewed = false
let isModalViewed_basic = false
let pers = ""
let perslove_pers = ""
let pershate_pers = ""
let second_pers = ""
let second_pers_percent = 0
let second_pers_resulttext = ""
let second_pers_resulttext1 = ""
let second_pers_resulttext2 = ""
let min = 0
let min_index = ""
let min_index_reverse = ""
let basic_ie = 0
let basic_ns = 0
let basic_tf = 0
let basic_jp = 0
let pers_resultsubtext = ""
let total_sum = 140
let p3 = 20
let p2 = 14
let p1 = 9
let m1 = -9
let m2 = -14
let m3 = -20

//let text_color_dark = "var(--greyDark)"
//let text_color_light = "var(--greyLight-5)"
//let result_color = "var(--greyDark)"
//let result_color_dark = "var(--greyDark)"
//let result_color_light = "var(--greyDark)"
let default_color = "var(--persGradient)"
let default_color_dark = "var(--persDark)"
let default_color_light = "var(--persLight)"
let result_shadow = "var(--greyLight-3)"

function makep3() {
    return p3
}
function makep2() {
    return p2
} function makep1() {
    return p1
} function makem3() {
    return m3
} function makem2() {
    return m2
} function makem1() {
    return m1
}

function test_click(index) {
    var agree = document.getElementById("agree_" + index);
    var disagree = document.getElementById("disagree_" + index);
    var chk_radio = document.getElementsByName("pers" + index);

    for (var j = 0; j < chk_radio.length; j++) {
        if (chk_radio[j].checked == true) {
            if (chk_radio[j].value > 0) {
                agree.style.background = "var(--persGradient)";
                agree.style.color = "white";
                disagree.style.background = "var(--greyLight-1)";
                disagree.style.color = "var(--greyLight-2)";
                if (chk_radio[j].value == p3) {
                    agree.innerHTML = "매우 그렇습니다";
                } else if (chk_radio[j].value == p2) {
                    agree.innerHTML = "그렇습니다";
                } else if (chk_radio[j].value == p1) {
                    agree.innerHTML = "그런 편이에요";
                }
            } else {
                disagree.style.background = "var(--persGradient)";
                disagree.style.color = "white";
                agree.style.background = "var(--greyLight-1)";
                agree.style.color = "var(--greyLight-2)";
                if (chk_radio[j].value == m3) {
                    disagree.innerHTML = "전혀 그렇지 않아요";
                } else if (chk_radio[j].value == m2) {
                    disagree.innerHTML = "그렇지 않아요";
                } else if (chk_radio[j].value == m1) {
                    disagree.innerHTML = "아닌 편이에요";
                }
            }
            break;
        }
    }
}

function makepercent100(n) {
    if (n > 0) return 50 + Math.round((n / total_sum) * 50);
    else if (n < 0) return -50 + Math.round((n / total_sum) * 50);
    else return -50;
}

function circlePercent(pers_percent) {
    let result_circle_30 = document.getElementById("circle_30");
    let result_circle_100 = document.getElementById("circle_100");
    let change;
    let circle;

    var windowWidth = window.matchMedia("screen and (max-width: 550px)");

    result_circle_100.style.stopColor = default_color_light;
    result_circle_30.style.stopColor = default_color_dark;

    if (windowWidth.matches) {
        circle = document.getElementById("circle_min");
        change = 477.28 - (477.28 * pers_percent) / 100;
    } else {
        circle = document.getElementById("circle_max");
        change = 577.8 - (577.8 * pers_percent) / 100;
    }

    setTimeout(() => {
        circle.style.strokeDashoffset = change;
    }, 500);
}

function makeperspercent(ie, ns, tf, jp) {
    let pers_percent
    if (ie < 0) ie = ie * -1;
    if (ns < 0) ns = ns * -1;
    if (tf < 0) tf = tf * -1;
    if (jp < 0) jp = jp * -1;

    pers_percent = Math.round(
        (Number(ie) +
            Number(ns) +
            Number(tf) +
            Number(jp)) /
        4
    );
    return pers_percent
}

function makepers_resulttext(pers_percent) {
    let pers_resulttext
    if (pers_percent > 80) {
        pers_resulttext = "광기의";
    } else if (pers_percent > 74) {
        pers_resulttext = "극성";
    } else if (pers_percent > 68) {
        pers_resulttext = "찐";
    } else if (pers_percent > 61) {
        pers_resulttext = "표준";
    } else if (pers_percent >= 50) {
        pers_resulttext = "애매한";
    }

    return pers_resulttext
}

function makepers_resultsubtext(pers_percent) {
    let pers_resultsubtext
    if (pers_percent > 80) {
        pers_resultsubtext = "성격유형에 과몰입한";
    } else if (pers_percent > 74) {
        pers_resultsubtext = "극단적인 성향의";
    } else if (pers_percent > 68) {
        pers_resultsubtext = "강한 성향의";
    } else if (pers_percent > 61) {
        pers_resultsubtext = "일반적인 성향의";
    } else if (pers_percent >= 50) {
        pers_resultsubtext = "약한 성향의";
    }

    return pers_resultsubtext
}

function result_progressbar_animation(result_num, ch) {
    if (
        !document.getElementById("progressid_" + ch + "_left") &&
        !document.getElementById("progressid_" + ch + "_right")
    ) {
        return;
    }
    let prograssbar_left = document.getElementById(
        "progressid_" + ch + "_left"
    );
    let prograssbar_right = document.getElementById(
        "progressid_" + ch + "_right"
    );
    let wio_shadow_left = document.getElementById(
        "wio_shadow_" + ch + "_left"
    );
    let wio_shadow_right = document.getElementById(
        "wio_shadow_" + ch + "_right"
    );
    let wio_text_left = document.getElementById("wio_text_" + ch + "_left");
    let wio_text_right = document.getElementById("wio_text_" + ch + "_right");

    prograssbar_left.style.opacity = "0";
    prograssbar_left.style.width = "50%";
    prograssbar_left.innerHTML = "50%";

    prograssbar_right.style.opacity = "0";
    prograssbar_right.style.width = "50%";
    prograssbar_right.innerHTML = "50%";

    if (result_num < 0 || result_num == 50) {
        wio_shadow_left.style.color = result_shadow;
        wio_shadow_right.style.color = default_color_dark;
        wio_text_left.style.color = result_shadow;
        wio_text_right.style.color = default_color_dark;
        setTimeout(() => {
            result_num = result_num * -1;
            prograssbar_right.style.background = default_color;
            prograssbar_right.style.width = result_num + "%";
            prograssbar_right.innerHTML = result_num + "%";
            prograssbar_right.style.opacity = "1";

            prograssbar_left.style.width = 100 - result_num + "%";
            prograssbar_left.innerHTML = 100 - result_num + "%";
            prograssbar_left.style.opacity = "1";
        }, 500);
    } else if (result_num > 0) {
        wio_shadow_right.style.color = result_shadow;
        wio_shadow_left.style.color = default_color_light;
        wio_text_right.style.color = result_shadow;
        wio_text_left.style.color = default_color_light;
        setTimeout(() => {
            prograssbar_left.style.background = default_color;
            prograssbar_left.style.width = result_num + "%";
            prograssbar_left.innerHTML = result_num + "%";
            prograssbar_left.style.opacity = "1";

            prograssbar_right.style.width = 100 - result_num + "%";
            prograssbar_right.innerHTML = 100 - result_num + "%";
            prograssbar_right.style.opacity = "1";
        }, 500);
    }
}

/*
setcolor(pers) {
      if (pers == "INTJ") {
        result_color = "var(--purpleGradient)";
        result_color_dark = "var(--purpleLight-1)";
        result_color_light = "var(--purpleLight-0)";
      } else if (pers == "INTP") {
        result_color = "var(--purpleGradient)";
        result_color_dark = "var(--purpleLight-1)";
        result_color_light = "var(--purpleLight-0)";
      } else if (pers == "ENTJ") {
        result_color = "var(--purpleGradient)";
        result_color_dark = "var(--purpleLight-1)";
        result_color_light = "var(--purpleLight-0)";
      } else if (pers == "ENTP") {
        result_color = "var(--purpleGradient)";
        result_color_dark = "var(--purpleLight-1)";
        result_color_light = "var(--purpleLight-0)";
      } else if (pers == "INFJ") {
        result_color = "var(--greenGradient)";
        result_color_dark = "var(--greenLight-1)";
        result_color_light = "var(--greenLight-0)";
      } else if (pers == "INFP") {
        result_color = "var(--greenGradient)";
        result_color_dark = "var(--greenLight-1)";
        result_color_light = "var(--greenLight-0)";
      } else if (pers == "ENFJ") {
        result_color = "var(--greenGradient)";
        result_color_dark = "var(--greenLight-1)";
        result_color_light = "var(--greenLight-0)";
      } else if (pers == "ENFP") {
        result_color = "var(--greenGradient)";
        result_color_dark = "var(--greenLight-1)";
        result_color_light = "var(--greenLight-0)";
      } else if (pers == "ISTJ") {
        result_color = "var(--blueGradient)";
        result_color_dark = "var(--blueLight-1)";
        result_color_light = "var(--blueLight-0)";
      } else if (pers == "ISFJ") {
        result_color = "var(--blueGradient)";
        result_color_dark = "var(--blueLight-1)";
        result_color_light = "var(--blueLight-0)";
      } else if (pers == "ESTJ") {
        result_color = "var(--blueGradient)";
        result_color_dark = "var(--blueLight-1)";
        result_color_light = "var(--blueLight-0)";
      } else if (pers == "ESFJ") {
        result_color = "var(--blueGradient)";
        result_color_dark = "var(--blueLight-1)";
        result_color_light = "var(--blueLight-0)";
      } else if (pers == "ISTP") {
        result_color = "var(--yellowGradient)";
        result_color_dark = "var(--yellowLight-1)";
        result_color_light = "var(--yellowLight-0)";
      } else if (pers == "ISFP") {
        result_color = "var(--yellowGradient)";
        result_color_dark = "var(--yellowLight-1)";
        result_color_light = "var(--yellowLight-0)";
      } else if (pers == "ESTP") {
        result_color = "var(--yellowGradient)";
        result_color_dark = "var(--yellowLight-1)";
        result_color_light = "var(--yellowLight-0)";
      } else if (pers == "ESFP") {
        result_color = "var(--yellowGradient)";
        result_color_dark = "var(--yellowLight-1)";
        result_color_light = "var(--yellowLight-0)";
      }
    },

function minindex() {
    let arr = {};
    let index = 0;
    let count = 0;
    if (ie < 0) {
        arr[0] = ie * -1;
    } else {
        arr[0] = ie;
    }

    if (ns < 0) {
        arr[1] = ns * -1;
    } else {
        arr[1] = ns;
    }

    if (tf < 0) {
        arr[2] = tf * -1;
    } else {
        arr[2] = tf;
    }

    if (jp < 0) {
        arr[3] = jp * -1;
    } else {
        arr[3] = jp;
    }

    min = arr[0];
    for (let i = 1; i < 4; i++) {
        if (min > arr[i]) {
            min = arr[i];
            index = Number(i);
        }
    }

    arr[index] = 100 - min;

    second_pers_percent = Math.round(
        (Number(arr[0]) + Number(arr[1]) + Number(arr[2]) + Number(arr[3])) / 4
    );

    if (index == 0 && ie < 0) {
        min_index_reverse = "I";
        min_index = "E";
    } else if (index == 0 && ie > 0) {
        min_index_reverse = "E";
        min_index = "I";
    }

    if (index == 1 && ns < 0) {
        min_index_reverse = "N";
        min_index = "S";
    } else if (index == 1 && ns > 0) {
        min_index_reverse = "S";
        min_index = "N";
    }

    if (index == 2 && tf < 0) {
        min_index_reverse = "T";
        min_index = "F";
    } else if (index == 2 && tf > 0) {
        min_index_reverse = "F";
        min_index = "T";
    }

    if (index == 3 && jp < 0) {
        min_index_reverse = "J";
        min_index = "P";
    } else if (index == 3 && jp > 0) {
        min_index_reverse = "P";
        min_index = "J";
    }
    second_pers = pers.replace(
        min_index,
        min_index_reverse
    );

    let difference = min - (100 - min);

    for (let i = 0; i < 4; i++) {
        if (arr[i] < 60)
            count++
    }

    if (count == 4) {
        second_pers_resulttext = "모든 상세지수가 전체적으로 낮아";
        second_pers_resulttext1 = "희미한 " + pers + " 성향입니다.";

    }
    else if (count == 3) {
        second_pers_resulttext = "몇몇의 상세지수가 뚜렷하지 않아";
        second_pers_resulttext1 =
            "애매한 " + pers + " 성향을 보입니다.";
    }
    else if (min < 60) {
        second_pers_resulttext =
            "상세지수 " +
            min_index +
            "와 " +
            min_index_reverse +
            "의 차이가 " +
            difference +
            "%로 매우 낮아";
        second_pers_resulttext1 = second_pers + "일 가능성도 있어 보입니다.";
    } else {
        second_pers_resulttext = "각각의 상세지수가 모두 높아";
        second_pers_resulttext1 =
            "뚜렷한 " + pers + " 성향을 보입니다.";
    }
}*/
const persindex = {
    makeperspercent,
    makepers_resulttext,
    result_progressbar_animation,
    circlePercent,
    makepercent100,
    test_click,
    makep3,
    makep2,
    makep1,
    makem3,
    makem2,
    makem1,
    makepers_resultsubtext,

}

export default persindex