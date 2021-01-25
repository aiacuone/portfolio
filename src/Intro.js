import React from 'react'
import './styles/intro.css'
import IntroTall from './IntroTall'
import IntroWide from './IntroWide'

export default function Intro(props) {
    return (
        <div id='intro'>
            {props.windowWidth>=props.windowHeight&&<IntroWide 
                windowWidth={props.windowWidth} 
                contentChange={value=>props.contentChange(value)}/>}
            {props.windowWidth<props.windowHeight&&<IntroTall
                contentChange={value=>props.contentChange(value)}/>}
        </div>
    )
}
