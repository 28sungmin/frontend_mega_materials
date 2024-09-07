document.write("<h2>배열 객체</h2>");
document.write("<p>필요한 만큼의 데이터 값(들)을 하나의 변수명에 저장할 수 있음</p>");
//배열 데이터와 객체 데이터 공통점 : 추가 생성이 가능하기 때문에 무한으로 데이터를 담을 수 있음
//배열 데이터와 객체 데이터 차이점
// - 객체 데이터 : key(분리공간의 항목이름)와 value(각 항목마다 담긴 데이터 또는 함수). 변수명.name을 호출하면 name에 담긴 데이터를 순서에 상관없이 가져올 수 있음
var hero = {
    name : "홍길동",
    word : "아버지를 아버지라...",
    action : function(){
        return "구름타고 슝~~";
    },
}
console.log(hero);
console.log(hero.name);
console.log(hero.action());

// - 배열 데이터 : 각 데이터마다 지정된 순서가 존재. 각 순서마다 인덱스번호가 붙는다. 0 -> 1 -> 2 -> ...  ==> 증감연산자(i++)로 데이터 추출이 가능

//배열의 패턴을 구성 : [이미지, 타이틀, 가격정보, 판매자 이름]
var $kakao_arr = ["kakao.jpg", "카카오 스티커", 1500, "라이언"];
console.log($kakao_arr); //['kakao.jpg', '카카오 스티커', 1500, '라이언']
console.log($kakao_arr[0]);  //"kakao.jpg"
console.log($kakao_arr[1]);  //"카카오 스티커"
console.log($kakao_arr[2]);  //1500
console.log($kakao_arr[3]);  //"라이언"
console.log($kakao_arr[4]);  //undefined ==> 데이터 없음

//데이터를 추출하는 과정에서 맨 좌측에 있는 데이터의 인덱스 번호는 0
//var $kakao_arr = [0번 인덱스 번호의 데이터, 1번 인덱스 번호의 데이터, 2번 인덱스 번호의 데이터, ...]
var i = 0;
console.log($kakao_arr[i]); //"kakao.jpg"
i++;  //i = 1
console.log($kakao_arr[i]); //"카카오 스티커"
i++;  //i = 2
console.log($kakao_arr[i]); //1500
i++;  //i = 3
console.log($kakao_arr[i]); //"라이언"

//i라는 변수를 기준으로 해당하는 데이터를 찾아가는 과정상에서 증감연산자를 사용하는 것이 가능

//배열 데이터를 활용하여 요일정보 표현하기(일요일:0 ~ 토요일:6)
document.write(`<h4>배열 데이터를 활용하여 요일정보 표현하기(일요일:0 ~ 토요일:6)</h4>`);
var $current = new Date();
var $day = $current.getDay();
console.log($day);
var yoil_arr = ["일", "월", "화", "수", "목", "금", "토"];
document.write(`<p>오늘은 ${yoil_arr[$day]}요일입니다.</p>`);

//요일을 이미지로 표현해야 한다면
var img_arr = ["sun", "mon", "tues", "wednes", "thurs", "fri", "satur"];
document.write(`<img src="./img/${img_arr[$day]}day.gif"><br />`);

//배열 데이터의 개수를 찾는 과정 : 배열 데이터 변수명.length
console.log(img_arr.length);

//push("새로운 데이터") : 배열 데이터의 맨 뒷자리에 추가
//pop() : 맨 마지막 인덱스를 삭제 
//shift() : 맨 처음 인덱스를 삭제
//unshift("새로운 데이터") : 배열 데이터의 첫번째에 추가
//러닝맨 멤버
var member = ["유재석", "김종국", "하하", "송지효", "양세찬", "지석진", "전소민"];
member.push("개리");
document.write(`러닝맨 멤버 : ${member} <br />`);
console.log(member); //['유재석', '김종국', '하하', '송지효', '양세찬', '지석진', '전소민', '개리']

member.pop();
document.write(`러닝맨 멤버 : ${member} <br />`);
console.log(member); //['유재석', '김종국', '하하', '송지효', '양세찬', '지석진', '전소민']

