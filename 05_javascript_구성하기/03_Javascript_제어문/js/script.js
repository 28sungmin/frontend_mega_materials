// 제어문 : 조건문(if ~ else if ~ else), 선택문(switch ~ case ~ break), 반복문(while, do while, for)

// #1. 조건문 : true 또는 false에 의해 지정된 화면을 보여줄 것인가 또는 감출 것인가를 진행시키는 제어를 담당
var age = 12;
if (age > 13) {
  document.write("가입을 환영합니다.", "<br />");
} else {
  document.write("가입연령이 아닙니다.", "<br />");
}

// 월별에 따른 계절 보여주기
var curMonth = parseInt(11.5); // 유효한 값이 아닐 경우를 대비하여 중첩조건문을 사용한다.
console.log(curMonth);
// 그러나 이렇게 해도 11.5와 같은 값을 넣어도 답이 나온다. 따라서 parseInt()를 넣어서 소수점을 모두 없앤다.
// 1월 ~ 12월
if (curMonth >= 1 && curMonth <= 12) {
  if (curMonth >= 3 && curMonth <= 5) {
    document.write("따뜻한 봄입니다.", "<br />");
  } else if (curMonth >= 6 && curMonth <= 8) {
    document.write("뜨거운 여름입니다.", "<br />");
  } else if (curMonth >= 9 && curMonth <= 11) {
    document.write("시원한 가을입니다.", "<br />");
  } else {
    document.write("눈내리는 겨울입니다.", "<br />");
  }
} else {
  alert("유효한 값이 아닙니다.");
}

// 조건문은 데이터를 필터링하여 필요한 데이터만 추출하도록 도와주는 제어문

// 구매자의 등급에 따른 할인쿠폰 발송
/* 
VIP(100,000원 이상 구매고객) ==> 30% 할인쿠폰 제공
Gold(60,000원 이상 구매고객) ==> 20% 할인쿠폰 제공
Silver(10,000원 이상 구매고객) ==> 10% 할인쿠폰 제공
Bronze(10,000원 미만 구매고객 또는 구매이력 없는 고객) ==> 5% 할인쿠폰 제공
*/
// prompt를 통해서 입력된 값은 문자열로 저장이 된다.
// var buyPrice = prompt("지난달에 구매한 금액을 작성해주세요", "10000");
// document.write(buyPrice);
// if (buyPrice >= 100000) {
//   document.write(
//     "당신은 VIP 등급입니다. 마이페이지에서 30% 할인쿠폰을 확인바랍니다."
//   );
// } else if (buyPrice >= 60000) {
//   document.write(
//     "당신은 Gold 등급입니다. 마이페이지에서 20% 할인쿠폰을 확인바랍니다."
//   );
// } else if (buyPrice >= 10000) {
//   document.write(
//     "당신은 Silver 등급입니다. 마이페이지에서 10% 할인쿠폰을 확인바랍니다."
//   );
// } else {
//   document.write(
//     "당신은 Bronze 등급입니다. 마이페이지에서 5% 할인쿠폰을 확인바랍니다."
//   );
// }

/* 
VIP(100,000원 이상 구매고객) ==> 30% 할인쿠폰 제공
Gold(60,000원 이상 ~ 100,000원 미만 구매고객) ==> 20% 할인쿠폰 제공
Silver(10,000원 이상 ~ 60,000원 미만 구매고객) ==> 10% 할인쿠폰 제공
Bronze(10,000원 미만 구매고객 또는 구매이력 없는 고객) ==> 5% 할인쿠폰 제공
*/
// 이렇게 하면 순서가 썪여도 상관없다.
// var buyPrice = prompt("지난달에 구매한 금액을 작성해주세요", "10000");
// document.write(buyPrice);
// if (buyPrice >= 100000) {
//   document.write(
//     "당신은 VIP 등급입니다. 마이페이지에서 30% 할인쿠폰을 확인바랍니다."
//   );
// } else if (buyPrice >= 60000 && buyPrice < 100000) {
//   document.write(
//     "당신은 Gold 등급입니다. 마이페이지에서 20% 할인쿠폰을 확인바랍니다."
//   );
// } else if (buyPrice >= 10000 && buyPrice < 60000) {
//   document.write(
//     "당신은 Silver 등급입니다. 마이페이지에서 10% 할인쿠폰을 확인바랍니다."
//   );
// } else if (buyPrice < 10000) {
//   document.write(
//     "당신은 Bronze 등급입니다. 마이페이지에서 5% 할인쿠폰을 확인바랍니다."
//   );
// }

// 게임 캐릭터 특수 아이템(level 10+) 착용 가능여부를 확인
var myHeroLevel = 8;
var specialCloth = "화염갑옷";
if (myHeroLevel >= 10) {
  console.log(`당신은 ${specialCloth}을(를) 착용 가능합니다.`);
} else {
  console.log(`당신은 ${specialCloth}을(를) 착용 불가능합니다.`);
}

