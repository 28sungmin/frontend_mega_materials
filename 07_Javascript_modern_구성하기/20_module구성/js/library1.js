//외부와 공유할 변수명 greet과 sumNum 함수를 상수와 함수로 선언
const greet = "Hello~~~!!!";
const sumNum = (num1, num2) => num1 + num2;

//외부에서 사용할 수 있도록 내보내기
export {greet, sumNum};

//다른 방식으로도 내보내기를 할 수 있음
export const greet2 = "HI";
export const sumNum2 = (num1, num2) => num1 + num2;