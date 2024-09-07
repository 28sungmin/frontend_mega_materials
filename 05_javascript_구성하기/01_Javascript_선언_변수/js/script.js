// 외부 스크립트 연동
document.write("Hello, Javascript. 홍길동");

// 한 줄 주석처리
// 한 줄 주석처리

/*
여러 줄 주석처리
여러 줄 주석처리
여러 줄 주석처리
여러 줄 주석처리
*/

//[자바스크립트를 통한 브라우저에서 제공되는 팝업창 형태 - 경고창, 입력창, 확인창]
// #1. 경고창 : 경고 메시지를 제공 -> 디자인이 다 달라서 잘 쓰지는 않는다.
// alert("이곳은 경고창입니다.");
// 개발자가 설정해놓은 기준범위를 벗어났을 경우, 경고창을 띄운다.
// 예시, alert('아이디 값이 없습니다.');

// #2. 입력창 : 무언가를 질문(요청)에 대한 답변을 사용자가 직접 입력하도록 할 때 사용
// prompt("당신은 하루에 얼마나 걸으시나요?:", "10000");
// prompt 창의 입력 후, 전송되는 값은 변수의 데이터(문자형 데이터)로 존재한다.

// #3. 확인창 : 확인 및 취소라는 버튼 존재
// confirm("정말 회원탈퇴를 하시겠습니까?");
// 확인 버튼을 눌렀을 때는 true, 취소 버튼을 눌렀을 때는 false

//================================================================
// #4. console.log(데이터) : 최종적으로 표현하거나 확인하고자 하는 데이터를 console 이라는 창에서 봐야할 경우 사용
var myFavoriteFruit = "키위";
console.log(myFavoriteFruit);
console.log("가장 맛있는 음식 : 집밥");
// 하나의 메모리 공간에 정확한 데이터값이 담기는지를 확인이 가능

// #5. 변수 => 그릇. 그릇의 내용물은 언제든지 바꿀 수 있음(메모리가 존재한다는 의미)
// 변수의 구성 :
// var 변수명 = 변수값; (various)
// let 변수명 = 변수값; (let => 허용하다)
// const 변수명 = 변수값; (const => 건물)
document.write("<h3>변수</h3>");
var order = "자장면";
document.write(order, "<br />"); // 자장면 출력됨
order = "송이덮밥";
document.write(order, "<br />"); // 송이덮밥 출력됨
// Uncaught ReferenceError: order1 is not defined => order1이라는 변수명은 코드상 상위에서 선언한 적이 없기 때문에 에러처리 된다.
//document.write(order1, "<br />");

// 변수의 내용을 출력한다는 의미는 최종적으로 선언된 값을 출력한다와 동일한 개념. 출력시점마다 다른 결과물을 가져올 수 있다.

// 게임 캐릭터 만들기(이름)
var myHeroName = "불꽃 나이트 ";
myHeroName = "토마토 제배자";
document.write("이름 : " + myHeroName, "<br />");

// 기록 채팅장 구성하여 이후 문장을 구성하기
var myNickName = "이성민";
var msg; // 채팅장을 오픈했을 때, 작성되지 않은 빈 공간을 구성 => 그릇만 구성한다.
document.write(myNickName + " : " + msg, "<br />");
msg = "오늘은 뭐 먹지?";
// undefined : 그릇은 있지만, 값이 정해져 있지 않아.

// #6. 변수명 선언시 주의사항(반드시 기억을 할 것 ~~!!)
document.write("<h3>변수명 선언시 주의사항(반드시 기억할 것 ~~!!)</h3>");
// #6-1. 대소문자를 구분하여 작성한다.
var age = 10;
document.write(age, "<br />");

// #6-2. 변수명 첫글자는 '$', '_', 영문(한글)만 작성할 수 있음. (숫자 불가) )
// var 12num = 12;
// document.write{12num, "<br />"}; // Uncaught SyntaxError: Invalid or unexpected token
var $12num = 12;
document.write($12num, "<br />");

var _favCoffee = "아이스 아메라키노";
document.write(_favCoffee, "<br />");

// 되도록 한글 변수명은 지양하기
var 포켓몬빵 = "꼬부기 빵";
document.write(포켓몬빵, "<br />");

// #6-3. 변수명 내부(첫 글자 제외)에는 '$', '_', '영문(한글 포함)', '숫자'까지만 작성할 수 있음(사칙연산 + - * / % 불가), 절대 띄어쓰기 하지 말 것.
var num32 = 32;
document.write(num32, "<br />");
var apple_1 = "사과 한 개";
document.write(apple_1, "<br />");

//var orange-1 = "오렌지 박스";
// script.js:87 Uncaught SyntaxError: Unexpected token '-'
//document.write(orange-1, "<br />");

// var food1 food2 = "갈비탕";
// Uncaught SyntaxError: Unexpected identifier 'food2'
// document.write(food1 food2, "<br />");

var food3,
  food4 = "설렁탕";
document.write(food3, "<br />"); // undefined
document.write(food4, "<br />"); // 설렁탕

// var food5, food6 = "미역국", "육개장";
// Uncaught SyntaxError: Unexpected string
// document.write(food5, "<br />");
// document.write(food6, "<br />");

// 복수의 변수명을 한번에 선언할 때는 초기 변수명만 선언하고 나중에 데이터를 담는다.
// 이렇게 변수명을 만들어놓고 따로 따로 값을 입력하는 거다.
var food7, food8;
food7 = "볶음밥";
food8 = "해장국";
document.write(food7, "<br />");
document.write(food8, "<br />");