member.shift();
document.write(`러닝맨 멤버 : ${member} <br />`);
console.log(member); //['김종국', '하하', '송지효', '양세찬', '지석진', '전소민']

member.unshift("유재석");
document.write(`러닝맨 멤버 : ${member} <br />`);
console.log(member); //['유재석', '김종국', '하하', '송지효', '양세찬', '지석진', '전소민']
//member의 원본 데이터는 변경된다.


//배열 데이터끼리 합치는 concat() 메서드
document.write(`<h4>배열 데이터끼리 합치는 concat() 메서드</h4>`);
var chars = ["사과", "포도", "바나나"];
var nums = [1, 2, 3];
var numsChars = nums.concat(chars);
document.write(`nums가 chars를 합친 값 : ${numsChars} <br />`);
console.log(numsChars);

var charsNums = chars.concat(nums);
document.write(`chars가 nums를 합친 값 : ${charsNums} <br />`);
console.log(charsNums);

console.log(chars);
console.log(nums);

//배열 내부의 데이터를 합치는 join() 메서드 : 하나의 문자형 데이터로 구성
document.write(`<h4>배열 내부의 데이터를 합치는 join() 메서드</h4>`);
var $heroes = ["앤트맨", "스파이더맨", "캣우먼"];

var string1 = $heroes.join();
document.write(`join 메서드의 구분자가 없는 결과 : ${string1}`);
console.log(string1); //"앤트맨,스파이더맨,캣우먼"
console.log(typeof string1); //string

var string2 = $heroes.join("/");
document.write(`join 메서드의 구분자가 있는 결과 : ${string2}`);
console.log(string2); //"앤트맨/스파이더맨/캣우먼"
console.log(typeof string2); //string

var $movie = ["슈렉", "겨울왕국", "장화신은 고양이"];

//[잠깐 실습]
//앤트맨~스파이더맨~캣우먼~슈렉~겨울왕국~장화신은 고양이
//concat() 활용하여 배열을 합치고, 
//join() 활용하여 문자형 데이터로 합치되 구분자를 "~"로 구분하여야 한다면
//(방법1)
var $heroesMovie = $heroes.concat($movie);
console.log($heroesMovie);
var $string_rst1 = $heroesMovie.join("~");
console.log($string_rst1);  //앤트맨~스파이더맨~캣우먼~슈렉~겨울왕국~장화신은 고양이

//(방법2)
var $string_rst2 = $heroes.concat($movie).join("~");  //체이닝 기법(& 개념)
console.log($string_rst2);  //앤트맨~스파이더맨~캣우먼~슈렉~겨울왕국~장화신은 고양이

//앤트맨~스파이더맨~캣우먼~슈렉~겨울왕국~장화신은 고양이 => ['앤트맨', '스파이더맨', '캣우먼', '슈렉', '겨울왕국', '장화신은 고양이']
console.log($string_rst2.split("~"));

//[실제 웹사이트에서 split을 어디서 활용하고 있을까?]
//https://comic.naver.com/webtoon/list?titleId=814048
var webToonUrl = "https://comic.naver.com/webtoon/list?titleId=814048"
var webToonCode = webToonUrl.split("=");
console.log(webToonCode);
console.log(webToonCode[1]);
//최종 요청 넘버는 webToonCode[1]

//배열 데이터 내에서 원하는 위치에 요소(데이터)를 추가 / 삭제하는 splice() 메서드
document.write(`<h3>배열 데이터 내에서 원하는 위치에 요소(데이터)를 추가 / 삭제하는 splice() 메서드</h3>`);

document.write(`<h4>[인수가 한 개인 경우]  배열변수명.splice(인덱스번호) : 배열데이터의 지정한 인덱스 번호로부터 마지막 인덱스 번호까지 잘라서 반환</h4>`);
var $numbers = [1, 2, 3, 4, 5];
var $oneSplice = $numbers.splice(2);
console.log($oneSplice); //[3, 4, 5]
console.log($numbers); //[1, 2](원본 데이터가 변경)

