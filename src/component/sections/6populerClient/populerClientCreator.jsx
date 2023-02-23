import React from "react";


function Item(props) {
    return (
        <div className="rightClientItem">
            <div className="main-content">
                <div className="inner-content">
                    <div className="content-img">
                        <img className="img" src={props.img} alt="" />
                    </div>
                    <hr className="hrr" />
                    <div className="content-name">
                        <span className="clientNames">{props.clientNames}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}



function Client(props) {
    return (
        <div  id = {props.id} style={{opacity:props.opacityy, position: props.positions}} className="clientRightSection">
            <Item clientNames={props.name1} img="https://rainbowit.net/html/inbio/assets/images/client/png/client1.png" />
            <Item clientNames={props.name2} img="https://rainbowit.net/html/inbio/assets/images/client/png/client2.png" />
            <Item clientNames={props.name3} img="https://rainbowit.net/html/inbio/assets/images/client/png/client3.png" />
            <Item clientNames="Smitha Mila" img="https://rainbowit.net/html/inbio/assets/images/client/png/client4.png" />
            <Item clientNames="Sultana Mila" img="https://rainbowit.net/html/inbio/assets/images/client/png/client5.png" />
            <Item clientNames="Jannat" img="https://rainbowit.net/html/inbio/assets/images/client/png/client1.png" />
            <Item clientNames="Smith Mila" img="https://rainbowit.net/html/inbio/assets/images/client/png/client2.png" />
            <Item clientNames="Sultana Mila" img="https://rainbowit.net/html/inbio/assets/images/client/png/client3.png" />
            <Item clientNames="Jannat" img="https://rainbowit.net/html/inbio/assets/images/client/png/client4.png" />
            <Item clientNames="Mila Dus" img="https://rainbowit.net/html/inbio/assets/images/client/png/client5.png" />
            <Item clientNames="Marth Smiths" img="https://rainbowit.net/html/inbio/assets/images/client/png/client1.png" />
            <Item clientNames="Marth Smiths" img="https://rainbowit.net/html/inbio/assets/images/client/png/client2.png" />
         </div>
    )
}


export default Client;
