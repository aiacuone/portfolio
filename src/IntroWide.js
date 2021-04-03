import React from 'react'
import introTitle from './images/introTitle.svg'

export default function IntroWide({ contentChange, text}) {
    return (
        <div class='introContainer wide'>
            <div class='introInfo wide'>
                <img class='introHeader wide' src={introTitle}></img><br />
                { text}
            </div>
            <div class='introButtonsContainer wide'>
                <button class='introButton wide' onClick={event=>contentChange('aboutMe')}><b>ABOUT ME</b></button>
                <button class='introButton wide' onClick={event=>contentChange('interests')}><b>WORK INTERESTS</b></button>
                <button class='introButton wide' onClick={event=>contentChange('projects')}><b>PROJECTS</b></button>
                <button class='introButton wide' onClick={event=>contentChange('contactMe')}><b>CONTACT ME</b></button>
            </div>
            <div class='introPictureContainer wide'>
                <div class='introPicture wide'/>
            </div>
        </div>
    )
}
