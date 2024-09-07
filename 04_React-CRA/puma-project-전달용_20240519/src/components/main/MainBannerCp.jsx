//MainBannerCp.jsx

import ButtonTextAtm from "../atoms/ButtonTextAtm"

const MainBannerCp = (...props) => {
    console.log(props);

    const handleClick = () => {
        console.log('클릭 실행')
    }

    return (
        <section className="banner py-70">
            <div className="wrap d-flex flex-wrap">
                <div className="img w-50"></div>
                <div className="txt_box w-50">
                    <div className="txt p-10 d-flex flex-direction-column align-items-center justify-content-center">
                        <h3 className="">RUN PUMA</h3>
                        <p className="p-20">PUMA’s history is packed with nearly 75 years of world records, firsts, 
    and onlys from Abebe Bikila to Bill Rodgers to Sabrina Mockenhaupt to 
    Usain Bolt. In industry years, this makes us faster since forever, and we 
    believe now is the time for us to pick up speed again and spark change 
    from the most sought-after marathon finish lines to local run 
    communities.</p>
                        <ButtonTextAtm 
                            className="pt-10 pb-10" 
                            evtProps={props[0].evtProps} 
                            txtProps="More Movie"
                        />
                        {/* <button>More Movie</button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MainBannerCp;