import React from 'react'
import './styles/projects.css'
import tekkenLogo from './images/tekkennetLogo.svg'
import freecodecampLogo from './images/freecodecampLogo.svg'

export default function Projects() {
    return (
        <div id='projects' class='contentContainer'>
            <div class='textContainerLeft'id='projectsTextContainer'>
                <div class='textLeft' id='projectsText'>
                    <div id='projectsTextHeader'>
                        <text>
                            <p>Personal</p>
                            <p class='bigText'>Projects & Experience</p><br/>
                        </text>
                    </div>
                    <div id='projectsLogos'>
                        <img class='projectsLogo' id='tekkenLogo'src={tekkenLogo}/>
                        <img class='projectsLogo' id='freecodecampLogo' src={freecodecampLogo}/>
                    </div>
                </div>
            </div>
            <div class='pictureContainerRight' id='projectsPictureContainer'>
                <div class='pictureRight' id='projectsPicture'/>
            </div>
        </div>
    )
}
