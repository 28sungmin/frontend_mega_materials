import { useMemo } from "react"
import ButtonTextAtm from "../atoms/ButtonTextAtm"

const DarkBgCp = (props) => {
    console.log(props); //{category: 'mainBanner', evtProps: ƒ}
    const selectedChildren = (val) => {
        console.log(val);
        switch(val){
            case "mainBanner": 
                return(
                    <div className="bannerVideo">
                        <iframe className="banner_space" src="https://www.youtube.com/embed/ZJTuxRDIUT4?rel=0&amp;autoplay=1&amp;loop=1&amp;playlist=ZJTuxRDIUT4&amp;mute=1&amp;controls=0&amp;modestbranding=0&amp;showinfo=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                );
            // case "login":
            default : 
                return "";
        }
    }

    return (
        <>
            <div className="popBg" onClick={props.evtProps}></div>
            <div className="popWrap p-20">
                {/* 실제 팝업 내용 */}
                <div className="popContext">
                    {selectedChildren(props.category)}
                </div>
                <div className="bottomBtn">
                    <ButtonTextAtm  
                        className="closePopBtn" 
                        evtProps={props.evtProps} 
                        txtProps="닫기" 
                    />
                </div>
            </div>
        </>
    )
}
export default DarkBgCp;