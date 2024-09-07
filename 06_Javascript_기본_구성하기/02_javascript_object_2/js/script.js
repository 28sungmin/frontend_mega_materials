document.write("<h3>문자객체</h3>");
//문자객체 : 특정한 문자 데이터를 가져와서 요구사항에 맞춰 조작
//인덱스 번호 : 0 ~ 

var $str = "Have a good day";
var $charAt = $str.charAt(7);
console.log($charAt); //g

//주민등록번호에서 남성과 여성을 구분
var $idNumber = "791004-1******";
var genderNum = $idNumber.charAt(7);
console.log(genderNum);
if(genderNum % 2 == 0){
    document.write(`여성 고객입니다.`);
}else{
    document.write(`남성 고객입니다.`);
}

//airbnb(@, 010, 01012345, ... 금지어)
//댓글에서 특정 욕설 찾기("삐삐삐")
var $bad_str = "뿌뿌뿌 삐삐삐 뽀뽀뽀";
var search_word = $bad_str.indexOf("삐삐"); // 해당하는 글자 또는 단어를 문자형 데이터의 좌측으로부터 찾아 일치하는 첫번째 인덱스 번호를 추출
//4 -> 단어중에 첫글자의 인덱스 번호를 도출
//-1 -> 단어중에 해당하는 글자를 찾을 수 없음
console.log(search_word);
if (search_word >= 0) { //0 이상인 경우
    console.log("금지어를 사용하셨네요.");
} else { //-1인 경우
    console.log("당신의 댓글은 등록되었습니다.");
}

//마지막 문장으로부터 찾아서 인덱스번호를 추출
var lastWord = "nice thank cheer up";
var searchLastWord = lastWord.lastIndexOf("e");
console.log(searchLastWord); //14

//match되는 문자 반환하기
var hunmin = "우리말은 중국과 달라서...";
var match_01 = hunmin.match("호주");
console.log(match_01); //null
if(match_01 != null){
    console.log(`당신이 검색한 결과가 존재합니다.`);
}else{
    console.log(`당신이 검색한 결과가 존재하지 않습니다.`);
}

//replace(바꿀문자, 새문자)
//가격정보 5,000
var buyPrice1 = "5,000";
var numPrice = Number(buyPrice1);
console.log(numPrice); //NaN => 숫자형 데이터로 변경 불가

var changePrice1 = Number(buyPrice1.replace(",", ""));
console.log(changePrice1); //5000(Number)

//[잠깐 과제]
//문구점에서 샤프 5개(개당 가격은 1,000원)와 스케치북 2개(개당 가격은 3,000원) 구입했음. 총 구매 합계를 구하시오.
//[최종 결과] 현재 총 구입금액은 11000원 입니다.
var sharp = "1,000";
var sketch = "3,000";

//2,000,000;
var $num = "2,000,000";
// var $ch_num = $num.replace(",", "");
// console.log($ch_num);

var $ch_num_1 = Number($num.replace(/,/g, ""));
console.log($ch_num_1);
/*
[정규식 표현]
/,/g
/,/ : ","
g : global 전역 => 전역 검색(동일하게 구성된 모든 것을 선택)
*/

var bad_senetance = "뿌뿌뿌, 삐삐삐";
//"삐삐삐" => "@@@"로 변경하여 콘솔창에 출력 => "뿌뿌뿌, @@@";
console.log(bad_senetance.replace("삐삐삐", "@@@"));

//문자 데이터로부터 특정 문장만을 추출할 때, slice(a, b) / substring(a, b) / substr(index, 자를 개수)
//substr(인덱스 번호, 지정한 인덱스번호로부터 자를 문자의 개수)
var $txt = "프론트엔드 주말과정";
var $select_txt = $txt.substr(3, 2);
console.log($select_txt); //"엔드"
var $sel_txt = $txt.substr(5, 4);
console.log($sel_txt); //" 주말과"  //공백도 인덱스번호를 갖고 있음0

var address = "서울시 강남구 역삼동";
var address_length = address.length;
console.log(address_length); //11(Number)

//휴대폰 번호를 입력했는데, 개인정보를 확인하고자 할 때 맨 뒷자리 4개만을 "****"로 표기해야한다면
var $phoneNumber = "01012345678";  //"0101234****"
var $final_phoneNumber = $phoneNumber.substr(0, 7);
console.log($final_phoneNumber);
console.log($final_phoneNumber + "****");  //"0101234****"

//01012345678(11), 010-1234-5678(13), 010 1234 5678, 010/1234/5678, +00821012345678, +821012345678
var $phoneNum = "+00821012345678"; //"+0082101234****"
var $final_phoneNum = $phoneNum.substr(0, $phoneNum.length - 4);
console.log($final_phoneNum);
console.log($final_phoneNum + "****");

//[중간실습-1] "1234-5678-9876-5432" => "1234-5678-****-****"로 문자를 변경
var $card1 = "1234-5678-9876-5432";
// var $card_recipe1 = $card1.substr(0, 10) + "****-****";
var $card_recipe1 = $card1.substr(0, $card1.length - 9) + "****-****";
console.log($card_recipe1);

//[중간실습-2] "1234-5678-9876-5432" => "1234-****-****-5432"로 문자를 변경
var $card2 = "1234-5678-9876-5432";
var $card_recipe2 = $card2.substr(0, 5) + "****-****" + $card2.substr(14, 5);
console.log($card_recipe2);

//split("특정문자") : 특정문자를 기준으로 배열 데이터(["데이터1", "데이터2", ...])화 시킴
var card3 = "1234-5678-9876-5432";
var arr_card3 = card3.split("-");
console.log(arr_card3); //['1234', '5678', '9876', '5432']
console.log(arr_card3[1]); //5678

//변수명1.concat(변수명2) : 변수명1 데이터에 변수명2를 합친다.
var snack1 = "오징어 ";
var snack2 = "땅콩";
var result = snack1.concat(snack2);
console.log(result);

//변수명.trim() : 변수명에 존재하는 앞뒤 공백을 제거한다.(검색어 상의 공백이 해당)
var searchWord = "     경복궁 이집트    ";
console.log(searchWord.length);  //16
var trimWord = searchWord.trim();
console.log(trimWord); //"경복궁 이집트"
console.log(trimWord.length); //7

//문자객체에서 반드시 기억해야할 부분
/*
    indexOf("찾을 문자") ==> -1 : 찾을 문자가 데이터에 없음 / 0 ~ 양의 정수 인덱스번호 : 찾을 문자가 존재한다는 의미
    replace("바꿀문자", "새문자")
    substr(인덱스번호, 자를 개수) => 문자 추출
    split("특정문자") => "특정문자"를 기준으로 배열데이터화 시킨다.
    trim() => 전후 공백을 제거
    length => 문자 데이터의 길이를 측정(문자의 수) != byte(문자의 용량)
*/