// 디바이스의 사이즈를 기준으로 구분하여 어떤 디바이스인지를 확인(PC, tablet, mobile)
// 1920(1200px 이상) - pc / 1200px 미만 - tablet(H/V) / 768px 미만 - mobile(H/V) => Horizon이나 Vertical이냐
var deviceWidth = 375; //375px
if (deviceWidth >= 1200) {
  console.log(`당신의 디바이스는 PC`);
  // PC 메뉴로 보여줘~
} else if (deviceWidth >= 768 && deviceWidth < 1200) {
  console.log(`당신의 디바이스는 Tablet`);
  // 반응형 메뉴로 보여줘~
} else {
  console.log(`당신의 디바이스는 Mobile`);
}

// 선택문 - 값이 정확하게 일치하는 경우 사용
// 지하쳘 호선에 따른 선택
var subwayNum = "7";
switch (subwayNum) {
  case "1":
    document.write(`군청색 1호선을 선택했습니다.`, "<br />");
    break;
  case "2":
    document.write(`녹색 2호선을 선택했습니다`, "<br />");
    break;
  case "3":
    document.write(`주황색 3호선을 선택했습니다`, "<br />");
    break;
  case "4":
    document.write(`파란색 4호선을 선택했습니다`, "<br />");
    break;
  default:
    document.write(`해당하는 정보는 제공되지 않습니다.`, "<br />");
}
// 입력창을 구성하여 세션별로 이미지 제공
// (1 -> 디자인 세션 이미지 / 2 -> 개발 세션 이미지 / 3 -> 마케팅 세션 이미지)
// var promptResult = prompt("당신이 선택한 세미나 번호를 입력하세요", "");
// switch (promptResult) {
//   case "1":
//     document.write(`<img src="./img/img_01.png" alt="디자인 세션 이미지">`);
//     break;
//   case "2":
//     document.write(`<img src="./img/img_02.png" alt="개발 세션 이미지">`);
//     break;
//   case "3":
//     document.write(`<img src="./img/img_03.png" alt="마케팅 세션 이미지">`);
//     break;
//   default:
//     alert("입력한 값이 유효하지 않습니다. 다시 작성해주세요.");
//     location.reload(); // 현재 창을 다시 로딩해주세요. 즉, 새로고침해라. 라는 뜻
// }

// 반복문 : 대상을 반복하여 구현하고자 할 때 사용
// 초기값(수), 조건식(Boolean(True|False)), 증감식(++, --) + 실행문
// while, do~while, 기본 for, for~in, for~of, forEach, map

// while문 : 1.초기값 -> 2.조건식 확인 -> 3.실행문 실행 -> 4.증감식
var i = 1; // 초기값
while (i <= 10) {
  // 조건식
  document.write(i, "<br />"); // 실행문
  i++; // 증감식
}
/*
i = 1 --> (1 <= 10) --> document.write(1, "<br />"); -(i++)-> i = 2
i = 2 --> (2 <= 10) --> document.write(2, "<br />"); -(i++)-> i = 3
i = 3 --> (3 <= 10) --> document.write(3, "<br />"); -(i++)-> i = 4
... 중간 생략 ...
i = 9 --> (9 <= 10) --> document.write(9, "<br />"); -(i++)-> i = 10
i = 10 --> (10 <= 10) --> document.write(10, "<br />"); -(i++)-> i = 11
i = 11 --> (11 <= 10) --> 반복문을 종료하고 나와라~~
*/

// 브라우저 화면상에 반복문을 이용하여 이미지를 구현하기 view1.jpg ~ view9.jpg
var j = 1;
while (j <= 9) {
  document.write(
    `<img style="width:120px;" src="./img/view${j}.jpg">`,
    "<br />"
  );
  j++;
}
document.write("<hr />");

// 실습문제 m_1.png ~ m_12.png 반복문 활용하여 화면에 표현하기(가로 사이즈만 80px로 스타일 조정)
var k = 1;
while (k <= 12) {
  document.write(`<img style="width:80px;" src="./img/m_${k}.png">`);
  k++;
}

// 박스를 10개 출력하는 과정에서 3의 배수인 곳에만 다른 색상을 부여
document.write(`<div style="display:flex;">`);

var pd = 1;
while (pd <= 10) {
  if (pd % 3 == 0) {
    document.write(
      `<div class="new" style="background-color:#faf">box-${pd}</div>`
    );
  } else {
    document.write(
      `<div class="best" style="background-color:#ffa">box-${pd}</div>`
    );
  }

  pd++;
}

document.write(`</div>`);

// do~while 반복문
//1. 초기값 -> 2. do에 의한 강제 실행문을 실행 -> 3. 증감식 -> 4. 조건식에 검사(true|false)
var m = 1; // 초기값
do {
  // 강제 실행
  document.write(m, "<br />");
  m++; // 증감식
} while (m <= 10); // 조건식
/*
m = 1 --do()--> document.write(1, "<br />"); -(m++)-> m = 2 --> 2 <= 10(true)
m = 2 --do()--> document.write(2, "<br />"); -(m++)-> m = 3 --> 3 <= 10(true)
... 중간생략 ...
m = 9 --do()--> document.write(9, "<br />"); -(m++)-> m = 10 --> 10 <= 10(true)
m = 10 --do()--> document.write(10, "<br />"); -(m++)-> m = 11 --> 11 <= 10(false - 반복문 종료)
*/
document.write("<hr />");

