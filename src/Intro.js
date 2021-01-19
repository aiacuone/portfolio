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
                    I am a self taught software developer living in London.<br/>
                    Please select from one of the following options to continue! </p>
            </div>
            {props.windowWidth>=props.windowHeight&&<IntroMainWide windowWidth={props.windowWidth}/>}
            {props.windowWidth<props.windowHeight&&<IntroMainTall/>}
        </div>
    )
}
