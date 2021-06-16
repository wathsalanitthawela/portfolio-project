import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <div>
            <div className="header-wraper">
                <div className="main-info">
                    <h1>WEB DEVELOPMENT AND WEB SITE PROMOTIONS</h1>
                    <Typed
                    className="typed-text"
                    strings={["Web Design","Web Development","Facebook Ads SMM","Google Adds"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                    <a href="#" className="btn-main-offer">contact me</a>
                </div>
            </div>
        </div>
    )
}

export default Header
