

import React, { useState } from "react";
import Client from "./populerClientCreator";

function PopulerClient() {

    const [activeClick, setActiveClick] = useState(() => {
        return {
            item1: "atcive",
            item2: "",
            item3: "",
            item4: "",
            item5: "",
            item6: "",
        }
    })

    const [hidee, setHide] = useState(() => {
        return{
            opacitys1: "",
            position1: "",

            opacitys2: "0",
            position2: "fixed",

            opacitys3: "0",
            position3: "fixed",

            opacitys4: "0",
            position4: "fixed",

            opacitys5: "0",
            position5: "fixed",

            opacitys6: "0",
            position6: "fixed",
        }
    })


    function clicked1(event) {
        setActiveClick(() => {
            return {
                item1: "atcive",
            }
        })

        setHide(()=>{
            return{
               

                opacitys1: "1",
                position1: "",

                opacitys2: "0",
                position2: "fixed",
    
                opacitys3: "0",
                position3: "fixed",
    
                opacitys4: "0",
                position4: "fixed",
    
                opacitys5: "0",
                position5: "fixed",
    
                opacitys6: "0",
                position6: "fixed",
            }
        })
    }

    function clicked2(event) {
        setActiveClick(() => {
            return {
                item2: "atcive",
            }
        })

        setHide(()=>{
            return{
                opacitys1: "0",
                position1: "fixed",

                opacitys2: "1",
                position2: "",

                opacitys3: "0",
                position3: "fixed",
    
                opacitys4: "0",
                position4: "fixed",
    
                opacitys5: "0",
                position5: "fixed",
    
                opacitys6: "0",
                position6: "fixed",
            }
        })

    }

    function clicked3(event) {
        setActiveClick(() => {
            return {
                item3: "atcive",
            }
        })

        setHide(()=>{
            return{
                opacitys1: "0",
                position1: "fixed",
                
                opacitys2: "0",
                position2: "fixed",

                opacitys3: "1",
                position3: "",
    
                opacitys4: "0",
                position4: "fixed",
    
                opacitys5: "0",
                position5: "fixed",
    
                opacitys6: "0",
                position6: "fixed",
            }
        })

    }

    function clicked4(event) {
        setActiveClick(() => {
            return {
                item4: "atcive",
            }
        })

        setHide(()=>{
            return{
                opacitys1: "0",
                position1: "fixed",
                
                opacitys2: "0",
                position2: "fixed",

                opacitys3: "0",
                position3: "fixed",
    
                opacitys4: "1",
                position4: "",
    
                opacitys5: "0",
                position5: "fixed",
    
                opacitys6: "0",
                position6: "fixed",
            }
        })
    }

    function clicked5(event) {
        setActiveClick(() => {
            return {
                item5: "atcive",
            }
        })

        setHide(()=>{
            return{
                opacitys1: "0",
                position1: "fixed",
                
                opacitys2: "0",
                position2: "fixed",

                opacitys3: "0",
                position3: "fixed",
    
                opacitys4: "0",
                position4: "fixed",
    
                opacitys5: "1",
                position5: "",
    
                opacitys6: "0",
                position6: "fixed",
            }
        })

    }

    function clicked6(event) {
        setActiveClick(() => {
            return {
                item6: "atcive",
            }
        })

        setHide(()=>{
            return{
                opacitys1: "0",
                position1: "fixed",
                
                opacitys2: "0",
                position2: "fixed",

                opacitys3: "0",
                position3: "fixed",
    
                opacitys4: "0",
                position4: "fixed",
    
                opacitys5: "0",
                position5: "fixed",
    
                opacitys6: "1",
                position6: "",
            }
        })

    }

    return (
        <div className="populerContainer">

            <hr />

            <div className="client-header-container col-sm-3 col-md-6 col-lg-12">
                <p className="headerParagrafe">POPULAR CLIENTS</p>
                <h1 className="headerTitle">Awesome Clients</h1>
            </div>

            <div className="clients">

                <div className="leftClientDescribtion">
                    <ul className="clientLeftSections">
                        <li onClick={clicked1} id={activeClick.item1} className="LeftclientItems">JavaScript</li>
                        <li onClick={clicked2} id={activeClick.item2} className="LeftclientItems">Product Design</li>
                        <li onClick={clicked3} id={activeClick.item3} className="LeftclientItems">WordPress</li>
                        <li onClick={clicked4} id={activeClick.item4} className="LeftclientItems">HTML to React</li>
                        <li onClick={clicked5} id={activeClick.item5} className="LeftclientItems">React to Laravel</li>
                        <li onClick={clicked6} id={activeClick.item6} className="LeftclientItems">Python</li>

                    </ul>
                </div>

                <div className="rigtClientDescribtion">
                    <Client name1="gemy" name2="fat7y" name3="ahmed allam"  opacityy = {hidee.opacitys1} positions = {hidee.position1} />
                    <Client name1="allam" name2="mohamed" name3="yasser" opacityy = {hidee.opacitys2} positions = {hidee.position2} />
                    <Client name1="devil" name2="red" name3="blue" opacityy = {hidee.opacitys3} positions = {hidee.position3} />
                    <Client name1="essam" name2="eslam" name3="moncky" opacityy = {hidee.opacitys4} positions = {hidee.position4} />
                    <Client name1="asem" name2="face" name3="mark" opacityy = {hidee.opacitys5} positions = {hidee.position5} />
                    <Client name1="mairam" name2="dad" name3="mom" opacityy = {hidee.opacitys6} positions = {hidee.position6} />
                </div>

            </div>
        </div>
    )
}

export default PopulerClient;
