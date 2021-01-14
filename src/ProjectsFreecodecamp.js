import React from 'react'
import freecodecampLogo from './images/freecodecampLogo.svg'
import './styles/freecodecamp.css'

export default function ProjectsFreecodecamp() {
    return (
        <div id='freecodecamp'>
            <div id='freecodecampContainer'>
                <text>
                    <div id='freecodecampHeaderContainer'><img class='projectsLogo' src={freecodecampLogo}/></div>
                    <br/>
                    <br/>
                    <h3 class='projectsSubHeader'>Summary</h3>
                    <br/>
                        Freecodecamp is an amazingly free online course for people like me! They have a very large range of completely free courses that cover just about everything there is to know about coding! Although I havent completed all that they have to offer, I completed all they have to offer regarding Javascript, React, CSS and HTML.<br/>
                    <br/>
                    <br/>
                    I am able to provide you with Certification, as well as my notes and workings.
                    <br/>
                    <br/>
                    <br/>
                    <h3 class='projectsSubHeader'>Languages and Skills learnt</h3>
                    <br/>
                    <p>Languages: React, Javascript, CSS, HTML </p>
                    <br/>
                    <p>Skills: Objects, loops, </p>
                    <br/>
                    <br/>
                    <div id='freecodecampButtonContainer'>
                        <p class='projectsButton'>View Notes</p>
                        <br/>
                        <br/>
                        <br/>
                        <p class='projectsButton'>View Certifications</p>
                    </div>

                </text>
            </div>
            <div id='freecodecampPictures'>
                <div id='freecodecampPicture1'>PICTURE1</div>
                <div id='freecodecampPicture2'>PICTURE2</div>         
            </div>
        </div>
    )
}
