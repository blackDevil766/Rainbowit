import React from "react";
import Card from "../resumeCreator/1EducationCardCreator";

import Skill from "../resumeCreator/2professionalCreator";

function ProfessionalSkills(props) {
    return (
        <div className={props.class}>

            <div className="right-details">
                <p className="p-detalis">Features</p>
                <h4 className="h-details">Design Skill</h4>


                <Skill heading="photoshot" percent="100%" />
                <Skill heading="figma" percent="95%" />
                <Skill heading="adobe xd" percent="60%" />
                <Skill heading="adobe illustrator" percent="70%" />
                <Skill heading="design" percent="90%" />

            </div>

            <div className="left-details">
                <p className="p-detalis">Features</p>
                <h4 className="h-details">Development Skill</h4>


                <Skill heading="html" percent="85%" />
                <Skill heading="css" percent="80%" />
                <Skill heading="javascript" percent="90%" />
                <Skill heading="software" percent="75%" />
                <Skill heading="plugin" percent="70%" />

            </div>
        </div>
    )
}


export default ProfessionalSkills;