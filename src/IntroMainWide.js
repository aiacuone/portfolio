import React from 'react'


export default function IntroMainWide(props) {
    return (
        <div id='introMainWide'>
            
            <div class='introButtonsContainer wide'>
                <button onClick={event=>props.contentChange('aboutMe')} class='introButtons wide'><b>ABOUT ME</b></button>
                <button onClick={event=>props.contentChange('interests')} class='introButtons wide'><b>WORK INTERESTS</b></button>
                <button onClick={event=>props.contentChange('projects')} class='introButtons wide'><b>PROJECTS</b></button>
                <button onClick={event=>props.contentChange('contactMe')} class='introButtons wide'><b>CONTACT ME</b></button>
            </div>
            <div class='introPicture wide' />
        </div>
    )
}
