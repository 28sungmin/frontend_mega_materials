// 01_jsx.js
const root1 = document.querySelector("#root1");

let username = "이성민";
const el1 = <h3 className="name">Hello, {username}</h3>;
ReactDOM.render(el1, root1);

// 배열 데이터를 활용하여 반복 구성한다.
const root2 = document.querySelector("#root2");

// 회원명단
const member = [
  { name: "유재석", age: "51", region: "서울" },
  { name: "지석진", age: "56", region: "경기" },
  { name: "전소민", age: "30", region: "인천" },
  { name: "하하", age: "45", region: "서울" },
  { name: "김종국", age: "49", region: "경기" },
  { name: "하하", age: "48", region: "부산" },
];
let img = "f1.jpg";
const el2 = (
  <>
    <div>
      {/* jsx 주석처리 */}
      {/* <h2>Hi</h2>
      <h2>Hello</h2> */}
      {/* jsx의 최상위 공간은 하나의 태그로만 구성된다. */}
      {/* jsx에서 표현식(삼항조건연산자( a<b ? true : false ), map, filter, every, includes, Object.entries(), ...) */}
      {/* jsx 표현식에서 변수선언, for문, if문을 작성할 수 없다. */}

      {/* 변수 선언은 외곽에서 해야 함. */}
      <img src={`../img/${img}`} />

      <hr />

      <ul>
        {member.map((v, i, a) => (
          // 유니크한 key명을 사용해야 한다.
          <li key={i}>
            {v.name}
            <span className="mx-3">|</span>
            {v.age}
            <span className="mx-3">|</span>
            {v.region}
          </li>
        ))}
      </ul>
    </div>
  </>
);
ReactDOM.render(el2, root2);

// [ 실습 ]
// 객체로 접근하여 map() 함수메서드를 활용하여 리스트 반환
const root3 = document.querySelector("#root3");
const list = {
  data: [
    { spot: "밴쿠버", price: "4,500,000원" },
    { spot: "파리", price: "7,200,000원" },
    { spot: "호노롤루", price: "6,300,000원" },
    { spot: "칸쿤", price: "7,500,000원" },
  ],
  title: "여름 휴가 소개",
};
// ul li 사용하여 반복문으로 표현
// 여름 휴가 소개 -> 여행지와 가격정보 표현(map 사용)

const el3 = (
  <>
    <h2>[{list.title}]</h2>
    <ul>
      {/* list? : list가 존재하는지 한 번 체크를 해준다. */}
      {list?.data.map((v, i) => (
        <li key={i}>{`휴양지 : ${v.spot} / 가격 : ${v.price}`}</li>
      ))}
    </ul>
  </>
);
ReactDOM.render(el3, root3);
