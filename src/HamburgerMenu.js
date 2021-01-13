import React from 'react'
import './styles/hamburgerMenu.css'
import emailLogo from './images/emailHamburgerSVG.svg'
import linkedInLogo from './images/linkedInSVG.svg'

export default function HamburgerMenu(props) {
    return (
        <div id='hamburgerMenu' onMouseLeave={()=>props.clickHamburger('normal')}>
            <div id='hamburgerContentContainer'>
                <div onClick={() => window.location.replace("/#interests")} class='hamburgerSelect'>
                    <p>WORK INTERESTS</p>
                </div>
                <div onClick={() => window.location.replace("/#aboutMe")} class='hamburgerSelect'>
                    <p>ABOUT ME</p>
                </div>
                <div onClick={() => window.location.replace("/#projects")} class='hamburgerSelect'>
                    <p>PROJECTS</p>
                </div>
            </div>
            <div id='hambugerContact'>
                <a href='mailto:aiacuone@gmail.com'><img class='hamburgerLogo'src={emailLogo}/></a>
                <a href='https://www.linkedin.com/in/adrian-iacuone/' target="_blank"><img class='hamburgerLogo'src={linkedInLogo}/></a>
            </div>
        </div>
    )
}
