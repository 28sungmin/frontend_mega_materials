import { ChangeEvent, useState } from "react";
import { InputHTMLAttributes } from "react";

interface memberTypes {
  name: string;
  age: number;
}

const Grammer_02 = () => {
  const [inputVal, setInputValue] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const [checkVal, setCheckVal] = useState<boolean>(false);
  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckVal(!checkVal);
  };

  const [isModify, setIsModify] = useState<boolean>(true);

  const [member, setMember] = useState<memberTypes>({
    name: "강나나",
    age: 0,
  });
  const memName1 = (member as memberTypes).name;
  console.log(memName1); //"강나나"

  return (
    <div>
      <h3>이벤트</h3>
      <div>
        <h4>입력상자 이벤트</h4>
        <div>
          <input type="text" onChange={handleChange} value={inputVal} />
        </div>
        <p>결과값 : {inputVal}</p>
      </div>
      <div>
        <h4>체크박스 이벤트</h4>
        <div>
          <input type="checkbox" onChange={handleChecked} checked={checkVal} />
        </div>
        <p>결과값 : {checkVal ? "true" : "false"}</p>
      </div>

      <div>
        <h4>
          데이터 진입간 읽기 전용으로 구분하는 영역(속성으로 제어 readOnly)
        </h4>
        <input
          type="text"
          value={"홍길동"}
          {...(isModify ? { readOnly: true } : "")}
          {...(isModify ? { disabled: true } : "")}
          //상태(true 또는 false)에 따라 속성명만 넣어야 할 때 사용
        />
      </div>
    </div>
  );
};
export default Grammer_02;
