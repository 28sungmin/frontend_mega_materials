import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Grammer_01 from "./grammers/Grammer_01";
import Grammer_02 from "./grammers/Grammer_02";

function App() {
  return (
    <div className="App">
      <Grammer_01 />
      <hr />
      <Grammer_02 />
    </div>
  );
}

export default App;
