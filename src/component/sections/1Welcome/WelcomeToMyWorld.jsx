import React from "react";
import Typed from "react-typed";

function WelcomeToMyWorld() {

    const textLines = [
        `Developer.`,
        `Professional Coder.`,
        `Creative.`,

    ];

    return (
        <div className="welcomeToMyWorldSection-continer">
          

          <div className="welcomeToMyWorldSection-left">
                <div className="left-contanir">
                    <span className="introWord">WELCOME   TO   MY   WORLD</span>
                    <div>
                        <h1 className="typo">Hi, I'm <span className="subName">Ahmed Allam</span></h1>
                        <h1 className="typoChanger">a <span className="auto-type">  <Typed strings={textLines} typeSpeed={60} backSpeed={60} startDelay={500} backDelay={500} loop={true} /> </span></h1>
                        <p className="description">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                    </div>

                </div>

                <div className="icons-continer-section">
                    <div className="icos1">
                        <p className="titleForIcons">FIND WITH ME</p>
                        <div className="iconHolder">
                            <button href="" className="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </button>
                            <button href="" className="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </button>
                            <button href="" className="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </button>
                        </div>
                    </div>

                    <div className="icos2">
                        <p className="titleForIcons">BEST SKILL ON</p>
                        <div className="iconHolder">

                        <button href="" className="icons"> <img className="images" src="https://rainbowit.net/html/inbio/assets/images/icons/icons-01.png" alt="" /> </button>
                        <button href="" className="icons"> <img className="images" src="img/icons-02.png" alt="" /> </button>
                        <button href="" className="icons"> <img className="images" src="https://rainbowit.net/html/inbio/assets/images/icons/icons-03.png" alt="" /> </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="space welcomeToMyWorldSection-right">
                <img className="personal-img" src="https://rainbowit.net/html/inbio/assets/images/slider/banner-01.png" alt="" />
            </div>

  


        </div>
    )
}


export default WelcomeToMyWorld;