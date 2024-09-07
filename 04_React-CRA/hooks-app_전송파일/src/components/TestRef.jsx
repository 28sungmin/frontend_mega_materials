import { useState, useRef } from "react";

const imgCoverStyle = {
  width: "80%",
  margin: "0 auto",
  backgroundColor: "#eee",
};
const imgStyle = {
  width: "25%",
};

const TestRef = () => {
  const [myImage, setMyImage] = useState([]);
  const fileRef = useRef(); //useRef()의 역할은 1차적으로 값을 저장할 수 있음 / 2차적으로 요소도 하나의 값으로 저장할 수 있음(한번만 선언으로도 렌더링할 때 유지가 가능해 짐)
  console.log(fileRef);

  //blob은 기존의 <input type="file">에서 강제로 지정된 c:fakePath라는 임시 저장 공간에 들어간 파일을 절대경로라는 값으로 변형을 시켜줌
  const addImage = (e) => {
    let imgArr = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    ); //새로 업로드한 이미지
    console.log(imgArr); //['blob:http://localhost:3000/c9088f9f-2b78-497e-9b14-6bbbb5f2193e']
    setMyImage([...myImage, ...imgArr]);
    console.log(myImage);
  };

  const handleFileBtnClick = (e) => {
    e.preventDefault();
    fileRef.current.click(); //<input type="file"> 에서 클릭한 것과 동일
  };

  //과제부분 : 각 이미지의 하단에 위치한 "삭제" 버튼 클릭시, 해당하는 이미지만 지울 것
  const deleteImgBox = (num) => {};

  return (
    <div style={imgCoverStyle}>
      <h3>이미지 파일 업로드</h3>
      <button onClick={handleFileBtnClick}>이미지 추가하기</button>

      <hr />

      <label onChange={addImage} htmlFor="input-file">
        <input
          type="file"
          name=""
          id=""
          ref={fileRef}
          hidden={true}
          multiple="multiple"
          accept=".jpg, .png"
          disabled={myImage.length === 10}
        />
      </label>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* 이미지가 추가되는 공간 */}
        {myImage &&
          myImage.map((v, i) => (
            <div key={i} style={imgStyle}>
              <img style={{ width: "100%" }} src={v} alt="이미지" />
              <button onClick={() => deleteImgBox(i)}>삭제</button>
            </div>
          ))}
      </div>
    </div>
  );
};
export default TestRef;
