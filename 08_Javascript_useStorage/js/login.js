/*localStorage*/
/*sessionStorage*/
/*cookie*/

const $loginBtn = document.querySelector(".input_btn button");
const $userid = document.querySelector("#userid");
const $userpw = document.querySelector("#userpw");

/* 로컬 스토리이지의 정보 취득 */
const $storageUserid = window.localStorage.getItem("userid");
const $storageUserpw = window.localStorage.getItem("userpw");
console.log($storageUserid);
console.log($storageUserpw);

$loginBtn.addEventListener("click", () => {
  if ($storageUserid === null || $storageUserpw === null) {
    alert("회원가입을 진행해 주세요");
    location.href = "./register.html";
  }
  if ($userid.value.trim() === "" || $userpw.value.trim() === "") {
    alert("필수입력 사항입니다.");
    return;
  }
  if ($storageUserid === $userid.value && $storageUserpw === $userpw.value) {
    window.localStorage.setItem("loginState", "yes");
    location.href = "./index.html";
  } else {
    alert("아이디 또는 패스워드를 확인 후 다시 입력해주세요.");
  }
});
