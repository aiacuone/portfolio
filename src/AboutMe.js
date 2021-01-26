import React from 'react'
import './styles/aboutMe.css'
import AboutMeWide from './AboutMeWide'
import AboutMeTall from './AboutMeTall'

export default function AboutMe(props) {
    return (
        <div class='aboutMe'>
             {props.windowHeight>=props.windowWidth&&<AboutMeTall
                windowWidth={props.windowWidth} 
                windowHeight={props.windowHeight}/>}
            {props.windowHeight<props.windowWidth&&<AboutMeWide
                windowWidth={props.windowWidth} 
                windowHeight={props.windowHeight}/>}
        </div>
    )
}
