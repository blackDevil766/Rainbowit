import React, { useState } from "react";
import CardCreator from "./portfolioCreator";
import { portfolioImgs } from "./portfolioCreator";

function Portfolio() {


    // const [showIt, setShowIT] = useState("")

    // // const dataa = ;

    // function Showw() {
    //     setShowIT(
           
    //     )
    // }


    // function hideIt() {
    //     setShowIT("")
    
    // }

    const [actionTaken, setActionTaken] = useState("hideTheFlyDiv")

    function Showw() {
        setActionTaken("flyingDiv")
    }

    function hideTheAction() {
        setActionTaken("hideTheFlyDiv")
        
    }

    return (
        <div id="portfolio" className="Portfolio-Container1">
            <hr />

            {/* {showIt} */}

            <div className={actionTaken}>
                <div className="portfolioShower">

                    <div className="showImg">
                        <img className="rainboitImg" src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg" alt="" />
                    </div>

                    <div className="showDescribtions">

                        <div onClick={hideTheAction} className="closeDiv">
                            <img className="closeIco" src="\img\closeIcon.svg" alt="" />
                        </div>

                        <div className="contactShower">
                            <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
                            <h3 className="titleOfFlyingDescribtion">App Design Development.</h3>
                            <p className="md-typo-of-flying-describtion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                            <p className="md-typo-of-flying-describtion2">Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                        </div>
                        <div className="buttons">
                            <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
                            <button id="signUpBtn" className="btn viewBtn" type="submit">view project <img src="\img\right-arrow.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="header-portoflio">
                <p className="subtitle2">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                {/* <h1 className="title2">My Portfolio</h1> */}
                <h1 className="title2">My Portfolio</h1>
            </div>

            <div className="portfolio-boxes">
                <CardCreator
                    show={Showw}
                    img={portfolioImgs.development}
                    listTitle="development"
                    numbers="600"
                    title="The services provide for design "
                />

                <CardCreator
                    show={Showw}
                    img={portfolioImgs.application}
                    listTitle="application"
                    numbers="750"
                    title="Mobile app landing design & app maintain"
                />

                <CardCreator
                    show={Showw}
                    img={portfolioImgs.photoShop}
                    listTitle="photoshop"
                    numbers="630"
                    title="Logo design creativity &amp; Application"
                />


            </div>

            <div className="portfolio-boxes">

                <CardCreator
                    show={Showw}
                    img={portfolioImgs.figma}
                    listTitle="figma"
                    numbers="360"
                    title="Mobile app landing design & app maintain"
                />

                <CardCreator
                    show={Showw}
                    img={portfolioImgs.webDesign}
                    listTitle="web design"
                    numbers="280"
                    title="Design for tecnology & services"
                />

                <CardCreator
                    show={Showw}
                    img={portfolioImgs.webDesign2}
                    listTitle="web design"
                    numbers="690"
                    title="App for tecnology & services"
                />
            </div>

        </div>
    )
}

export default Portfolio;
































































// import React, { useState } from "react";
// import PortfolioCreator from "./portfolioCreator";
// import { portfolioImgs } from "./portfolioCreator";

// function Portfolio() {


//     const [showIt, setShowIT] = useState("")

//     // const dataa = ;

//     function Showw() {
//         setShowIT(
//             <div className="flyingDiv">
//                 <div className="portfolioShower">

//                     <div className="showImg">
//                         <img className="rainboitImg" src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg" alt="" />
//                     </div>

//                     <div className="showDescribtions">

//                         <div onClick={hideIt} className="closeDiv">
//                             <img className="closeIco" src="\img\closeIcon.svg" alt="" />
//                         </div>

//                         <div className="contactShower">
//                             <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
//                             <h3 className="titleOfFlyingDescribtion">App Design Development.</h3>
//                             <p className="md-typo-of-flying-describtion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
//                             <p className="md-typo-of-flying-describtion2">Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
//                         </div>
//                         <div className="buttons">
//                             <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
//                             <button id="signUpBtn" className="btn viewBtn" type="submit">view project <img src="\img\right-arrow.svg" alt="" /></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }


//     function hideIt() {
//         setShowIT("")
//     }


//     return (
//         <div className="Portfolio-Container1">
//             <hr />

//             {showIt}


//             <div className="header-portoflio">
//                 <p className="subtitle2">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
//                 {/* <h1 className="title2">My Portfolio</h1> */}
//                 <h1 onClick={Showw} className="title2">My Portfolio</h1>
//             </div>

//             <div className="portfolio-boxes">
//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.development}
//                     listTitle="development"
//                     numbers="600"
//                     title="The services provide for design "
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.application}
//                     listTitle="application"
//                     numbers="750"
//                     title="Mobile app landing design & app maintain"
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.photoShop}
//                     listTitle="photoshop"
//                     numbers="630"
//                     title="Logo design creativity &amp; Application"
//                 />


//             </div>

//             <div className="portfolio-boxes">

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.figma}
//                     listTitle="figma"
//                     numbers="360"
//                     title="Mobile app landing design & app maintain"
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.webDesign}
//                     listTitle="web design"
//                     numbers="280"
//                     title="Design for tecnology & services"
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.webDesign2}
//                     listTitle="web design"
//                     numbers="690"
//                     title="App for tecnology & services"
//                 />
//             </div>

//         </div>
//     )
// }

// export default Portfolio;