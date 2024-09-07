const root = document.querySelector("#root");

class App extends React.Component {
  state = {
    size: 600,
    src: "https://loremflickr.com/600/600/cat",
  };

  change = (e) => {
    const size = this.state.size - 50;
    // [실습] size의 값이 0이 되지 않도록 구성. 50까지만 허용한다.
    this.setState({
      size,
      src: `https://loremflickr.com/${size}/${size}/cat`,
    });
  };

  render() {
    return (
      <div className="container text-center">
        <img src={this.state.src} alt="랜덤 이미지" />
        <div>
          <button className="btn btn-primary" onClick={this.change}>
            변경
          </button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, root);

//////////////////////////////////////////////////

const { useState } = React;
const rootHook = document.querySelector("#root-hook");
const AppHook = () => {
  const [size, setSize] = useState(600);
  const [src, setSrc] = useState("https://loremflickr.com/600/600/cat");

  const change = (e) => {
    setSize(size - 50);
    //[실습] size의 값이 0이 되지 않도록 구성. 50까지만 허용한다.
    setSrc(`https://loremflickr.com/${size}/${size}/cat`);
  };

  return (
    <div className="container text-center">
      <img src={src} alt="랜덤 이미지" />
      <div>
        <button className="btn btn-primary" onClick={change}>
          변경
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<AppHook />, rootHook);
