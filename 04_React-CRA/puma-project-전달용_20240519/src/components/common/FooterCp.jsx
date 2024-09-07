//FooterCp.jsx
// import {  } from "react"
import footLogo from "../../assets/images/puma_logo_footer.png";
import footDeco from "../../assets/images/puma-logo-white.png";

import ButtonIconAtm from "../atoms/ButtonIconAtm";
import ListItemAtm from "../atoms/ListItemAtm";


const FooterCp = () => {
    const support_link = [
        {name: "Customer Service", link: "/service" },
        {name: "Contact Us", link: "/contact" },
        {name: "Shipping and Delivery", link: "/delivery" },
        {name: "Store Locator", link: "/store" },
        {name: "Return Policy", link: "/policy" },
        {name: "Purchase a Digital Gift Card", link: "/purchase" },
        {name: "FAQs", link: "/faq" },
        {name: "Privacy Policy", link: "/privacy" },
        {name: "Service Discount", link: "/discount" },
    ];
    const about_link = [
        {name: "Company", link: "/company"},
        {name: "Corporate News", link: "/news"},
        {name: "Press Center", link: "/press"},
        {name: "#REFORM", link: "/reform"},
        {name: "Investors", link: "/invest"},
        {name: "Sustainability", link: "/sustainability"},
        {name: "Careers", link: "/careers"},
    ]

    return (
        <footer id="footer" className="w-100 h-auto">
            <div className="bg w-100 h-100-per p-40">
                <div className="logo">
                    <ButtonIconAtm srcProps={footLogo} altProps="로고" />
                    {/* <a href="/">
                        <img src={footLogo} alt="로고" />
                    </a> */}
                </div>
                <div className="puma">
                    <img src={footDeco} alt="하단 데코레이션 이미지" />
                </div>
                <div className="wrap">
                    <ul className="foot_link w-100 d-flex flex-wrap justify-content-center align-items-start pb-40">
                        <li>
                            <h3>support</h3>
                            <ul className="d-flex flex-wrap justify-content-between pb-10">
                                {support_link.map((v, i) => (
                                    <ListItemAtm 
                                        key={i}
                                        className="mt-10"
                                        nameProps={v.name}
                                        linkProps={v.link}
                                    />
                                ))}
                                
                                {/* <li>
                                    <a href="/">sample1-1</a>
                                </li> */}
                            </ul>
                        </li>
                        <li>
                            <h3>about</h3>
                            <ul>
                                <li>
                                    <a href="/">sample2(about_link.map을 구성하여 ListItemAtm으로 전달할 것~!)</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <p className="copy w-100">&copy; PUMA SE, 2024. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
export default FooterCp;