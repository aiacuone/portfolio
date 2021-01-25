import React from 'react'
import './styles/content.css'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Interests from './Interests'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe'
import ProjectLayout from './Projects/ProjectLayout'
// import TekkenNet from './TekkenNet'

export default function Content(props) {
    return (
        <div id='content'>

            {props.content==='intro'&&<Intro 
                windowWidth={props.windowWidth} 
                windowHeight={props.windowHeight}
                contentChange={value=>props.contentChange(value)}/>}

            {props.content==='aboutMe'&&<AboutMe
                windowWidth={props.windowWidth} 
                windowHeight={props.windowHeight}/>}
            
            {props.content==='interests'&&<Interests/>}

            {props.content==='projects'&&<Projects 
                windowWidth={props.windowWidth} 
                windowHeight={props.windowHeight}
                contentChange={value=>props.contentChange(value)}/>}

            {props.content==='contactMe'&&<ContactMe/>}

            {props.content==='tekkennet'&&<ProjectLayout 
                content={props.content}
                windowWidth={props.windowWidth} 
                windowHeight={props.windowHeight}/>}

        </div>
    )
}
