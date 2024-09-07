//MainVideoCp.jsx
import scrollIcon from "../../assets/images/scroll_down.gif";
import ImgAtm from "../atoms/ImgAtm";

const MainVideoCp = () => {
    return (
        <section className="mainVideo">
            <iframe className="movie_space" src="https://www.youtube.com/embed/iWI_uBH6R1g?rel=0&amp;autoplay=1&amp;loop=1&amp;playlist=iWI_uBH6R1g&amp;mute=1&amp;controls=0&amp;modestbranding=0&amp;showinfo=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <div className="dark">
                <ImgAtm className="scroll-down" srcProps={scrollIcon} altProps="스크롤 다운 이미지" />
                {/* <img className="scroll-down" src={scrollIcon} alt="스크롤 다운 이미지" /> */}
            </div>
        </section>
    )
}
export default MainVideoCp;