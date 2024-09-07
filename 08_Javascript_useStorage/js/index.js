//index.js

const $storageUserid = window.localStorage.getItem("userid");
const $storageUserpw = window.localStorage.getItem("userpw");
const $storageloginState = window.localStorage.getItem("loginState");

//각 링크 선택
const $registerLink = document.querySelector(".registerLink");
const $loginLink = document.querySelector(".loginLink");
const $idTxt = document.querySelector(".idTxt");
const $logoutLink = document.querySelector(".logoutLink");

if ($storageloginState === "yes") {
  $registerLink.style.display = "none";
  $loginLink.style.display = "none";
  $idTxt.style.display = "block";
  $logoutLink.style.display = "block";
  $idTxt.children[0].textContent = `${$storageUserid} 님`;
} else {
  $registerLink.style.display = "block";
  $loginLink.style.display = "block";
  $idTxt.style.display = "none";
  $logoutLink.style.display = "none";
}

//로그아웃
$logoutLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.localStorage.clear();
  location.href = "./index.html";
});
