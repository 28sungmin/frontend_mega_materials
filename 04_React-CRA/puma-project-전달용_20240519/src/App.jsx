
import './assets/scss/app.scss';
//Components
import HeaderCp from './components/common/HeaderCp';  //1
import FooterCp from './components/common/FooterCp';

import Content1Cp from './components/main/Content1Cp';  //3
import Content2Cp from './components/main/Content2Cp';  //4
import Content3Cp from './components/main/Content3Cp';  //6
import MainVideoCp from './components/main/MainVideoCp';  //2
import MainBannerCp from './components/main/MainBannerCp';  //5

import DarkBgCp from './components/popup/DarkBgCp';

import { useState } from "react";

function App() {
  const [isOpenPop, setIsOpenPop] = useState(false);

  const handleClickTogglePop = () => {
    console.log('열려라(또는 닫혀라) 팝업 배경화면~!');
    setIsOpenPop(!isOpenPop);
  }

  return (
    <div className="App">
      <HeaderCp />
      <MainVideoCp />
      <Content1Cp />
      <Content2Cp />
      <MainBannerCp evtProps={handleClickTogglePop} />
      <Content3Cp />
      <FooterCp />

      {isOpenPop && (
        <DarkBgCp evtProps={handleClickTogglePop} category="mainBanner" />
      )}
      {/* 옵셔널 체이닝 : 전면부에 배치된 값이 true라면 그 다음을 실행해라. */}
      

    </div>
  );
}

export default App;
