import React from 'react'
import introTitle from './images/introTitle.svg'

export default function IntroWide(props) {
    return (
        <div class='introContainer wide'>
            <div class='introInfo wide'>
                <img class='introHeader wide' src={introTitle}></img><br />
                <h1>ANOTHER TEST</h1>
                <text>
                    I recently made the career change to a software developer, to utilise the extra time brought upon by Covid-19.<br/>
                    During that time, i've put the majority of my focus towards courses and projects using both React and Javascript.<br/> 
                    To Continue, please select from one of the following options! 
                </text>
            </div>
            <div class='introButtonsContainer wide'>
                <button class='introButton wide' onClick={event=>props.contentChange('aboutMe')}><b>ABOUT ME</b></button>
                <button class='introButton wide' onClick={event=>props.contentChange('interests')}><b>WORK INTERESTS</b></button>
                <button class='introButton wide' onClick={event=>props.contentChange('projects')}><b>PROJECTS</b></button>
                <button class='introButton wide' onClick={event=>props.contentChange('contactMe')}><b>CONTACT ME</b></button>
            </div>
            <div class='introPictureContainer wide'>
                <div class='introPicture wide'/>
            </div>
        </div>
    )
}
