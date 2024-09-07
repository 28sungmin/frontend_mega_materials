//Content1Cp.jsx
import newArrivals from "../../assets/images/newArrivalBg.jpg"

import pd1 from "../../assets/images/products/new_01_01.jpg"
import pd2 from "../../assets/images/products/new_02_01.jpg"
import pd3 from "../../assets/images/products/new_03_01.jpg"
import pd4 from "../../assets/images/products/new_04_01.jpg"
import pd5 from "../../assets/images/products/new_05_01.jpg"
import pd6 from "../../assets/images/products/new_06_01.jpg"
import pd7 from "../../assets/images/products/new_07_01.jpg"
import pd8 from "../../assets/images/products/new_08_01.jpg"
import pd9 from "../../assets/images/products/new_09_01.jpg"
import pd10 from "../../assets/images/products/new_10_01.jpg"

import SectionTitleAtm from "../atoms/SectionTitleAtm"
import ImgAtm from "../atoms/ImgAtm"
import CardItemAtm from "../atoms/CardItemAtm"


const Content1Cp = () => {
    //2차 배열 [이미지, 상품타이틀, 상품 상세]
    const cont_arr = [
        [pd1, "KING Platinum 21 FG/AG", "Men's Soccer Cleats"],
        [pd2, "FUSE", "Training Shoes"],
        [pd3, "Suede RE.GEN", "Sneakers"],
        [pd4, "Leadcat", "G Sandals"],
        [pd5, "COOLADAPT", "Women’s Running Tank Top"],
        [pd6, "Sonora Waist", "BAG 2.0"],
        [pd7, "High Court Regal Mid", "Women's Sneakers"],
        [pd8, "Cali Star Rainbow", "Women's Sneakers"],
        [pd9, "RS-Z Red", "CAMPUS"],
        [pd10, "MB.01", "BUZZ CITY"],
    ];

    return (
        <div className="content1 pt-20">
            <SectionTitleAtm 
                className="section-title py-70" titleTextProps="New Arrivals" 
            />
            {/* <h3 className="section-title">
                New Arrivals
            </h3> */}

            <ul className="product-list d-flex flex-wrap">
                {/* 고정형 텍스트 파트 */}
                <li className="list">
                    <ImgAtm 
                        srcProps={newArrivals} 
                        altProps="new arrivals 배경" 
                    />
                    {/* <img src={newArrivals} alt="new arrivals 배경" /> */}
                    <div className="context">
                        <div className="dark d-flex flex-direction-column justify-content-center align-items-center p-40">
                            <h4>Products Launch</h4>
                            <p>Stay in the know with the latest drops and upcoming launches, plus early access to PUMA exclusives. Catch it here first.</p>
                        </div>
                    </div>
                </li>
                {/* 데이터 연동하여 제품 카드 섹션들 */}
                {cont_arr.map((v, i) => (
                    <CardItemAtm 
                        key={i}
                        srcProps1={v[0]} 
                        altProps1={v[1]}
                        titProps={v[1]}
                        txtProps={v[2]}
                    />
                ))}
                {/* <li className="list">
                    <img src={pd1} alt="" />
                    <div className="context">
                        <div className="dark d-flex flex-direction-column justify-content-center align-items-center">
                            <h4>제품 타이틀</h4>
                            <p>제품 상세내용</p>
                            <button>제품 바로가기</button>
                        </div>
                    </div>
                </li> */}
            </ul>

        </div>
    )
}
export default Content1Cp;