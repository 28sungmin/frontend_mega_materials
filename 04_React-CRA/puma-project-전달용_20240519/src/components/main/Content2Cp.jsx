//Content2Cp.jsx
import cate1 from "../../assets/images/category_01.jpg"
import cate2 from "../../assets/images/category_02.jpg"
import cate3 from "../../assets/images/category_03.jpg"

import SectionTitleAtm from "../atoms/SectionTitleAtm"
import SectionItemAtm from "../atoms/SectionItemAtm"

const Content2Cp = () => {
    //2차 배열 패턴 : [이미지, 타이틀, 내용]
    const cate_arr = [
        [cate1, "EVERYDAY", "BEST FOR: A RUN HERE AND THERE."],
        [cate2, "COMPETITIVE", "BEST FOR: CHASING THE NEXT RACE."],
        [cate3, " LONG DISTANCE", "BEST FOR: RACKING UP THE MILES."],
    ]
    return (
        <section className="content2 pt-20">
            <div className="section-title py-70">
                <SectionTitleAtm titleTextProps="MATCH YOUR ENERGY"/>
                {/* <h3>MATCH YOUR ENERGY</h3> */}
                <p className="mt-10">EXPLORE RUNNING CATEGORIES</p>
            </div>
            <ul className="d-flex flex-wrap justify-content-btween w-100">
                {cate_arr.map((v, i) => (
                    <SectionItemAtm 
                        key={i}
                        srcProps2={v[0]} 
                        altProps2={v[1]} 
                        titProps2={v[1]} 
                        txtProps2={v[2]}
                    />
                ))}
                
                {/* <li>
                    <div className="img w-100">
                        <img className="w-100" src={cate1} alt="" />
                    </div>
                    <div className="txt_box mt-10 p-20">
                        <div className="txt">
                            <h3 className="py-10">EVERYDAY</h3>
                            <p className="pb-20">BEST FOR: A RUN HERE AND THERE.</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </li> */}
            </ul>
        </section>
    )
}
export default Content2Cp;