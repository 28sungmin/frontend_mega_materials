document.write("<h2>연산자</h2>");

/* 
산술연산자(+, -, *, /, %), 
문자결합 연산자(문자 데이터 + 문자 데이터), 
대입연산자(변수명=변수값)/복합대입연산자(+=, -=, *=, /=, %=), 
증감연산자(++, --), 
비교연산자(<, >, <=, >=, ==, !=, ===, !==), 
논리연산자(||, &&, !)
*/

// #1. 산술연산자 : 무조건 숫자형 데이터만 가능하다.
document.write("<h3>산술연산자</h3>");
var $num_01 = 12;
var $num_02 = 5;

var rst_01 = $num_01 + $num_02;
document.write("더한 값 : " + rst_01, "<br />");
var rst_02 = $num_01 - $num_02;
document.write("뺀 값 : " + rst_02, "<br />");
var rst_03 = $num_01 * $num_02;
document.write("곱한 값 : " + rst_03, "<br />");
var rst_04 = $num_01 / $num_02;
document.write("나눈 값 : " + rst_04, "<br />");

var rst_05 = $num_01 % $num_02;
document.write("나눈 후 나머지값 : " + rst_05, "<br />");
/*
    12 % 5 => 2

    0 % 5 => 0;
    1 % 5 => 1;
    2 % 5 => 2;
    3 % 5 => 3;
    4 % 5 => 4;
    5 % 5 => 0;

    63 % 5 => 3;
    n % 5 = 0이 된 경우, n은 5의 배수
*/
// 남성(1, 3), 여성(2, 4)
var gender = 4;
// gender % 2 == 0 인 경우는 여성, 1인 경우는 남성
document.write(gender % 2, "<br />");
// airbnb에서 호스트(2xxxxxxx), 게스트(1xxxxxxx)

// #2. 문자결합연산자 : 문자형 + 문자형 => 문자형 / 문자형 + 숫자형 => 문자형
var string_01 = "1200";
var string_02 = "2400";
var number_01 = 1200;

var sum_str = string_01 + string_02;
document.write(sum_str, "<br />");
document.write(typeof sum_str, "<br />");

var sum_multi = string_01 + number_01;
document.write(sum_multi, "<br />");
document.write(typeof sum_multi, "<br />");

var $str_01 = "빙그레 바나나 우유";
var $num_01 = 1;
var $num_02 = 1;

var $result = $str_01 + $num_01 + $num_02; //빙그레바나나우유11
// $str_01 + ($num_01 + $num_02)를 하면 빙그레바나나우유2 가 나온다.
// () : 우선결합
document.write($result, "<br />");

// #3. 대입연산자 / 복합대입연산자
document.write("<h3>대입연산자 / 복합대입연산자</h3>");
// #3-1. 대입연산자
var first = "홍길동";
var second = first;
var third = second;
document.write(third, "<br />");
// #3-2. 복합대입연산자
var $no_01 = 24;
var $no_02 = 8;

$no_01 += $no_02; // $no_01 = $no_01 + $no_02 =>[해석] 24 + 8 => $no_01 = 32
document.write($no_01, "<br />"); // 32
$no_01 -= $no_02; // $no_01 = $no_01 - $no_02 =>[해석] 32 - 8 => $no_01 = 24
document.write($no_01, "<br />"); // 24
$no_01 *= $no_02; // $no_01 = $no_01 * $no_02 =>[해석] 24 * 8 => $no_01 = 192
document.write($no_01, "<br />"); // 192
$no_01 /= $no_02; // $no_01 = $no_01 / $no_02 =>[해석] 192 / 8 => $no_01 = 24
document.write($no_01, "<br />"); // 24
$no_01 %= $no_02; // $no_01 = $no_01 % $no_02 =>[해석] 24 % 8 => $no_01 = 0
document.write($no_01, "<br />"); // 0

