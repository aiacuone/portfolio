import React from 'react'
import './styles/projectsIntro.css'

export default function ProjectsIntro() {
    return (
        <div id='projectsIntro'>
            <div id='introContainer1'>
                <div id='projectsIntroText'>
                    <text>
                        <p>
                            {/* <p class='mediumText'>Welcome to my projects Section!</p> */}
                            <h2>Welcome to my projects Section!</h2>
                            <br/>
                            Please select any of the projects to the left
                        </p>
                    </text>
                </div>
                <div id='projectsPictureContainer1'>
                    <div id='projectsPicture1'/>
                </div>
            </div>
            <div id='introContainer2'>
                <div id='projectsPictureContainer2'>
                    <div id='projectsPicture2'/>
                </div>
                <div id='projectsPictureContainer3'>
                    <div id='projectsPicture3'/>
                </div>
            </div>

        </div>
    )
}
