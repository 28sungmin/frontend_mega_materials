//외부와 공유할 함수문 준비
const sumNum3 = (num1, num2) => num1 + num2;
const multiNum = (num1, num2) => num1 * num2;
const marvelHero = "앤트맨";

//기본 모듈로 보내기
// export default sumNum3;
// export default multiNum;
//동시에 두개를 별도로 기본 모듈로 보낼 수가 없다.

export default {sumNum3, multiNum, marvelHero};
//복수의 참조 변수형을 보내고자 할 때는 {변수명1, 변수명2, ...}로 작성해야 함

//export default const favCharacter = "슈렉"; //Uncaught SyntaxError: Unexpected token 'const' 
