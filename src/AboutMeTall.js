import React from 'react'
import aboutMeHeader from './images/aboutMeHeader.svg'

export default function AboutMeTall({ windowHeight,windowWidth,text}) {
    return (
        <div class='aboutMeContainer tall'>
            <div class='aboutMeTextContainer tall'>
                {windowHeight>=windowWidth&&<img class='aboutMeHeader tall' src={aboutMeHeader}></img>}
                <div class='aboutMeText tall'>
                    { text}
                </div>
            </div>
            <div class='aboutMePictureContainer tall'>
                <div class='aboutMePicture tall'/>
            </div>
        </div>
    )
}
