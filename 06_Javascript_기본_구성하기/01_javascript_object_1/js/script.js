//기본문법의 구성
//객체 : Object(객체)
// 변수명 = 단일 데이터(문자형, 숫자형, 논리형, undefined, null)
// 변수명 = {key1 : value1, key2 : value2, ...} => 객체
// samsungTV = {screenSize : "42인치", color : "white", ...}
// 변수명 = ["view_01.jpg", "view_02.jpg", ...] => 배열
//내장객체 : 날짜 객체, 수학 객체, 문자 객체, 배열 객체
//문서객체모델(DOM) : HTML 문서 내부에 선택, 조정하면 변화를 시킬 수 있음
//함수 : 원인과 결과로 문서상의 모든 이벤트를 대응할 수 있는 예약을 걸어둠(함수 메모리)
//이벤트 : User가 어떤 행동을 취함에 따라 함수의 결과를 불러오도록 구성
//브라우저객체모델(BOM) : 문서 이외의 공간에 대한 정보를 취득할 수 있음(방문기록, 웹브라우저의 이름/버전/... => 크로스브라우저)

//객체(object)란? 하나 이상의 특징을 갖고 있는 사물
document.write(`<h2>객체</h2>`);

var phone = {
    name : "iPhone17",
    color : "metal gray", 
    size : "8inches",
}
console.log(phone);
console.log(phone.name);
console.log(phone.color);

//게임 캐릭터 구성
var myCharacter = {
    shape : "character.gif",
    name : "피카츄",
    level : 1,
    skill: "백만볼트",
    hp : 100,
    ep : 0,
};
document.write(`<img src="./img/${myCharacter.shape}"><br />`);
document.write(`나의 캐릭터 이름 : ${myCharacter.name}<br />`);
document.write(`현재 나의 레벨 : ${myCharacter.level}<br />`);

document.write(`게임이 시작되었습니다. ${myCharacter.name}가 모험을 떠납니다.<br />`);

document.write(`${myCharacter.name}가 끝판왕에게 ${myCharacter.skill}로 공격을 합니다.<br />`);

myCharacter.level++;
document.write(`현재 나의 레벨 : ${myCharacter.level}<br />`);
//기존 경험치(ep)에서 50을 올려준다. 현재 나의 경험치 : ??
//기존 체력(hp)에서 100을 올려준다. 현재 나의 체력 : ??
myCharacter.ep += 50;
myCharacter.hp += 100;
document.write(`현재 나의 경험치 : ${myCharacter.ep}<br />`);
document.write(`현재 나의 체력 : ${myCharacter.hp}<br />`);

//날짜 객체(Date)
//로컬 컴퓨터(PC, Device)의 시스템으로 정보를 받아서 활용하겠다고 선언
//Date() : 날짜 및 시간 정보를 가져오세요~~
var $today = new Date();
console.log($today);

var $cur_year = $today.getFullYear();
document.write(`${$cur_year}년`);

var $cur_month = $today.getMonth() + 1;
document.write(`${$cur_month}월`); //getMonth() 컴퓨터 상에서 인식하는 첫번째 숫자를 0으로 인식 => 1월의 데이터 값은 0, 2월의 데이터 값은 1, ...  

var $cur_date = $today.getDate();
document.write(`${$cur_date}일`); //getDate() 컴퓨터 상에서 서수개념으로 인지

var $cur_day = $today.getDay();
// document.write(`${$cur_day}요일`); //일 : 0, 월 : 1, 화 : 2 
if ($cur_day == 0) {
    document.write(`(일)`);
} else if($cur_day == 1){
    document.write(`(월)`);
} else if($cur_day == 2){
    document.write(`(화)`);
} else if($cur_day == 3){
    document.write(`(수)`);
} else if($cur_day == 4){
    document.write(`(목)`);
} else if($cur_day == 5){
    document.write(`(금)`);
} else if($cur_day == 6){
    document.write(`(토)`);
}

var $cur_hours = $today.getHours();
//document.write(`${$cur_hours}시`);  //0~23
//오전 => 오전 0시 0분 0초 ~ 오전 11시 59분 59초
//오후 => 오후 12시 0분 0초 ~ 오후 1시 0분 0초 ~ 오후 11시 59분 59초
if ($cur_hours >= 12) { //오후 시간대
    if($cur_hours < 13){ //오후 12시일때
        document.write(`오후 ${$cur_hours}시`);
    }else{ //오후 1시(13) ~ 오후 11시(23)
        document.write(`오후 ${$cur_hours - 12}시`);
    }
} else { //오전 시간대
    document.write(`오전 ${$cur_hours}시`);
}

var $cur_min = $today.getMinutes();
document.write(`${$cur_min}분`);

var $cur_sec = $today.getSeconds();
document.write(`${$cur_sec}초`);

//1초 = 1000밀리초
var $cur_milliSec = $today.getMilliseconds();
document.write(`${$cur_milliSec}`);
//인터벌(주기) 설정 => 데이터를 주기적으로 받아온다.

