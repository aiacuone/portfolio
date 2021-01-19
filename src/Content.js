import React from 'react'
import './styles/content.css'
import AboutMe from './AboutMe'
import Intro from './Intro'

export default function Content(props) {
    return (
        <div id='content'>
            {props.content==='intro'&&<Intro windowWidth={props.windowWidth} windowHeight={props.windowHeight}/>}
            {props.content==='aboutMe'&&<AboutMe/>}
        </div>
    )
}
