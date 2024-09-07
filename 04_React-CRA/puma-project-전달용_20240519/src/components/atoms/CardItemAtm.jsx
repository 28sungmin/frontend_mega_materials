//CardItemAtm.jsx
import ImgAtm from "./ImgAtm";

const CardItemAtm = ({srcProps1, altProps1, titProps, txtProps, ...props}) => {
    return (
        <li className="list">
            <ImgAtm srcProps={srcProps1} altProps={altProps1}  />
            {/* <img src={srcProps} alt={altProps} /> */}
            <div className="context">
                <div className="dark d-flex flex-direction-column justify-content-center align-items-center">
                    <h4>{titProps}</h4>
                    <p>{txtProps}</p>
                    <button>More</button>
                </div>
            </div>
        </li>
    )
}
export default CardItemAtm;