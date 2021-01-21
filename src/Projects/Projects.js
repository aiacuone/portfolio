import React from 'react'
import './styles/projects.css'
// import ProjectsIntro from '../Projects/ProjectsIntro'
// import ProjectLayout from '../Projects/ProjectLayout'
import projectsHeader from './images/projectsHeader.svg'
import tekkennetLogo from './images/tekkennetLogo.svg'


export default function Projects(props) {

    // let [projectsContent, setProjectsContent]=useState('intro')

    return (
        <div class='projects'>
            <img class='projectsHeader' src={projectsHeader}/>
            <img class='tekkennetLogo projectsLogo'src={tekkennetLogo} onClick={event=>props.contentChange('tekkennet')}/>
        </div>
    )

}

function changeProjectContent(){

}
