import React, { useState } from "react";
import PriceList from "./PriceCreator";

function Price(param) {

    const [activeBtn, setActiveBtn] = useState(() => {
        return {
            id1: "",
            id2: "active",
            id3: "",
        }
    })

    const [priceState, setPriceState] = useState(() => {
        return {
            opacityy1: "0",
            position1: "fixed",
            opacityy2: "1",
            position2: "",
            opacityy3: "0",
            position3: "fixed"
        }
    })

    function changeToState1() {
        setPriceState(() => {
            return {
                opacityy1: "1",
                position1: "",
                opacityy2: "0",
                position2: "fixed",
                opacityy3: "0",
                position3: "fixed"
            }
        })

        setActiveBtn(() => {
            return {
                id1: "active"
            }
        })
    }

    function changeToState2() {
        setPriceState(() => {
            return {
                opacityy1: "0",
                position1: "fixed",
                opacityy2: "1",
                position2: "",
                opacityy3: "0",
                position3: "fixed"
            }
        })

        setActiveBtn(() => {
            return {
                id2: "active"
            }
        })
    }

    function changeToState3() {
        setPriceState(() => {
            return {
                opacityy1: "0",
                position1: "fixed",
                opacityy2: "0",
                position2: "fixed",
                opacityy3: "1",
                position3: ""
            }
        })

        setActiveBtn(() => {
            return {
                id3: "active"
            }
        })
    }

    return (
        <div id="price" className="price-container">
            <hr />
            <div className="pricingSection">

                <div className="pricing-header-container-l ">
                    <div id="pricy">
                        <p className="headerParagrafe">Pricing</p>
                        <h1 className="headerTitle">My Pricing</h1>
                    </div>
                </div>

                <div className="pricing-header-container-r ">
                    <div className="price-holder">
                        <ul className="price-type">
                            <li onClick={changeToState1} id={activeBtn.id1} className="price-state1">Static</li>
                            <li onClick={changeToState2} id={activeBtn.id2} className="price-state2">Standard</li>
                            <li onClick={changeToState3} id={activeBtn.id3} className="price-state3">Premium</li>
                        </ul>

                        <PriceList opacityy={priceState.opacityy1} positions={priceState.position1} title="Make Your Single Page" price="$30.00" describ="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary" />
                        <PriceList opacityy={priceState.opacityy2} positions={priceState.position2} title="Design Make this Page" price="$50.00" describ="Making this the first true generator on the Internet. It uses a dictionary & plugin Development." />
                        <PriceList opacityy={priceState.opacityy3} positions={priceState.position3} title="Customize Your Single Page" price="$90.00" describ="I will install your desire theme and made like Theme demo and customize your single page( homepage)" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price