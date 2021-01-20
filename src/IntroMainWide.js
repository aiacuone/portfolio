import React from 'react'


export default function IntroMainWide(props) {
    return (
        <div id='introMainWide'>
            
            <div class='introButtonsContainer wide'>
                <button onClick={event=>props.contentChange('aboutMe')} class='introButtons wide'>About Me</button>
                <button onClick={event=>props.contentChange('interests')} class='introButtons wide'>Work Interest</button>
                <button onClick={event=>props.contentChange('projects')} class='introButtons wide'>Projects</button>
                <button onClick={event=>props.contentChange('contactMe')} class='introButtons wide'>Contact Me</button>
            </div>
            <div class='introPicture wide' />
        </div>
    )
}
