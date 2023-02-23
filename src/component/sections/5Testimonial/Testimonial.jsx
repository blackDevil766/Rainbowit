import React, { useState } from "react";
import TestimonailCreator from "./TestimonailCreator";
// import {motion} from 'framer-motion/dist/es/index'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'



function Testimonial() {

    // let pressed = false;
    // let startx;
    // let x;


    // const [added, setAdded] = useState("");
    //     const [home, setHome] = useState();
    // const [slider, setSlider] = useState("slide")


    // function mouseDown(e) {
    //     pressed = true;
    //     setAdded("grabbing");
    //     startx = e.nativeEvent.offsetX - e.nativeEvent.movementX;
    // startx = e.nativeEvent.clientLeft
    // slider.style.cursor = ""
    // console.log();

    // }

    // function mouseEnter() {
    //     setAdded("grab")
    // }

    // function mouseUp() {
    //     setAdded("grab");
    //     pressed = false;

    // }


    return (
        <div id="testimonial" className="testimonal-container ">
            <hr />
            <div className="header-container col-sm-3 col-md-6 col-lg-12">
                <p className="headerParagrafe">what clients say</p>
                <h1 className="headerTitle">Testimonial</h1>
            </div>

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">

                    <button id = "btns" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button id = "btns" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button id = "btns" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button id = "btns" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button id = "btns" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>

                </div>

                <div class="carousel-inner">

                    <div className="left-and-right-buttons ">
                        <button className="switchsBtn next" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <img className="left-btn" src="\img\leftAndrightArrow.svg" aria-hidden="true" alt="" />
                        </button>

                        <button className="switchsBtn prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <img className="right-btn" src="\img\leftAndrightArrow.svg" aria-hidden="true" alt="" />
                        </button>
                    </div>

                    <TestimonailCreator
                        class="carousel-item active"
                        interval="1000000"
                        img="https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--1st.png"
                        header="Rainbow-themes"
                        title="Nevine Acotanze"
                        description="Chief Operating Officar"
                        testTitle = "Android App Development"
                    />
                    <TestimonailCreator
                        class="carousel-item"
                        interval="2000"
                        img="https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--2nd.png"
                        header="Bound - Trolola"
                        title="Jone Duone Joe"
                        description="Operating Officer"
                        testTitle = "Web App Development"
                    />
                    <TestimonailCreator
                        class="carousel-item"
                        img="https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--3rd.png"
                        header="Glassfisom"
                        title="Nevine Dhawan"
                        description="CEO Of Officer"
                        testTitle = "Android App Design"
                    />

                    <TestimonailCreator
                        class="carousel-item"
                        img="https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--4th.png"
                        header="NCD - Design"
                        title="Mevine Thoda"
                        description="Marketing Officer"
                        testTitle = "CEO - Marketing"
                    />

                    <TestimonailCreator
                        class="carousel-item"
                        img="https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--5th.png"
                        header="Default name"
                        title="Davei Luace"
                        description="Chief Operating Manager"
                        testTitle = "Android App Development"
                    />

                </div>

            </div>

        </div>


    )
}

export default Testimonial;