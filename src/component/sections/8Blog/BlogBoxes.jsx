import React, { useState } from "react";

const blogImgs = ({
    Canada: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg",
    development: "https://rainbowit.net/html/inbio/assets/images/blog/blog-02.jpg",
    Application: "https://rainbowit.net/html/inbio/assets/images/blog/blog-03.jpg",
})


function BlogBoxes(props) {

    const [hoverd, setHoverd] = useState("")

    function mouseover() {
        setHoverd("imgHoverd")
    }
    function mouseout() {
        setHoverd("")
    }

    const [arrowNumber, setArrowNumber] = useState("arrowHide");

    function mouseoverTitle() {
        setArrowNumber("arrowShow")
    }

    function mouseoutTitle() {
        setArrowNumber("arrowHide")
    }



    return (
        <div onClick={props.show} onMouseOver={mouseover} onMouseOut={mouseout} className="portfolio-container">


            <a className="Portfo-img" >
                <img id="portfolio-img" className={hoverd} src={props.img} alt="" />
            </a>
            <div className="category-info">
                <div className="category-list">
                    <a href="">{props.listTitle}</a>
                </div>

                <div className="category-meta">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {props.time}
                </div>

            </div>
            <h4 className="describtion2" onMouseOver={mouseoverTitle} onMouseOut={mouseoutTitle}>
                <h4 className="h4PortfolioTitle">{props.title}</h4>
                <img id="arrowPortfolioImg" className={arrowNumber} src="\img\arrow.svg" alt="" />
            </h4>

        </div>
    )
}

export default BlogBoxes;
export { blogImgs };