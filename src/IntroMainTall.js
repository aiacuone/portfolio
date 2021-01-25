import React from 'react'

export default function IntroMainTall(props) {
    return (
        <div id='introMainTall'>
            <div class='introButtonsContainer tall'>
                <div class='introButtonsContainer'>
                    <button onClick={event=>props.contentChange('aboutMe')} class='introButtons tall left'><b>ABOUT ME</b></button>
                    <button onClick={event=>props.contentChange('interests')} class='introButtons tall right'><b>WORK INTERESTS</b></button>
                </div>
                <div class='introButtonsContainer'>
                    <button onClick={event=>props.contentChange('projects')} class='introButtons tall left'><b>PROJECTS</b></button>
                    <button onClick={event=>props.contentChange('contactMe')} class='introButtons tall right'><b>CONTACT ME</b></button>
                </div>

            </div>
            <div class='introPicture tall'/>
        </div>
    )
}
