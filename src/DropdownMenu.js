import React, {} from 'react'
import './styles/dropdownMenu.css'
import linkedInLogo from './images/linkedInSVG.svg'
import emailSVG from './images/emailSVG.svg'

export default function DropdownMenu(props) {

    function handleClick(value){
        props.burgerClick(false)
        props.contentChange(value)
    }

    return (
        <div id='dropdownMenu'>
            {/* <h3 class='burgerSelect' onClick={event=>props.burgerClick(false)}>HOME</h3>
            <h3 class='burgerSelect' onClick={event=>props.burgerClick(false)}>ABOUT ME</h3>
            <h3 class='burgerSelect' onClick={event=>props.burgerClick(false)}>WORK INTERESTS</h3>
            <h3 class='burgerSelect' onClick={event=>props.burgerClick(false)}>PROJECTS</h3> */}
            <h3 class='burgerSelect' onClick={()=>handleClick('intro')}>HOME</h3>
            <h3 class='burgerSelect' onClick={()=>handleClick('aboutMe')}>ABOUT ME</h3>
            <h3 class='burgerSelect' onClick={()=>handleClick('interests')}>WORK INTERESTS</h3>
            <h3 class='burgerSelect' onClick={()=>handleClick('projects')}>PROJECTS</h3>
            <h3 class='burgerSelect' onClick={()=>handleClick('contactMe')}>CONTACT ME</h3>
            <div id='burgerLogos'>
                <img class='burgerLogo' id='burgerLinkedIn'src={linkedInLogo}/>
                <img class='burgerLogo' id='burgerEmail'src={emailSVG}/>
            </div>
            
        </div>
    )
}