// 기본 for 반복문
/*
[형식]
for(초기값; 조건식; 증감식){
  실행문
}
[순서] 1.초기값 --> 2. 조건식 검사(true|false) --> 3. 실행문 --> 4. 증감식
*/
for (n = 1; n <= 10; n++) {
  document.write(n, "<br />");
}
/*
n = 1 --> 1 <= 10(true) --> document.write(1, "<br />"); -(n++)-> n = 2
n = 2 --> 2 <= 10(true) --> document.write(2, "<br />"); -(n++)-> n = 3
... 중간생략 ...
n = 9 --> 9 <= 10(true) --> document.write(9, "<br />"); -(n++)-> n = 10
n = 10 --> 10 <= 10(true) --> document.write(10, "<br />"); -(n++)-> n = 11
n = 11 --> 11 <= 10(false) --> 반복문 종료
*/

// 실습문제 : 1~40개의 박스를 구성
// 4의 배수에 배경색상을 #faf(분홍색)
// 3의 배수에 배경색상을 #afa(녹색)
// 12의 배수에 배경색상을 #ff0(노란색)
// 기본 스타일 선언은 width:80px; height:80px; border:1px solid red;
document.write(`<div style="display:flex; flex-wrap: wrap;">`);
for (p = 1; p <= 40; p++) {
  // 조건식에 의한 박스의 구성을 진행
  if (p % 12 == 0) {
    // p % 12 == 0을 먼저 씀으로써 뒤에 4와 3의 나머지를 구할 때 && p % 12 != 0을 할 필요가 없다.
    document.write(
      `<div class="box" style="background-color:#ff0; width:80px; height:80px; border:1px solid red">${p}</div>`
    );
  } else if (p % 4 == 0) {
    document.write(
      `<div class="box" style="background-color:#faf; width:80px; height:80px; border:1px solid red">${p}</div>`
    );
  } else if (p % 3 == 0) {
    document.write(
      `<div class="box" style="background-color:#afa; width:80px; height:80px; border:1px solid red">${p}</div>`
    );
  } else {
    document.write(
      `<div class="box" style="width:80px; height:80px; border:1px solid red">${p}</div>`
    );
  }
}
document.write(`</div>`);

// 반복문을 순한시키는 과정에서 강제 중단을 시켜야하는 부분을 설정
for (q = 1; q <= 10; q++) {
  if (q == 7) {
    break; // q의 값이 7이 되는 순간 반복문 탈출
  }
  document.write(q, "<br />");
}

document.write("<hr />");
// 반복문을 순환시키다가 한번 끊고 다음에 연속적으로 이어서 나오게 하는 방법
for (r = 1; r <= 10; r++) {
  if (r == 6) {
    continue; // 아래의 실행문을 실행시키지 말고 증감식으로 이동 -> 이어서 반복문을 순환시킴
  }
  document.write(r, "<br />");
}

// 중첩 반복문
for (s = 1; s <= 5; s++) {
  document.write(`<h3>제목${s}</h3>`);
  for (t = 1; t <= 4; t++) {
    document.write(`<p>내용${t}</p>`);
  }
}

// 중첩 for문을 활용한 캘린더 구성하기(1~30 + 1주)
var day = 1; // 전역변수
for (w = 1; w <= 5; w++) {
  // week
  document.write(
    `<div style="display:flex; flex-wrap:wrap; width:100%; height:80px; background-color:#eee; border:1px solid #f00">`
  );
  for (d = 1; d <= 7; d++) {
    document.write(
      `<div style="box-sizing: border-box; width:calc(100% / 7); height:80px; background-color:#7af; ">${day}</div>`
    );
    day++;
    if (day == 31) {
      break;
    }
  }
  // document.write(`${w}`);
  document.write(`</div>`);
}

/* 
day = 1 -(1차 for 1회차 반복시)-> 1주차 가로라인 외곽 구성 
            day = 1 -(2차 for 1회차 반복시)-> day는 1로 출력 -(day++)-> day = 2
            day = 2 -(2차 for 2회차 반복시)-> day는 2로 출력 -(day++)-> day = 3
            ... 중간 생략 ...
            day = 6 -(2차 for 6회차 반복시)-> day는 6로 출력 -(day++)-> day = 7
            day = 7 -(2차 for 7회차 반복시)-> day는 7로 출력 -(day++)-> day = 8

day = 8 -(1차 for 2회차 반복시)-> 2주차 가로라인 외곽 구성 
            day = 8 -(2차 for 1회차 반복시)-> day는 8로 출력 -(day++)-> day = 9
            day = 9 -(2차 for 2회차 반복시)-> day는 9로 출력 -(day++)-> day = 10

*/
