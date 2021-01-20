import React from 'react'

export default function IntroMainTall(props) {
    return (
        <div id='introMainTall'>
            <div class='introButtonsContainer tall'>
                <div class='introButtonsContainer'>
                    <button onClick={event=>props.contentChange('aboutMe')} class='introButtons tall left'>About Me</button>
                    <button onClick={event=>props.contentChange('interests')} class='introButtons tall right'>Work Interest</button>
                </div>
                <div class='introButtonsContainer'>
                    <button onClick={event=>props.contentChange('projects')} class='introButtons tall left'>Projects</button>
                    <button onClick={event=>props.contentChange('contactMe')} class='introButtons tall right'>Contact Me</button>
                </div>

            </div>
            <div class='introPicture tall'/>
        </div>
    )
}
