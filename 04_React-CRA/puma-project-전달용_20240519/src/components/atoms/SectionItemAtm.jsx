//SectionItemAtm.jsx
import ImgAtm from "./ImgAtm"
import ButtonTextAtm from "./ButtonTextAtm"

const SectionItemAtm = ({srcProps2, altProps2, titProps2, txtProps2, ...props}) => {
    return (
        <li>
            <div className="img w-100">
                {/* 아래 구성을 <ImgAtm />으로 대체 */}
                <img className="w-100" src={srcProps2} alt={altProps2} />
            </div>
            <div className="txt_box mt-10 px-10 pb-20">
                <div className="txt">
                    <h3 className="py-10">{titProps2}</h3>
                    <p className="pb-20">{txtProps2}</p>
                    {/* 아래 구성을 ButtonTextAtm />으로 대체 */}
                    <button>Shop Now</button>
                </div>
            </div>
        </li>
    )
}
export default SectionItemAtm