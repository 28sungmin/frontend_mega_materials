import { useEffect, useState } from "react";
import { objType, memberListsType } from "../types/grammer_01";
import data from "../assets/data/member.json";

const Grammer_01 = () => {
  const [str, setStr] = useState<string>("");
  useEffect(() => {
    setStr("홍길동");
  }, []);

  const [num, setNum] = useState<number>(0);
  useEffect(() => {
    setNum(100);
  }, []);

  const [bool, setBool] = useState<boolean>(false);
  useEffect(() => {
    setBool(true);
  }, []);

  let var_01;
  console.log(var_01);

  const [undefined, setUndefined] = useState<undefined>();
  useEffect(() => {
    setUndefined(undefined);
  }, []);

  const [any, setAny] = useState<any>(0);
  useEffect(() => {
    setAny("any 타입");
  }, []);
  //모든 타입을 받아들인다. 메모리 누수가 존재

  const [arrStr, setArrStr] = useState<string[]>([]);
  useEffect(() => {
    setArrStr(["강하늘"]);
  }, []);

  const [arrNum, setArrNum] = useState<number[]>([]);
  useEffect(() => {
    setArrNum([123]);
  }, []);

  const [arrAny, setArrAny] = useState<any[]>([]);
  useEffect(() => {
    setArrAny(["12", 15]);
  }, []);

  const [obj, setObj] = useState<objType>({
    name: "",
    age: 0,
    region: "",
  });
  useEffect(() => {
    setObj({ name: "홍길동", age: 20, region: "서울" });
  }, []);

  //홍길동(20) 인천 이사감
  const moveClicked = () => {
    setObj((prev) => ({
      ...prev,
      region: "인천",
    }));
  };

  useEffect(() => {
    console.log(obj);
  }, [obj]);

  const memberList: memberListsType[] = data;
  console.log(memberList); //[{…}, {…}]

  return (
    <div>
      <h1>변수에 대해 알아보자</h1>
      <div>
        <h3>문자/숫자/Boolean/undefined/any</h3>
        <div style={{ backgroundColor: "#ffa", padding: "10px" }}>
          <p>strValue: {str}</p>
          <p>numValue: {num}</p>
          <p>boolValue: {bool ? "true" : "false"}</p>
          <p>undefinedValue: {undefined}</p>
          <p>anyValue: {any}</p>
        </div>
      </div>
      <div>
        <h3>배열</h3>
        <div style={{ backgroundColor: "#ffa", padding: "10px" }}>
          <p>문자형 배열: {arrStr[0]}</p>
          <p>숫자형 배열: {arrNum[0]}</p>
          <p>형태 몰라 배열: {arrAny[0]}</p>
        </div>
      </div>
      <div>
        <h3>객체</h3>
        <div style={{ backgroundColor: "#ffa", padding: "10px" }}>
          <p>객체.name: {obj.name}</p>
          <p>객체.age: {obj.age}</p>
          <p>객체.region: {obj.region}</p>
          <button onClick={moveClicked}>이사</button>
        </div>
      </div>

      <div>
        <h3>복합 객체(객체 내부의 객체, 또는 객체 내부의 배열)</h3>
        <div style={{ backgroundColor: "#ffa", padding: "10px" }}>
          {memberList.map((v) => (
            <div key={v.member.id} style={{ borderBottom: "1px solid #333" }}>
              <p>data.id: {v.member.id}</p>
              <p>data.name: {v.member.name}</p>
              <p>data.age: {v.member.age}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Grammer_01;
