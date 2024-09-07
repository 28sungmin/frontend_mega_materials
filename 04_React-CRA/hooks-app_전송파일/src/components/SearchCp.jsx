import { useState, useCallback, useEffect, useRef } from "react";

const SearchCp = () => {
  const [val, setVal] = useState("");

  const handleChange = useCallback((e) => {
    setVal(e.currentTarget.value);
  }, []);

  const callbackAction = useCallback((e) => {
    console.log(e);
    if (e.keyCode === 13) {
      console.log("엔터 눌렀어요~");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", callbackAction);
  }, [callbackAction]);

  //javascript의 선택자 VS useRef를 활용한 영역 선택

  useEffect(() => {
    const inputBox = document.querySelector(".inputBox");
    console.log(inputBox); //<input type="text" ref={inputRef} className="inputBox" value="홍길동" />
  }, []);

  const inputRef = useRef();
  console.log(inputRef); //current{...}

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p style={{ backgroundColor: "#aaf" }}>{`입력값 : ${val}`}</p>

      <input type="text" ref={inputRef} className="inputBox" value="홍길동" />
    </div>
  );
};
export default SearchCp;