document.write(`<h4>[인수가 두 개인 경우]  배열변수명.splice(인덱스번호, 개수) : 배열데이터의 지정한 인덱스 번호로부터 개수까지 잘라서 반환</h4>`);
var $study = ["HTML5", "CSS3", "Javascript", "SQL"];
var $twoSplice = $study.splice(1, 2);
console.log($twoSplice); //['CSS3', 'Javascript']
console.log($study); //['HTML5', 'SQL'](원본 데이터가 변경)

document.write(`<h4>[인수가 세 개인 경우]  배열변수명.splice(인덱스번호, 개수, 추가할 데이터) : 배열데이터의 지정한 인덱스 번호로부터 개수까지 자르고 잘리어진 위치에 추가할 데이터를 넣는다.</h4>`);
var $device = ["iPhone15", "갤럭시24", "Macbook", "Gram"];
var $threeSplice = $device.splice(1, 2, "iPad");
console.log($threeSplice); //['갤럭시24', 'Macbook']
console.log($device); //['iPhone15', 'iPad', 'Gram'](원본 데이터가 변경)

document.write(`<h4>[인수가 세 개 이상인 경우]  배열변수명.splice(인덱스번호, 개수, 추가할 데이터1, 추가할 데이터2) : 배열데이터의 지정한 인덱스 번호로부터 개수까지 자르고 잘리어진 위치에 추가할 데이터를 넣는다.</h4>`);
var $color = ["레드", "옐로우", "그린", "민트", "블루"];
var $upThreeSplice = $color.splice(2, 2, "옐로우그린", "스카이");
console.log($upThreeSplice); //['그린', '민트']
console.log($color); //['레드', '옐로우', '옐로우그린', '스카이', '블루'](원본 데이터가 변경)

//[잠깐 실습 - splice() 메서드] 우리반에 학생 5명이 존재("영희", "수현", "하늘", "하나", "덕선")
//두명이 전학을 갔습니다. ("하늘", "하나")
//한명이 전학을 왔습니다. ("보검") -> 전학간 학생의 자리에 앉았습니다.
//최종적으로 변경된 인원을 배열 데이터로 정렬한 후, 전학온 학생의 데이터 값을 배열의 인덱스번호로 출력 하세요.
//(최종 결과) "보검"
var $myClass = ["영희", "수현", "하늘", "하나", "덕선"];
var $changeClass = $myClass.splice(2, 2, "보검");
console.log($changeClass); //['하늘', '하나']
console.log($myClass); //['영희', '수현', '보검', '덕선']
console.log($myClass[2]); //보검

//[실습문제] 원본 배열 데이터에
//["곰인형", "꽃다발", "화장품"] ==splice() 메서드==> ["곰인형", "꽃다발", "스타벅스 쿠폰카드", "향수", "화장품"] 특정 위치에 배열 데이터 추가

//기존 배열 데이터로부터 데이터를 변경하지 않으면서 요소를 꺼내는 slice() 메서드
document.write(`<h4>[인수가 한 개인 경우]  배열변수명.slice(인덱스번호) : 배열데이터의 지정한 인덱스 번호로부터 마지막 데이터까지 꺼낸다.</h4>`);
var $color = ["Red", "Orange", "Yellow", "Green", "Blue"];
var $oneSlice = $color.slice(2);
console.log($oneSlice); //['Yellow', 'Green', 'Blue']
console.log($color); //['Red', 'Orange', 'Yellow', 'Green', 'Blue']

document.write(`<h4>[인수가 두 개인 경우]  배열변수명.slice(인덱스번호1, 인덱스번호2) : 배열데이터의 지정한 인덱스 번호1로부터 지정한 인덱스 번호2 직전까지의 데이터를 꺼낸다.</h4>`);
var $twoSlice = $color.slice(2, 4);
console.log($twoSlice); //['Yellow', 'Green']
console.log($color); //['Red', 'Orange', 'Yellow', 'Green', 'Blue']
/*
[splice() VS slice()]
 공통점 : 기존 배열데이터에서 추출하는 과정은 유사
 차이점 : 
    - splice() : 원본 데이터 변경의 원인(삭제, 추가, 변경) => 원본 데이터가 중심
    - slice() : 원본 데이터 변경 없음 => 잘라낸 데이터가 중심
*/