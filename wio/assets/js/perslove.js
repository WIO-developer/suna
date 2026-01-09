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
let pers_map =     ["INFP", "ENFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP", "ENTP", "ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"]
let perslove_map = ["ENFJ", "INTJ", "ENTP", "INFP", "ENFP", "INTP", "ENTJ", "INFJ", "ESFJ", "ISTJ", "ESTJ", "ISFJ", "ESTP", "ISFP", "ESFP", "ISTP"]
let pershate_map = ["ESTP", "ISFP", "ESFP", "ISTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ", "ENFP", "INFJ", "ENFJ", "INFP", "INFP", "ENFP", "INFJ", "ENFP"]

let result_color = "var(--greyDark)"

function perslove_search100(pers) {
    return perslove_map[pers_map.indexOf(pers)]
}
function pershate_search100(pers) {
    return pershate_map[pers_map.indexOf(pers)]
}
//결과 화면 숫자
function perslove_result(mypers, yourpers) {
    let i = 0
    let first_pers_arr = 0
    let second_pers_arr = 0
    let count = 0

    for (i = 0; i < 16; i++) {
        if (mypers == pers_map[i]) {
            first_pers_arr = i
            count++;
        }
        if (yourpers == pers_map[i]) {
            second_pers_arr = i
            count++;
        }
        if (count >= 2) {
            count = 0
            break;
        }
    }
    return pers_array[first_pers_arr][second_pers_arr]
}
function makeTitle(rstObj, score) {

    let result_circle_30 = document.getElementById("circle_30")
    let result_circle_100 = document.getElementById("circle_100")
    let card__number = document.getElementById("card__number")
    let color_class = document.querySelectorAll(".color_class")
    let color_class_background = document.querySelectorAll(".color_class_background")
    let color_class_gradient = document.querySelectorAll(".color_class_gradient")


    if (score == 100) {
        rstObj.resultTitle = "#인생궁합"
        rstObj.resultSubtitle = "100% 잘 맞는 최고의 궁합!"
        rstObj.resultDescription = "인생을 함께할 최고의 궁합이에요, 다가가지 않아도 알 수 있어요!"
        result_circle_30.style.stopColor = "var(--blueLight-1)"
        result_circle_100.style.stopColor = "var(--blueLight-0)"
        card__number.style.color = "var(--blueLight-1)"
        result_color = "var(--blueLight-1)"
        for (var i = 0; i < color_class.length; i++) {
            color_class[i].style.color = "var(--blueLight-1)"
        }
        for (var i = 0; i < color_class_background.length; i++) {
            color_class_background[i].style.background = "var(--blueLight-1)"
        }
        for (var i = 0; i < color_class_gradient.length; i++) {
            color_class_gradient[i].style.background = "var(--blueGradient)"
        }
    } else if (score == 75) {
        rstObj.resultTitle = "#절친궁합"
        rstObj.resultSubtitle = "상대를 편안하게 해주는 성격궁합!"
        rstObj.resultDescription = "함께하면 즐겁고 잘 맞다고 느낄 수 있어요! 서로에게 힘이되는 아주 좋은 궁합!"
        result_circle_30.style.stopColor = "var(--greenLight-1)"
        result_circle_100.style.stopColor = "var(--greenLight-0)"
        card__number.style.color = "var(--greenLight-1)"
        result_color = "var(--greenLight-1)"
        for (var i = 0; i < color_class.length; i++) {
            color_class[i].style.color = "var(--greenLight-1)"
        }
        for (var i = 0; i < color_class_background.length; i++) {
            color_class_background[i].style.background = "var(--greenLight-1)"
        }
        for (var i = 0; i < color_class_gradient.length; i++) {
            color_class_gradient[i].style.background = "var(--greenGradient)"
        }
    } else if (score == 50) {
        rstObj.resultTitle = "#무난궁합"
        rstObj.resultSubtitle = "좋지도 나쁘지도 않은 궁합!"
        rstObj.resultDescription = "서로에게 조금 더 배려하면 더 친해질 수 있을 꺼에요!"
        result_circle_30.style.stopColor = "var(--treeLight-1)"
        result_circle_100.style.stopColor = "var(--treeLight-0)"
        card__number.style.color = "var(--treeLight-1)"
        result_color = "var(--treeLight-1)"
        for (var i = 0; i < color_class.length; i++) {
            color_class[i].style.color = "var(--treeLight-1)"
        }
        for (var i = 0; i < color_class_background.length; i++) {
            color_class_background[i].style.background = "var(--treeLight-1)"
        }
        for (var i = 0; i < color_class_gradient.length; i++) {
            color_class_gradient[i].style.background = "var(--treeGradient)"
        }
    } else if (score == 25) {
        rstObj.resultTitle = "#어색궁합"
        rstObj.resultSubtitle = "N극과 N극, S극과 S극!"
        rstObj.resultDescription = "사소한 것도 안 맞을 수 있어요! 좀 더 신중하게 다가가보세요!"
        result_circle_30.style.stopColor = "var(--yellowLight-1)"
        result_circle_100.style.stopColor = "var(--yellowLight-0)"
        card__number.style.color = "var(--yellowLight-1)"
        result_color = "var(--yellowLight-1)"
        for (var i = 0; i < color_class.length; i++) {
            color_class[i].style.color = "var(--yellowLight-1)"
        }
        for (var i = 0; i < color_class_background.length; i++) {
            color_class_background[i].style.background = "var(--yellowLight-1)"
        }
        for (var i = 0; i < color_class_gradient.length; i++) {
            color_class_gradient[i].style.background = "var(--yellowGradient)"
        }
    } else if (score == 0) {
        rstObj.resultTitle = "#파국궁합"
        rstObj.resultSubtitle = "우리 깊이 알지 말아요~"
        rstObj.resultDescription = "알면 알수록 불편해질 수 있어요, 적당한 거리를 주는게 좋을 듯 합니다!"

        result_circle_30.style.stopColor = "var(--redLight-1)"
        result_circle_100.style.stopColor = "var(--redLight-0)"
        card__number.style.color = "var(--redLight-1)"
        result_color = "var(--redLight-1)"
        for (var i = 0; i < color_class.length; i++) {
            color_class[i].style.color = "var(--redLight-1)"

        }
        for (var i = 0; i < color_class_background.length; i++) {
            color_class_background[i].style.background = "var(--redLight-1)"
        }
        for (var i = 0; i < color_class_gradient.length; i++) {
            color_class_gradient[i].style.background = "var(--redGradient)"
        }
    }
    return result_color
}
function circlePercent(mypers, yourpers) {
    let change
    let circle
    let pers_percent
    let rstObj = {
        pers_percent: "",
        resultTitle: "",
        resultSubtitle: "",
        resultDescription: "",
        color: "",
    }

    rstObj.pers_percent = perslove_result(mypers, yourpers)

    var windowWidth = window.matchMedia("screen and (max-width: 550px)");

    if (windowWidth.matches) {
        circle = document.getElementById('circle_min')
        change = 452.2 - (452.2 * rstObj.pers_percent) / 100
    } else {
        circle = document.getElementById('circle_max')
        change = 577.8 - (577.8 * rstObj.pers_percent) / 100
    }
    rstObj.color = makeTitle(rstObj, rstObj.pers_percent)

    setTimeout(() => {
        circle.style.strokeDashoffset = change;
    }, 200);

    return rstObj
}

const perslove = {
    perslove_result,
    makeTitle,
    circlePercent,
    perslove_search100,
    pershate_search100,
}

export default perslove