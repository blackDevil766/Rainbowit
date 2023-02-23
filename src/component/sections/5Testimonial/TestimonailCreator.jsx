import React, { useState } from "react";
import { motion } from "framer-motion";


function TestimonailCreator(props) {


    
    console.log(window.innerWidth);



    return (
        <div class={props.class} data-bs-interval={props.interval}>

            <div className="TestimonalContainers col-sm-3 col-md-6 col-lg-12">

                <div className="right-testimonal" >
                    <div className="testimonal-img-container">
                        <img className="testimonial-img" src={props.img} alt="" />
                    </div>
                    <p className="card-Header">{props.header}</p>
                    <h3 className="Cards-title">{props.title}</h3>
                    <p className="testimonal-describtion">{props.description}</p>
                </div>

                <div className="left-testimonal col-sm-3 col-md-6 col-lg-12">
                    
                    

                    <div className="left-testimonal-description ">
                        <div className="testimonal-description">
                            <div className="testimonal-info">
                                <div className="titleAndData">
                                    <h3 className="testimonal-title">{props.testTitle}</h3>
                                    <span className="testimonal-date">via Upwork - Mar 4, 2015 - Aug 30, 2021</span>
                                </div>
                                <div className="stars">
                                    <img src="\img\star.svg" alt="" />
                                    <img src="\img\star.svg" alt="" />
                                    <img src="\img\star.svg" alt="" />
                                    <img src="\img\star.svg" alt="" />
                                    <img src="\img\star.svg" alt="" />
                                </div>
                            </div>
                            <hr />

                            <p className="testimonal-para">
                                Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquamsodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis maurishendrerit ante.
                                Ut tincidunt est ac dolor aliquam sodales phasellus smauris.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    )
}


export default TestimonailCreator;








































{/* <div className="containers" style={props.mov}>

<div className="TestimonalContainers">
    <div className="right-testimonal" >
        <div className="testimonal-img-container">
            <img className="testimonial-img" src="https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--1st.png" alt="" />
        </div>
        <p className="card-Header">Rainbow-themes</p>
        <h3 className="Cards-title">Nevine Acotanze</h3>
        <p className="testimonal-describtion">Chief Operating Officar</p>
    </div>

    <div className="left-testimonal">
        <div className="left-and-right-buttons">
            <button className="switchsBtn"><img className="left-btn" src="\img\leftAndrightArrow.svg" alt="" /></button>
            <button className="switchsBtn"><img className="right-btn" src="\img\leftAndrightArrow.svg" alt="" /></button>
        </div>

        <div className="left-testimonal-description">
            <div className="testimonal-description">
                <div className="testimonal-info">
                    <div className="titleAndData">
                        <h3 className="testimonal-title">Android App Development</h3>
                        <span className="testimonal-date">via Upwork - Mar 4, 2015 - Aug 30, 2021</span>
                    </div>
                    <div className="stars">
                        <img src="\img\star.svg" alt="" />
                        <img src="\img\star.svg" alt="" />
                        <img src="\img\star.svg" alt="" />
                        <img src="\img\star.svg" alt="" />
                        <img src="\img\star.svg" alt="" />
                    </div>
                </div>
                <hr />

                <p className="testimonal-para">
                    Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquamsodales.
                    Phasellus sed mauris hendrerit, laoreet sem in, lobortis maurishendrerit ante.
                    Ut tincidunt est ac dolor aliquam sodales phasellus smauris.
                </p>
            </div>
        </div>
    </div>
</div>


</div> */}