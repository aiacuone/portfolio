import React from 'react'
import introTitle from './images/introTitle.svg'

export default function IntroTall(props) {
    return (
        <div class='introContainer tall'>
            <div class='introInfo tall'>
                <img class='introHeader tall'src={introTitle}></img><br/>
                <text>
                    I recently made the career change to a software developer, to utilise the extra time brought upon by Covid-19.<br/>
                    During that time, i've put the majority of my focus towards courses and projects using both React and Javascript.<br/> 
                    To Continue, please select from one of the following options! 
                </text>
            </div>
            <div class='introButtonsContainer tall'>
                <div class='introButtonSubContainer'>
                    <button class='introButton tall' onClick={event=>props.contentChange('aboutMe')}><b>ABOUT ME</b></button>
                    <button class='introButton tall' onClick={event=>props.contentChange('interests')}><b>WORK INTERESTS</b></button>
                </div>
                <div class='introButtonSubContainer'>
                    <button class='introButton tall' onClick={event=>props.contentChange('projects')}><b>PROJECTS</b></button>
                    <button class='introButton tall' onClick={event=>props.contentChange('contactMe')}><b>CONTACT ME</b></button>
                </div>
            </div>
            <div class='introPictureContainer tall'>
                <div class='introPicture tall'/>
            </div>
        </div>
    )
}
