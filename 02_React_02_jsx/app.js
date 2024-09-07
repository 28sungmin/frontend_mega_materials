/*
    [ createElement() ]
    #1. 첫 번째 parameter => 요소명 또는 태그명
    #2. 도 번째 parameter => 태그의 속성명
    #3. 세 번째 이후 parameter => 자식 노드로 구성
*/
// [createElement() => JSX로 수정]
// className으로 선언을 하여야 한다.
// for문을 사용할 수 없음(array.map()), if문도 사용할 수 없음(array.filter())
// 반드시 닫힘 태그가 존재해야함. <input />, <img />, <hr />
// 자식이 없는 컴포넌트 선언시 <Images></Images> => <Images />

// js에서는 title, context 코드를 인정 못한다.
// 따라서 <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> 가 필요
// <script type="text/babel" src="./app.js"></script> 도 필요
const title = <h1 title="txtTitle">My Title1</h1>;

const context = <p>콘텐츠 공간입니다.</p>;

const box = React.createElement(
  "div",
  {
    className: "card bg-warning text-white p-4",
  },
  title,
  context
);
ReactDOM.render(box, document.querySelector("#root"));

// 자식 노드가 존재하는 경우, 변수를 별도로 구성하기보다는 부모 아래의 자식 노드들을 JSX 문법으로 변경
const box2 = (
  <div className="card bg-primary text-white p-4">
    <h1 title="txtTitle">My Title2</h1>
    <p>콘텐츠 공간2입니다.</p>
  </div>
);
ReactDOM.render(box2, document.querySelector("#root2"));

// [JSX를 활용한 동적 표현 방식] : 데이터 값을 가져올 때는 {변수명}
let strTitle = "My Title3";
let strClass = "tit3";
let strContext = "콘텐츠 공간3입니다.";
const box3 = (
  <div className="card bg-info text-white p-4">
    <h1 title="txtTitle" className={strClass}>
      {strTitle}
    </h1>
    <p>{strContext}</p>
  </div>
);
ReactDOM.render(box3, document.querySelector("#root3"));
