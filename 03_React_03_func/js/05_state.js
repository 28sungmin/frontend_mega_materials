// 05_state.js

// state는 컴포넌트가 갖고 있는 일련의 값
// state의 변화가 필요한 경우, setState() 함수를 통해서 값을 변경할 수 있음
// 팝업창을 열고 닫기(true/false, 인덱싱 번호를 변경하면서 조정도 가능하다)
// 교통상황의 변경된 상태를 가져와서 화면상에 표현해주는 역할도 담당

// "-" 또는 "+"라는 버튼을 클릭시, 수량이 조정(단, 최소수량은 1)
const root = document.querySelector("#root");
class Counter extends React.Component {
  // 상품의 최초수량 설정
  state = {
    number: 1,
  };
  plus = () => {
    console.log(this.state.number);
    this.setState({
      number: this.state.number + 1,
    });
  };
  // 최소수량은 1
  minus = () => {
    console.log(this.state.number);
    if (this.state.number < 2) {
      this.setState({
        number: this.state.number,
      });
      alert("최소수량은 1입니다.");
    } else {
      this.setState({
        number: this.state.number - 1,
      });
    }
  };

  render() {
    return (
      <div className="col-lg-4 d-flex justify-content-center align-items-center py-4 mx-auto">
        <div className="form-control form-text text-center">
          <label className="my-4">상품수량</label>

          <div className="input-group form-text d-flex justify-content-center">
            <button className="btn btn-primary" onClick={this.minus}>
              −
            </button>
            <input
              type="number"
              className="input-group-text"
              // this는 Counter를 가리킨다.
              value={this.state.number}
              readOnly
            />
            <button className="btn btn-primary" onClick={this.plus}>
              ＋
            </button>
          </div>
        </div>
      </div>
    );
  }
}
// 아래의 class App은 안써도 됨. 그냥 App 안쓰고 68번째에 <Counter /> 해도 됨
class App extends React.Component {
  render() {
    return <Counter />;
  }
}
ReactDOM.render(<App />, root);

//////////////////////////////////////////////////

const { useState } = React;
console.log(React);

const rootHook = document.querySelector("#root-hook");
const AppHooks = () => {
  const [number, setNumber] = useState(1);
  console.log(number); // 1 --> 최초의 상태값 (위에 useState() 괄호 안의 숫자에 따라 달라진다.)

  const plus = (e) => {
    setNumber(number + 1);
  };
  const minus = (e) => {
    if (number < 2) {
      setNumber(number);
      alert("최소수량은 1입니다.");
    } else {
      setNumber(number - 1);
    }
  };

  return (
    <div className="col-lg-4 d-flex justify-content-center align-items-center py-4 mx-auto">
      <div className="form-control form-text text-center">
        <label className="my-4">상품수량</label>

        <div className="input-group form-text d-flex justify-content-center">
          <button className="btn btn-primary" onClick={minus}>
            −
          </button>
          <input
            type="number"
            className="input-group-text"
            // this는 Counter를 가리킨다.
            value={number}
            readOnly
          />
          <button className="btn btn-primary" onClick={plus}>
            ＋
          </button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<AppHooks />, rootHook);