// #6-4. 변수명에는 자바스크립트 예약어를 사용할 수 없다.
var document = "문서공간입니다.";
// [object HTMLDocument] : "document는 예약어야". 라는 의미를 나타냄.
document.write(document, "<br />"); //[object HTMLDocument]

var $document = "문서공간입니다.";
document.write($document, "<br />"); // 문서공간입니다.

// #6-5. 카멜기법(userName)으로 변수명 선언, 파스칼기법(UserName)으로 변수명 선언
var userName = "홍길동";
document.write(userName, "<br />");
var UserName = "홍길순";
document.write(UserName, "<br />");

// #7. 문자형 데이터(string) : 변수의 값이 '데이터'(작은 따옴표) 또는 "데이터"(큰 따옴표)로 감싸진 형태
var korSoccer = "손흥민";

var korSoccerShootingNum = "12";
document.write(
  korSoccer + "의 득점 수 : " + korSoccerShootingNum + "골",
  "<br />"
);
// 문자형 + 숫자형 이라서 13이 아니라 121이 나온다.
document.write(korSoccerShootingNum + 1, "<br />");

// 올해의 연도
// 내년의 연도
var thisYear = "2024";
document.write("올해의 연도 : " + thisYear + "년", "<br />"); // "2024"
console.log(thisYear); // console 창에서 검은색으로 나온다. => 문자형

// 20241이 나온다.
var nextYear = thisYear + 1;
document.write("내년의 연도 : " + nextYear + "년", "<br />"); // "20241"
console.log(nextYear);

// 2025가 나온다.
var nextYearNum = Number(thisYear) + 1;
document.write("내년의 연도 : " + nextYearNum + "년", "<br />"); // 2025
console.log(nextYearNum); // console 창에서 파란색으로 나온다. => 숫자형

// 쇼핑몰 가격정보 "10,000" 처럼 ,가 들어가면 문자형이 된다. ,가 들어가면 숫자형으로 표현을 못 한다.
// 40% 할인이라면 10000 * 0.6(숫자형 계산) => "6,000"(문자형으로 변환)이 되어야 함.

// 태그를 포함한 문자형 데이터를 브라우저에 표현하기
var $str_title = "<h3 class='title'>카카오 프렌즈</h3>";
document.write($str_title);
// index.html에서 img로 가는 경우인거다.
// 왜냐하면, 자바스크립트에서 선언된 미디어 소스 정보는 그냥 문자 선언에 불과함. 최종적으로 문자가 도달하는 공간을 기준으로 경로 설정을 해주어야 함.
var $str_img = "<img src= './img/kakao.gif' />";
document.write($str_img);

// 실습문제(문자형 데이터) img_1.jpg 파일을 브라우저에 출력해보기.
// (단, 300*200 공간에 구성(클래스명을 연동하여)한 후, 배경이미지로 미디어 파일을 연동)
// url 안에 큰 따옴표 넣으면 안됨.
// bgi를 style.css에 넣으려면은 경로를 ../img/img_1.jpg로 넣어야 함.
var $str_bg =
  "<div class='str_bg' style='background-image: url(./img/img_1.jpg)'></div>";
document.write($str_bg);

//String(변수명), 변수명.toString() : 숫자형을 문자형으로 변경시 사용되는 메서드(명령)

// #8. 숫자형 데이터

// 형변환
// Number(변수명) : 문자형 => 숫자형
// parseInt(변수명) : 문자형 => 정수 숫자형(소수점 이하는 버린다.)
// parseFloat(변수명) : 문자형 => 실수 숫자형
// 수 > 실수 > 정수
// #8-1. Number("3.14");
var $no_01 = Number("3.14");
document.write($no_01, "<br />");
console.log($no_01);

// #8-2. parseInt("3.14");
// 소수점 아래는 반올림 하지 않고 그냥 버린다.
var $no_02 = parseInt("3.14");
document.write($no_02, "<br />");
console.log($no_02);

// #8-3. parseFloat("3.14");
// 소수점 아래는 반올림 하지 않고 그냥 버린다.
var $no_03 = parseFloat("3.14");
document.write($no_03, "<br />");
console.log($no_03);
console.log(typeof $no_03); // Number

console.log(typeof "3.14"); // String

// #9. 논리형 데이터(boolean) : true 또는 false
// true, false는 ""로 감싸면 안된다. -> 숫자형이 아님에도 console 창을 보면 파란색으로 나온다.
// 두 수에 대한 비교
// 페이지를 넘길 때 사용
// 예를 들어서, <<, < 표시 있을 대 << 누르면 바로 1페이지로 넘어가는 경우 같은 것에서 사용한다.
var thanNum = 24 < 13;
console.log(thanNum); // false

var boolTxt = true;
console.log(boolTxt);

// 페이스북 가입연령
var kidAge = 12; // 가입하고자 하는 사용자의 나이 데이터
var facebookRegisterPermit = kidAge > 13;
document.write("페이스북 가입 가능여부 : " + facebookRegisterPermit, "<br />");

// 카톡에서 어떠한 값도 입력하지 않은 상태에서 전송버튼을 클릭했다면?
var bool_01 = Boolean("");
document.write(bool_01, "<br />"); // false
// 입력한 값이 하나라도 있으면 true 나온다.
var bool_02 = Boolean("솜사탕");
document.write(bool_02, "<br />");

// #10. undefined : 변수명만 존재하고 어떠한 값도 대입하지 않은 경우
// 즉, (초기 데이터 없음 또는 전달받은 데이터 없음)
var boul;
document.write(boul, "<br />"); // undefined
console.log(boul); // undefined

// #11. null : 처음부터 유효한 값이 아니라고 정의하거나, 값이 없음이라고 선언한 상태
var noValue = null;
document.write(noValue, "<br />"); // null
console.log(noValue); // null
