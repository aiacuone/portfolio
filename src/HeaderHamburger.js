import React from 'react'
import './styles/headerHamburger.css'
import hamburgerLogo from './images/hamburgerLogo.svg'

export default function HeaderHamburger() {
    return (
        <div id='headerHamburger'>
            <img id='hamburgerLogo'src={hamburgerLogo}/>
        </div>
    )
}
