jsx -> tsx
js -> ts

[차이점]

- 연산에 대한 부분을 각 타입에서 제어 가능
- 각 변수에 대한 차입 선언 반그시 필수(빌드가 에러 발생)
- 개발 소요시간 : jsx보다 2~3배 정도 소요
- extends를 통해 오픈된 상태로 구성이 가능(예시, input -> InputHTMLAttribute<HTMLInputElement> : value, onChange, maxLength, ...)

[왜 어려운 타입스크립트를 사용하나?]

- 타입정의를 통해서 추후 디버깅 문제를 해결이 가능
- Optional Channing을 줄일 수 있음 : null처리 부분이 확실한 타입값으로 정의되기 때문임
