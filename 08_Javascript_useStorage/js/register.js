/*localStorage*/
/*sessionStorage*/
/*cookie*/

const $registerBtn = document.querySelector(".input_btn button");
const $userid = document.querySelector("#userid");
const $userpw = document.querySelector("#userpw");
const $useremail = document.querySelector("#useremail");

$registerBtn.addEventListener("click", () => {
  if (
    $userid.value.trim() === "" ||
    $userpw.value.trim() === "" ||
    $useremail.value.trim() === ""
  ) {
    alert("필수입력 사항입니다.");
  } else {
    if (window !== undefined) {
      window.localStorage.setItem("userid", $userid.value);
      window.localStorage.setItem("userpw", $userpw.value); //crypto 함수를 호출한 리턴값을 넣어주거나 또는 DB에 직접 연결해서 암호화된 값을 넣는다.(encrypto:암호화 -> 로그인 입력값은 decrypto:복호화 하여 비교한다.)
      window.localStorage.setItem("useremail", $useremail.value);
      window.localStorage.setItem("loginState", "no");

      //   window.sessionStorage.setItem("userid", $userid.value);
      //   window.sessionStorage.setItem("userpw", $userpw.value);
      //   window.sessionStorage.setItem("useremail", $useremail.value);
      //   window.sessionStorage.setItem("loginState", "no");

      //   window.cookie = `userid = ${$userid.value}`;
      //   window.cookie = `userpw = ${$userpw.value}`;
      //   window.cookie = `useremail = ${$useremail.value}`;
      //   window.cookie = `loginState = ${no}`;

      alert("회원가입 성공하셨습니다.");
      location.href = "./index.html";
    }
  }
});

//localStorage에 사용되는 메서드
//window.localStorage.setItem("key", "value");  //create, update
//var 변수명 = window.localStorage.getItem("key");  //read
//window.localStorage.removeItem("key");  //delete(해당하는 key명과 귀속되어 있는 value 값을 삭제한다.)
//window.localStorage.clear();  //delete 기존 로컬스토리지에 존재하는 모든 내용을 삭제한다.

//객체의 형태는 key : value(문자형, 숫자형, 논리형, 객체형-다수의 데이터를 또 다른 내부의 key들과 value들로 구성 가능, JSON 형태)

//<<setItem>> localStorage.setItem("key", JSON.stringfy([각종 데이터]))
//<<getItem>> JSON.parse(localStorage.getItem("key"))
