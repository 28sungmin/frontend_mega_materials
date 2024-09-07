/* 
#1. 부모와 자식간의 값을 전달
#2. 부모가 자식에게 값을 전달할 때는 props(속성)으로 전달
#3. 자식이 부모에게 값을 전달할 때는 props로 전달받은 event를 실행하여 전달
*/
const { Component, createRef } = React;
console.log(React); // 내부의 key로 존재하는 Component를 직접 불러올 수 있다.
const root = document.querySelector("#root");

// class Text extends React.Component {
//   render() {
//     return <h2>Test Text - React.Component</h2>;
//   }
// }

// class Text extends Component {
//   render() {
//     return <h2>Test Text - Component</h2>;
//   }
// }
class Title extends Component {
  style = {
    height: "40px",
    marginTop: "20px",
    color: "#b00",
  };
  render() {
    return <h2 style={this.style}>{this.props.txt}</h2>;
  }
}

class CloseButton extends Component {
  style = {
    right: "12px",
    top: "12px",
    cursor: "pointer",
  };
  onDelete = () => {
    this.props.onDelete();
  };
  render() {
    return (
      <span
        className="fa fa-times-circle position-absolute"
        style={this.style}
        onClick={this.onDelete}
      ></span>
    );
  }
}
class Input extends Component {
  state = {
    txt: "",
  };
  inputRef = createRef(); // ref로 DOM을 init시킨다.

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.txt);
    this.onReset();
    this.setState({
      ...this.state,
      txt: "",
    });
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      txt: e.target.value,
    });
    this.props.onInput(this.inputRef.current.value);
  };

  onReset = () => {
    this.inputRef.current.value = ""; // 입력 후 엔터를 눌렀다면 기존 입력상자의 내용은 모두 지워라.
    this.inputRef.current.focus(); // 자동 포커스
  };

  onDelete = () => {
    this.setState({
      ...this.state,
      txt: "",
    });
    this.props.onInput("");
    this.onReset();
  };

  render() {
    console.log(this.inputRef);
    return (
      <form className="position-relative" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          ref={this.inputRef}
          onChange={this.onChange}
          autoFocus
        />
        {this.state.txt.length ? <CloseButton onDelete={this.onDelete} /> : ""}
      </form>
    );
  }
}

class List extends Component {
  render() {
    return (
      <div>
        <p>{this.props.list}</p>
      </div>
    );
  }
}

class App extends Component {
  state = {
    txt: "",
    lists: [],
  };
  onInput = (value) => {
    this.setState({
      ...this.state,
      txt: value,
    });
  };
  onSubmitForm = (value) => {
    this.setState({
      txt: "", // 입력한 내용이 전송이 되었다면 입력값을 초기화시켜라
      lists: [...this.state.lists, value], // 입력값(value)을 배열 데이터에 추가한다.
    });
  };

  onClick = () => {
    this.setState({
      txt: "",
      lists: [],
    });
  };

  render() {
    return (
      <div className="container">
        {/* <h2>입력값</h2> */}
        <Title txt={this.state.txt} />
        {/* <form onSubmit>
          <input type="text" />
          <CloseButton />
        </form> */}
        <Input onInput={this.onInput} onSubmitForm={this.onSubmitForm} />
        {/* <div>
          <p>입력 받은 최종 결과 리스트</p>
        </div> */}
        {this.state.lists.map((list, index) => (
          <List key={index} list={list} />
        ))}
        {this.state.lists.length ? (
          <button className="btn btn-danger my-3" onClick={this.onClick}>
            리스트 삭제
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, root);

/////////////////////////////////////////////////////////////////////

const { useState, useRef } = React;
const rootHook = document.querySelector("#root-hook");

const TitleHook = ({ txt }) => {
  const style = {
    height: "40px",
    marginTop: "20px",
    color: "#b00",
  };
  return <h2 style={style}>{txt}</h2>;
};

const CloseButtonHook = ({ onDelete }) => {
  const style = {
    right: "12px",
    top: "12px",
    cursor: "pointer",
  };
  return (
    <span
      className="fa fa-times-circle position-absolute"
      style={style}
      onClick={onDelete}
    ></span>
  );
};

const InputHook = ({ onInput, onInputSubmit }) => {
  const [txt, setTxt] = useState("");
  const inputRef = useRef();
  console.log(inputRef);
  const onChange = (e) => {
    setTxt(e.target.value);
    onInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTxt("");
    onInputSubmit(inputRef.current.value);
    onDelete();
  };

  const onDelete = () => {
    setTxt("");
    onInput("");
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <form className="position-relative" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        autoFocus
        onChange={onChange}
        ref={inputRef}
      />
      {/* 입력값이 존재한다면 CloseButtonHook을 보여줘라. */}
      {txt.length ? <CloseButtonHook onDelete={onDelete} /> : ""}
    </form>
  );
};

const ListHook = ({ data }) => {
  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

const AppHook = () => {
  const [txt, setTxt] = useState("");
  const [lists, setLists] = useState([]);

  const onInput = (value) => {
    setTxt(value);
  };

  const onInputSubmit = (value) => {
    setLists([...lists, value]);
  };

  const onReset = () => {
    setTxt("");
    setLists([]);
  };

  return (
    <div className="container">
      <TitleHook txt={txt} />
      <InputHook onInput={onInput} onInputSubmit={onInputSubmit} />
      {lists.map((list, index) => (
        <ListHook key={index} data={list} />
      ))}
      {lists.length ? (
        <button className="btn btn-danger my-3" onClick={onReset}>
          리스트 삭제
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

ReactDOM.render(<AppHook />, rootHook);
