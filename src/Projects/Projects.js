import React from 'react'
import './styles/projects.css'
import projectsHeader from './images/projectsHeader.svg'
import tekkennetLogo from './images/tekkennetLogo.svg'
import freecodecampLogo from './images/freecodecampLogo.svg'
import cheapsharkLogo from './images/cheapsharkLogo.svg'


export default function Projects(props) {


    return (
        <div class='projects'>
            <div class='projectsInfo'>
                <img class='projectsHeader' src={projectsHeader}/>
                <div class='projectsText'>
                    <text>
                        To showcase my skillset, the below are the projects ive developed. My innovative mindset is always looking to create something new, so check in frequently for future projects.
                    </text>
                </div>
                <div class='projectsLogosContainer'>
                    <div class='projectsLogosBackground'/>
                    <h5 class='projectsLogosHeader'>SELECT A PROJECT:</h5>
                    <img class='tekkennetLogo projectsLogo'src={tekkennetLogo} onClick={event=>props.contentChange('tekkennet')}/>
                    <img class='freecodecampLogo projectsLogo' src={freecodecampLogo} onClick={event => props.contentChange('freecodecamp')} />
                    <img class='cheapshark projectsLogo' src={cheapsharkLogo} onClick={event => props.contentChange('cheapshark')} />
                    
                </div>
            </div>
        </div>
    )

}


