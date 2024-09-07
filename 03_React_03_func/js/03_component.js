// 03_component.js

// Component는 재사용 가능한 코드의 조각
// Component는 항상 대문자로 시작(소문자로 작성을 하면 태그로 인식)

console.log(React.Component);
/* 
ƒ Component(props, context, updater) {
    this.props = props;
    this.context = context; // If a component has string refs, we will assign a different object later.

    this.refs = emptyObject; // W…
*/

const root = document.querySelector("#root");

// React 16버전에서 class라는 함수로 Component를 구성
// Hello1를 hello1처럼 소문자로 하면 태그로 인식하게 되어 안된다. 반드시 대문자로 쓰기
class Hello1 extends React.Component {
  render() {
    const userName = "BTS";
    return <h3>Hello, {userName}</h3>;
  }
}

// React 17버전에서는 Hooks(함수형)로 Component를 구성
const Hello2 = () => {
  const userName = "아이유";
  return <h3>Hello, {userName}</h3>;
};

const comResult = (
  <div>
    <Hello1 />
    {/* 자식인자가 있으면 아래처럼 넣기 */}
    {/* <Hello1>{자식인자}</Hello1> */}
    <Hello2 />
  </div>
);
ReactDOM.render(comResult, root);
