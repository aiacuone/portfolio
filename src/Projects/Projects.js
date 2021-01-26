import React from 'react'
import './styles/projects.css'
// import ProjectsIntro from '../Projects/ProjectsIntro'
// import ProjectLayout from '../Projects/ProjectLayout'

import ProjectsWide from './ProjectsWide'
import ProjectsTall from './ProjectsTall'
import projectsHeader from './images/projectsHeader.svg'
import tekkennetLogo from './images/tekkennetLogo.svg'


export default function Projects(props) {

    // let [projectsContent, setProjectsContent]=useState('intro')

    return (
        <div class='projects'>

            {/* {props.windowHeight>=props.windowWidth&&<ProjectsTall
            contentChange={value=>props.contentChange(value)}/>}
            {props.windowHeight<props.windowWidth&&<ProjectsWide
            contentChange={value=>props.contentChange(value)}/>} */}
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
                    
                </div>
            </div>
        </div>
    )

}

function changeProjectContent(){

}
