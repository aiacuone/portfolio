import React from 'react'
import './styles/projects.css'
import projectsHeader from './images/projectsHeader.svg'
import tekkennetLogo from './images/tekkennetLogo.svg'
import freecodecampLogo from './images/freecodecampLogo.svg'


export default function Projects(props) {


    return (
        <div class='projects'>
            <div class='projectsInfo'>
                <img class='projectsHeader' src={projectsHeader}/>
                <div class='projectsText'>
                    <text>
                        These are the projects ive created. Im constantly creatinng something new. Check in frequently, this list will be continually growing!
                    </text>
                </div>
                <div class='projectsLogosContainer'>
                    <div class='projectsLogosBackground'/>
                    <h5 class='projectsLogosHeader'>SELECT A PROJECT:</h5>
                    <img class='tekkennetLogo projectsLogo'src={tekkennetLogo} onClick={event=>props.contentChange('tekkennet')}/>
                    <img class='freecodecampLogo projectsLogo'src={freecodecampLogo} onClick={event=>props.contentChange('freecodecamp')}/>
                    
                </div>
            </div>
        </div>
    )

}

function changeProjectContent(){

}
