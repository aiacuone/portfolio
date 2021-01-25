import React from 'react'
import introTitle from './images/introTitle.svg'
import introTitleLong from './images/introTitleLong.svg'
import './styles/intro.css'
// import introBackground from './images/introBackground.jpg'
import IntroMainWide from './IntroMainWide'
import IntroMainTall from './IntroMainTall'


export default function Intro(props) {
    return (
        <div id='intro'>
            <div id='introHeader'>
                {props.windowHeight>600&&<img id='introTitle' src={introTitle}/>}
                {props.windowHeight<=600&&<img id='introTitle' src={introTitleLong}/>}
                <p>
                    I recently made the career change to a software developer, to utilise the extra time brought upon by Covid-19.<br/>
                    During that time, i've put the majority of my focus towards courses and projects using both React and Javascript.<br/> 
                    To Continue, please select from one of the following options! </p>
            </div>
            {props.windowWidth>=props.windowHeight&&<IntroMainWide 
            windowWidth={props.windowWidth} 
            contentChange={value=>props.contentChange(value)}/>}
            {props.windowWidth<props.windowHeight&&<IntroMainTall
            contentChange={value=>props.contentChange(value)}/>}
        </div>
    )
}
