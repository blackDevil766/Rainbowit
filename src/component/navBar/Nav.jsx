import React, { useState } from "react";
import Item from "./Item";



var scro = 200

window.addEventListener("scroll", () => {
    var nav = document.querySelector("#nav");
    
    
    if (window.scrollY <= scro) {
        // console.log("done");
        nav.classList.add("native2");

    }

})



function NavBar(props) {

    var item = document.getElementsByClassName("features-secondSection")
    console.log(item);

    // item.scrollIntoView();

    function scrollToFeatures(params) {
        console.log("welcome in features");
        console.log(window.scrollY);
        // window.scrollBy(0, 800);

    }

    function scrollToPortfolio(params) {
        console.log("welcome in portfolio");
        console.log(window.scrollY);
        // window.scrollTo(0, 1839)        

    }

    function scrollToResume(params) {
        console.log("welcome in resume");
        console.log("");

    }

    function scrollToClients(params) {
        console.log("welcome in clients");
        console.log("");

    }

    function scrollToPricing(params) {
        console.log("welcome in pricing");
        console.log("");

    }

    function scrollToBlog(params) {
        console.log("welcome in blog");
        console.log("");

    }

    function scrollContact(params) {
        console.log("welcome in contact");
        console.log("");

    }



    
    return (
        <nav  id="nav" className ="navbar navbar-expand-lg navbar-light ">
            <div className ="container-fluid ">

                <a className ="navbar-brand navLogo" href="#"><img className="LogoIcon" src="https://rainbowit.net/html/inbio/assets/images/logo/logo.png" alt="" /></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="changeColor" className ="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a id="homeItem" className="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>

                        <Item linkIt = "#featurs" text="FEATURES"  scrollPosition = {scrollToFeatures} />
                        <Item linkIt = "#portfolio" text="PORTFOLIO" scrollPosition = {scrollToPortfolio} /> 
                        <Item linkIt = "#resume" text="RESUME"    scrollPosition = {scrollToResume} /> 
                        <Item linkIt = "#testimonial" text="CLIENTS"   scrollPosition = {scrollToClients} />
                        <Item linkIt = "#price" text="PRICING"   scrollPosition = {scrollToPricing} />
                        <Item linkIt = "#blog" text="BLOG"      scrollPosition = {scrollToBlog} /> 
                        <Item linkIt = "#contact" text="CONTACT"   scrollPosition = {scrollContact} /> 
                    


                    </ul>
                    <div className="loginPart">
                        {/* <a className="login"> <img src="imgs\person.svg" alt="" /> Login</a> */}
                        <button id="signUpBtn" className="btn" type="submit">BUY NOW</button>
                    </div>


                </div>
            </div>

        </nav>

       


)
}


export default NavBar;










































// var lastScrollY = window.scrollY;

// window.addEventListener("scroll", () => {

//     var nav = document.querySelector("#nav");

//     if (lastScrollY < window.scrollY ) {
//         nav.classList.remove("native2");
//         nav.classList.add("native");
        
//         if (window.scrollY == 777.7777709960938) {
//             // console.log(its);
//         }


//     } else {
//         nav.classList.remove("native2");
//         nav.classList.add("native2");
//     }

//     lastScrollY = window.scrollY;
// })


































// scond try //






// if (lastScroll < window.scrollY) {
    
//     var nav = document.querySelector("#nav");

//     nav.classList.add("native");
   
//     if (window.scrollY == 700 && 701 && 702 && 703 && 704 && 705 && 706) {
//         nav.classList.remove("native");
//         nav.classList.add("native2");
//     }

// }

//     lastScrollY = window.scrollY;
