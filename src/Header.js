import React, {useState} from 'react'
import './styles/header.css'
import hamburger from './images/hamburgerSVG.svg'
import aiLogo from './images/logo.svg'
import HamburgerMenu from './HamburgerMenu'

export default function Header(props) {

    function handleHamburgerClick(){
        // console.log(props.hamburgerAngle)
        props.hamburgerAngle==='normal'?props.clickHamburger('rotated'):props.clickHamburger('normal')
    }



    return (
        <div id='header'>
            <div id='aiLogoContainer' onMouseEnter={()=>props.clickHamburger('normal')}>
                <img id='aiLogo' src={aiLogo}/>
            </div>
            <div id='hamburgerContainer'>
                <img id='hamburgerLogo' src={hamburger} onClick={handleHamburgerClick}/>
            </div>
            {/* {props.hamburgerAngle==='rotated'&&<HamburgerMenu clickHamburger={props.clickHamburger}/>} */}
        </div>
    )
}