// 복합대입연산자 중에서 중요 포인트는 문자간의 연속성을 갖고 있는 결합
var $txt = "a";
console.log($txt);
$txt += "b";
console.log($txt);
$txt += "c";
console.log($txt);

// 복합대입연산을 통한 주소의 결합
var address1 = "서울시 서초구 강남대로123 ";
var address2 = "메가스터디 빌딩 3층 1호 ";
var userName = "홍길동";
address1 += address2;
address1 += userName;
console.log(address1);

// 복합대입연산자를 통한 테이블 구성(<table>~<tr>~<td> : 1행 3열)
var $t = "<table border='1'>";
$t += "<tr>";
$t += "<td>1</td>";
$t += "<td>2</td>";
$t += "<td>3</td>";
$t += "</tr>";
$t += "</table>";

document.write($t, "<br />");
console.log($t);

// 복합대입연산자를 활용한 이미지 박스 구성하기
var $pd = "";
$pd += "<div class='frame'>";
$pd += "<div class='box'>1</div>";
$pd += "<div class='box'>2</div>";
$pd += "<div class='box'>3</div>";
$pd += "<div class='box'>4</div>";
$pd += "</div>";

document.write($pd, "<br />");

// 복합대입연산자를 활용하여 1~10까지 더한 최종값을 화면에 표현하시오. (최종값은 55)
var $no = 1;
$no += 2;
$no += 3;
$no += 4;
$no += 5;
$no += 6;
$no += 7;
$no += 8;
$no += 9;
$no += 10;
document.write($no, "<br />");

// #4. 증감연산자
// 증가 연산자(1씩 더한다) : ++변수명, 변수명++
// 감소 연산자(1씩 빼준다) : --변수명, 변수명--

var pd_num = 12;
document.write("A 상품의 개수 : " + pd_num + "개", "<br />");
// `문자1 ${변수명} 문자2` (백틱)
document.write(`A 상품의 개수 : ${pd_num}개`, "<br />"); // 12

// 장바구니에서 + 버튼을 1회 클릭시
++pd_num; // pd_num = pd_num + 1
document.write(`A 상품의 개수 + 1 : ${pd_num}개`, "<br />"); //13
// 장바구니에서 + 버튼을 2회 클릭시
pd_num++;
document.write(`A 상품의 개수 + 1 : ${pd_num}개`, "<br />"); //14

// 장바구니에서 - 버튼을 1회 클릭시
--pd_num; // pd_num = pd_num - 1
document.write(`A 상품의 개수 - 1 : ${pd_num}개`, "<br />"); //13
// 장바구니에서 - 버튼을 2회 클릭시
pd_num--; // pd_num = pd_num - 1
document.write(`A 상품의 개수 - 1 : ${pd_num}개`, "<br />"); //12

// 증감연산자 - 선행처리(++변수명 또는 --변수명) vs 후행처리(변수명++ 또는 변수명--) => 백엔드에서 필요
// 위의 경우처럼 혼자서 단독으로 쓰이는 경우는 선행처리와 후행처리를 신경쓸 필요가 없다.
var $a = 10;
var $b;
$b = ++$a;
document.write(`$a의 결과값 : ${$a}`, "<br />");
document.write(`$b의 결과값 : ${$b}`, "<br />");

var $c = 10;
var $d;
$d = $c++;
document.write(`$c의 결과값 : ${$c}`, "<br />");
document.write(`$d의 결과값 : ${$d}`, "<br />");

var a = 1;
var b = a++;
console.log(b);
console.log(a);

var c = 1;
var c = c++;
console.log(c); //1 => 좌변의 c, 즉 값이 담기는 그릇이 중요한 거다. 처음에 1이 담긴 것이므로 답은 1이다.

// #5. 비교연산자: 결과값은 true 또는 false만 나온다.
document.write("<h3>비교연산자</h3>");
var $p = 10;
var $q = 12;
var $r = "10";

