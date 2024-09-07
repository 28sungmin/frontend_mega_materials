import { useParams } from "react-router-dom";

const ContactDetailTotal = () => {
  console.log(useParams());
  const { n } = useParams();
  console.log(`Contact 상세 :  ${n}`);

  //연락처와 오시는길, 상담 페이지, ...  => 분리하여 콘텍스트를 구성한다.
  const contactDetail = (val) => {
    switch (val) {
      case "1":
        return (
          <div className="contactDetailCont1">
            <p>Tel : 02-1234-5678</p>
          </div>
        );
      case "2":
        return (
          <div className="contactDetailCont2">
            <p>Location : 서울시 강남구 언덕로 112번지</p>
          </div>
        );
      case "3":
        return (
          <div className="contactDetailCont3">
            <p>상담 센터 : 1588-1234</p>
          </div>
        );
      default:
        return (
          <div className="contactDetailContN">
            <p>환영합니다.</p>
          </div>
        );
    }
  };

  return (
    <div
      style={{
        boxSizing: "border-box",
        padding: "20px",
        backgroundColor: "#aaf",
      }}
    >
      <h2>{`Contact 상세 ${n}번 페이지`}</h2>
      <hr />
      {contactDetail(n)}
    </div>
  );
};
export default ContactDetailTotal;
