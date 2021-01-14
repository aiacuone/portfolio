import React from 'react'
import './styles/projectsTekkenNet.css'
import tekkenLogo from './images/tekkennetLogo.svg'

export default function ProjectsTekkenNet() {
    return (
        <div id='tekken'>
            <div id='tekkenContainer'>
            <div id='tekkenHeaderContainer' class='projectsHeaderLogoContainer'><img id='projectsTekkenLogo' class='projectsLogo'src={tekkenLogo}></img></div>
            <text>
                <br/>
                <br/>
                <h3 class='projectsSubHeader'>Summary</h3>
                <br/>
                Tekken is a fighting game that has been around for around 25 years. Over that duration, they have developed over 50 characters, each character having on average 80+ moves, each of these moves having there own attributes and characteristics
                <br/>
                <br/>
                Tekken-Net is designed to to take all this information and simplify in a way that is easily accessed and understood.
                <br/>
                <br/>
                <br/>
                <h3 class='projectsSubHeader'>Languages and Skills used</h3>
                <br/>
                <p>Languages: React, Javascript, CSS, HTML </p>
                <br/>
                <p>Skills: Objects, loops, </p>
                <br/>
                <br/>
                </text>
                <div id='freecodecampButtonContainer'>
                    <p class='projectsButton'>View Project!</p>
                </div>

            </div>
            <div id='tekkenPictures'>
                <div id='tekkenPicture1'>PICTURE1</div>
                <div id='tekkenPicture2'>PICTURE2</div>         
            </div>
        </div>
    )
}