document.write(`<br />`);
var $cur_getTime = $today.getTime();  //1970년 1월 1일 자정으로부터 시간 정보를 받아옴(밀리세컨드 단위)
document.write(`1970년 1월 1일 자정으로부터 시간 정보 : ${$cur_getTime}<br />`);
//응용파트 : 자동 로그아웃 기능, 24시간 동안 팝업 열지 않기, D-day 계산기

//계절별 이미지 바꿔주기
if ($cur_month >= 3 && $cur_month <= 5) {
    document.write(`<img src="./img/img-m.jpg" style="width: 100px;">`);
} else if ($cur_month >= 6 && $cur_month <= 8) {
    document.write(`<img src="./img/img-s.jpg" style="width: 100px;">`);
} else if ($cur_month >= 9 && $cur_month <= 11) {
    document.write(`<img src="./img/img-f.jpg" style="width: 100px;">`);
} else {
    document.write(`<img src="./img/img-w.jpg" style="width: 100px;">`);
}

//태어난 날짜로부터 경과일 계산하기(b+0000)
var now = new Date();
var birthDay = new Date("1979-10-04");
console.log(birthDay);
var toNow = now.getTime();
console.log(toNow);
var toBirth = birthDay.getTime();
console.log(toBirth);
//현재 시각으로부터 태어난 날짜의 시각을 빼준다.
var passedTimed = toNow - toBirth;
/*
1일 = 24시간
1시간 = 60분
1분 = 60초
1초 = 1000밀리세컨드
*/
var passedDate = Math.round(passedTimed / (24 * 60 * 60 * 1000));
console.log(passedDate);
document.write(`<br>내가 살아온 일자 : ${passedDate}일`);

//수학객체 : 일반적으로 숫자형 데이터만으로는 적용할 수 없는 다소 복잡한 결과물을 도출시 사용
document.write(`<h3>수학객체</h3>`);
var num_01 = 300000;
var ch_standardNum = num_01.toExponential(3);
console.log(ch_standardNum); //3.000e+5
console.log(typeof ch_standardNum); //string

var num_02 = 1234.5678;
var ch_fixedNum = num_02.toFixed(2);
console.log(ch_fixedNum); //1234.57
console.log(typeof ch_fixedNum); //string

var num_03 = 1235.5678;
var ch_precisionNum = num_03.toPrecision(3);
console.log(ch_precisionNum); //1.24e+3
console.log(typeof ch_precisionNum); //string

var bxWidth = "30.5px";
console.log(parseInt(bxWidth));  //30(number) => 숫자형으로 변환되는 과정에서 내부의 문자를 빼준다.

var $num_max = Math.max(27, 36, 5, 76);
document.write(`나열된 숫자 중에서 가장 큰 값 : ${$num_max}<br />`);

var $num_min = Math.min(27, 36, 5, 76);
document.write(`나열된 숫자 중에서 가장 작은 값 : ${$num_min}<br />`);

var $num = 1234.5678;
var $round = Math.round($num);
document.write(`소수점 첫번째 자리에서 반올림한 값 : ${$round}<br/>`);

var $ceil = Math.ceil($num);
document.write(`소수점 첫번째 자리에서 올림한 값 : ${$ceil}<br/>`); //게시판에서 1페이지당 10개를 보여주어야 한다. 게시글이 101개

var $floor = Math.floor($num);
document.write(`소수점 첫번째 자리에서 내림한 값 : ${$floor}<br/>`);

var $random = Math.random(); //
document.write(`0~1 사이의 난수를 무작위로 반환한다. : ${$random} <br />`);

//1~10 사이의 값을 랜덤으로 반환시켜야 한다.
var int_01 = Math.ceil(Math.random() * 10);
document.write(`1~10 사이의 값을 랜덤으로 반환 : ${int_01} <br/>`);
/*
    최소값 : 0.0001 * 10 = 0.001 ==ceil()==> 1
    최대값 : 0.9999 * 10 = 9.999 ==ceil()==> 10
*/

var randomImg = Math.ceil(Math.random() * 4); //1 ~ 4
/*
    최소값 : 0.0001 * 4 = 0.0004 ==ceil()==> 1
    최대값 : 0.9999 * 4 = 3.9996 ==ceil()==> 4
*/
document.write(`<img src="./img/shop_0${randomImg}.jpg"><br />`);

//로또 번호 랜덤으로 가져오기(1~46)
var lottoNum = Math.ceil(Math.random() * 46);
document.write(`1~46 까지 로또 번호 추출하기 : ${lottoNum}<br/>`);

var randomImg = Math.floor(Math.random() * 4 + 1); //1 ~ 4
/*
    최소값 : 0.0001 * 4 + 1 = 1.0004 ==floor()==> 1
    최대값 : 0.9999 * 4 + 1 = 4.9996 ==floor()==> 4
*/
document.write(`<img src="./img/shop_0${randomImg}.jpg"><br />`);


