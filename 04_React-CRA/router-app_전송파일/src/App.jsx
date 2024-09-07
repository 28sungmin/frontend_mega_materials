// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MainPg from "./pages/MainPg";
import AboutPg from "./pages/AboutPg";
import PortfolioPg from "./pages/PortfolioPg";
// 만약, 상세 페이지의 개수가 100개라면 상세에 대한 컴포넌트를 100개나 찍어내야 하나?
import PortfolioPgDetail1 from "./pages/portfolioDetail/PortfolioDetailPg_1";
import PortfolioPgDetail2 from "./pages/portfolioDetail/PortfolioDetailPg_2";
import PortfolioPgDetail3 from "./pages/portfolioDetail/PortfolioDetailPg_3";
import PortfolioPgDetail4 from "./pages/portfolioDetail/PortfolioDetailPg_4";

import ContactPg from "./pages/ContactPg";
import ContactDetailTotal from "./pages/contactDetail/ContactDetailPg_Total";

import NotFoundPg from "./pages/NotFoundPg"; //지정된 경로가 없다면 보여주어야 할 페이지(예외처리 페이지)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1>헤더공간</h1>
          <ul>
            <li>
              <a href="/">a 메인(페이지의 새로고침 현상이 발생한다.)</a>
              <span>&nbsp; | &nbsp;</span>
              <Link to="/">
                Link 메인(페이지의 새로고침 현상이 발생하지 않는다.)
              </Link>
            </li>
            <li>
              {/* <a href="/about">About</a> */}
              <Link to="/about">About</Link>
              {/* 과제 : 무한대의 About Detail 페이지가 100개 이상이 존재할 경우 라우트에서 params 지정하여 페이지 구성하기 */}
            </li>
            <li>
              {/* <a href="/portfolio">Portfolio</a> */}
              <Link to="/portfolio">Portfolio</Link>
              <p>
                컴포넌트 나열 방식(개수가 제한적인 상태 : 각 컴포넌트를 별도로
                구성한다.)
              </p>
              <ul>
                <li>
                  <Link to="/portfolio/1">Portfolio-Detail-1</Link>
                </li>
                <li>
                  <Link to="/portfolio/2">Portfolio-Detail-2</Link>
                </li>
                <li>
                  <Link to="/portfolio/3">Portfolio-Detail-3</Link>
                </li>
                <li>
                  <Link to="/portfolio/4">Portfolio-Detail-4</Link>
                </li>
              </ul>
            </li>
            <li>
              {/* <a href="/contact">Contact</a> */}
              <Link to="/contact">Contact</Link>
              <p>
                컴포넌트 나열 방식(개수를 알 수 없는 상태 : 하나의 컴포넌트에서
                변수명(params)으로 저장하여 보내고 적용한다. - 분기처리)
              </p>
              <ul>
                <li>
                  <Link to="/contact/1">Contact-Detail-1</Link>
                </li>
                <li>
                  <Link to="/contact/2">Contact-Detail-2</Link>
                </li>
                <li>
                  <Link to="/contact/3">Contact-Detail-3</Link>
                </li>
                <li>
                  <Link to="/contact/100">Contact-Detail-100</Link>
                </li>
              </ul>
            </li>
          </ul>
        </header>
        <hr />
        <main>
          <Routes>
            <Route path="/" element={<MainPg />} />
            <Route path="/about" element={<AboutPg />} />
            <Route path="/portfolio" element={<PortfolioPg />} />
            {/* 만약, 상세 페이지의 개수가 100개라면 상세에 대한 컴포넌트를 100개나 불러와야 하나?  */}
            <Route path="/portfolio/1" element={<PortfolioPgDetail1 />} />
            <Route path="/portfolio/2" element={<PortfolioPgDetail2 />} />
            <Route path="/portfolio/3" element={<PortfolioPgDetail3 />} />
            <Route path="/portfolio/4" element={<PortfolioPgDetail4 />} />

            <Route path="/contact" element={<ContactPg />} />
            <Route path="/contact/:n" element={<ContactDetailTotal />} />

            <Route path="*" element={<NotFoundPg />} />
          </Routes>
        </main>
        <hr />
        <footer>
          <p>&copy; MegaIt Int.</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
