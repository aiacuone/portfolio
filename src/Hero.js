import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import './styles/hero.css'
import name from './images/nameTitleSVG.svg'

export default function Hero(props) {
    return (
        <div id='hero'>
            <div id='hamburgerMenuContainer'>
                {props.hamburgerAngle==='rotated'&&<HamburgerMenu clickHamburger={props.clickHamburger}/>}
            </div>
            
            <div id='details'>
                <div id='name'><img src={name}/></div>
                <div id='location'><p>London UK</p></div>
            </div>
            <div id='heroOverlay'/>
        </div>
    )
}
