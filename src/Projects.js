import React, {useState} from 'react'
import './styles/projects.css'
import ProjectsIntro from './ProjectsIntro'
import ProjectsTekkenNet from './ProjectsTekkenNet'
import ProjectsFreecodecamp from './ProjectsFreecodecamp'

export default function Projects() {

    let [projectDisplay, setProjectsDisplay]= useState('intro')
    let [tekkenStyle, setTekkenStyle]= useState({})
    let [freecodecampStyle, setFreecodecampStyle]= useState({})

    function handleClick(value){
        value==='tekkenNet'?setTekkenStyle({color:'rgb(177, 177, 177)'}):setTekkenStyle({})
        value==='tekkenNet'&&setProjectsDisplay('tekkenNet')

        value==='freecodecamp'?setFreecodecampStyle({color:'rgb(177, 177, 177)'}):setFreecodecampStyle({})
        value==='freecodecamp'&&setProjectsDisplay('freecodecamp')
    }



    return (
        <div id='projects'>
            <div id='projectsHeader'>
                <div id='projectsTextHeader'>
                    <text>
                        <p>Personal</p>
                        <p id='projectsHeaderText'class='bigText'>Projects & Experience</p>
                    </text>
                </div>
            </div>
            <div id='projectsContentContainer'>
                <div id='projectsLogosContainer'>
                    <div id='projectsLogos'>
                        <h2 id='tekkenNetSelect'class='projectsSelect' onClick={()=>handleClick('tekkenNet')}  style={tekkenStyle}>Tekken-Net</h2>
                        <h2 id='freecodecampSelect' class='projectsSelect' onClick={()=>handleClick('freecodecamp')} style={freecodecampStyle}>Freecodecamp</h2>
                    </div>
                </div>
                <div id='projectsInfoContainer'>
                    <div id='projectsInfo'>
                        {projectDisplay==='intro'&&<ProjectsIntro/>}
                        {projectDisplay==='tekkenNet'&&<ProjectsTekkenNet/>}
                        {projectDisplay==='freecodecamp'&&<ProjectsFreecodecamp/>}
                    </div>
                </div>
            </div>




        </div>
    )
}
