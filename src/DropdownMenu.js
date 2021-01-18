import React, {} from 'react'
import './styles/dropdownMenu.css'
import linkedInLogo from './images/linkedInSVG.svg'
import emailSVG from './images/emailSVG.svg'

export default function DropdownMenu() {

    return (
        <div id='dropdownMenu'>
            <h3 class='burgerSelect'>HOME</h3>
            <h3 class='burgerSelect'>ABOUT ME</h3>
            <h3 class='burgerSelect'>WORK INTERESTS</h3>
            <h3 class='burgerSelect'>PROJECTS</h3>
            <div id='burgerLogos'>
                <img class='burgerLogo' id='burgerLinkedIn'src={linkedInLogo}/>
                <img class='burgerLogo' id='burgerEmail'src={emailSVG}/>
            </div>
            
        </div>
    )
}