var $result_than;
$result_than = $p <= $q; // 10 <= 12 -> true
document.write($result_than, "<br />");

$result_than = $r <= $q; // 원칙상 안되는 것이지만, 자바스크립트는 중간중간 취약한 부분들이 있다. 그 부분들 중에 하나. -> true 출력됨
document.write($result_than, "<br />");

// 같다(==) : 데이터의 타입에 관계없이 화면상 출력되는 값이 같다면 동일여부로 판단
// 정말~같다(===) : 데이터의 타입과 화면상의 출력되는 값이 모두 같아야 동일여부로 판단
$result_than = $p == $r;
document.write($result_than, "<br />"); // true 출력

$result_than = $p === $r; // 정확성을 위해서는 이것을 써주는게 좋다.
document.write($result_than, "<br />"); // false 출력

// 주의사항
// (변수명 >= 변수명) ===> 비교연산자
// (변수명 => 변수명) ===> 화살표 함수

// #6. 논리연산자 : ||(or 연산자 - 구글 검색), &&(and 연산자 - 하나투어 검색), !(부정연산자 - 데이터의 유무를 판단하는 조건으로 적용)
// 구글 검색에는 "이집트 경복궁" 이라고 치면 각각에 대한 검색결과와 모두에 대한 검색결과가 나오지만, 하나투어는 검색결과가 아예 나오지 않는다.

var $s = 10;
var $t = 12;
var $u = 14;

// or 연산자
document.write($s > $t || $t < $u, "<br />"); // true
// false || true => true
// 하나라도 true가 존재하면 모두 true 처리한다.
// 처음 true를 만나고 ||를 만나는 순간 뒤에 false를 인지하지 못한다. 따라서 절대적으로 true인 것들은 반드시 맨 뒤에 넣어야 한다.
// true || false => true : 로딩상 맨처음 true와 || 연산자를 만나는 순간 그 후발주자는 로딩하지 않음 => 따라서 절대적으로 true인 부분은 맨 뒤에 배치한다.

// and 연산자
document.write($s > $t && $t < $u, "<br />"); // false
// false && true => false
// 하나라도 false가 존재하면 모두 false 처리한다.
// false && true => false : 로딩상 맨처음 false와 && 연산자를 만나는 순간 그 후발주자는 로딩하지 않음 => 따라서 절대적으로 false인 부부은 맨 뒤에 배치한다.

// 부정연산자(!변수명) : 변수가 true였다면 false로 출력해라 / 변수가 false였다면 true로 출력해라
var $v = 10 > 8; // true
document.write(`부정연산자 결과값 : ${!$v}`, "<br />");

// Boolean("") 이면 $data는 false이다. 즉, 데이터가 있으면 true, 없으면 false
var $data = Boolean("a");
console.log($data); // true
console.log(!$data); // false

// #7. 삼항조건 연산자 : 변수명의 true 또는 false에 의해서 실행되는 구문을 분리
// 변수명 ? "A" : "B"
// 변수명의 값이 true일 경우, "A"를 출력
// 변수명의 값이 false일 경우, "B"를 출력

/*
var thanMore13 = prompt("나이를 입력해주세요", "13");
var registerPermit = thanMore13 > 13;
console.log(registerPermit);
registerPermit
  ? console.log("가입 가능 연령입니다.")
  : console.log("가입 불가 연령입니다.");
*/

// 응용파트 : airbnb의 회원 아이디 중 첫번째 번호를 기준으로 호스트(1xxxxxxx), 게스트(2xxxxxxx) 분류시켰다고 가정시
var memIdNum = 1; // 호스트
memIdNum % 2 == 0
  ? document.write("게스트 메뉴", "<br />")
  : document.write("호스트 메뉴", "<br />");

// react에서는 제어문 중 조건문을 사용시 if()문을 사용할 수 없음(에러처리)/ 대신 삼항조건연산자로 조건식을 구성할 수 있음
