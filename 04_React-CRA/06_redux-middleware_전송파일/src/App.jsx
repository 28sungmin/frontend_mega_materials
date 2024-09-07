import logo from "./logo.svg";
import "./App.css";

import CounterContainer from "./containers/CounterContainer";
import ArticleContainer from "./containers/ArticleContainer";
import MemberContainer from "./containers/MemberContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <ArticleContainer />
      <hr />
      <MemberContainer />
    </div>
  );
}

export default App;
