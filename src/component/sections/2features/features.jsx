import React, { useState } from "react";
import BoxCreator, { iconContain } from "./BoxCreator"
// import FeatureCreator from "./FeaturesCreator";




function Features() {


    return (
        <div id="featurs">
            <hr />

            <div className="features-secondSection">
                <span class="subtitle">FEATURES</span>
                <h2 className="title">What I Do</h2>

            </div>


            <div className="features-continer">

                <ul className="feild">
                    <BoxCreator svgIcon={iconContain.listBox} title="Business Stratagy" describe="I throw myself down among the tall grass by the stream as I lie close to the earth." />
                    <BoxCreator svgIcon={iconContain.bookBox} title="App Development" describe=" It uses a dictionary of over 200 Latin words, combined with a handful of model sentence." />
                    <BoxCreator svgIcon={iconContain.tevBox} title="App Development" describe="I throw myself down among the tall grass by the stream as I lie close to the earth." />
                </ul>

                <ul className="feild">
                    <BoxCreator svgIcon={iconContain.switchAppBox} title="Mobile App" describe="There are many variations of passages of Lorem Ipsum available, but the majority." />
                    <BoxCreator svgIcon={iconContain.wifiBox} title="CEO Marketing" describe="always free from repetition, injected humour, or non-characteristic words etc." />
                    <BoxCreator svgIcon={iconContain.slackBox} title="Personal Portfolio April" describe=" It uses a dictionary of over 200 Latin words, combined with a handful of model sentence." />
                </ul>

            </div>
        </div>
    )
}


export default Features;

