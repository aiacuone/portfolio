import React from 'react'
import './styles/projects.css'
import projectsHeader from './images/projectsHeader.svg'
import tekkennetLogo from './images/tekkennetLogo.svg'

export default function Projects(props) {
    return (
        <div class='projects'>
            <img class='projectsHeader' src={projectsHeader}/>
            <img class='tekkennetLogo'src={tekkennetLogo} onClick={event=>props.contentChange('tekkennet')}/>
        </div>
    )
}
