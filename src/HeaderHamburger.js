import React from 'react'
import './styles/headerHamburger.css'
import hamburgerLogo from './images/hamburgerLogo.svg'

export default function HeaderHamburger(props) {
    return (
        <div id='headerHamburger'>
            <img onClick={event=>props.burgerClick(true)} id='hamburgerLogo'src={hamburgerLogo}/>
        </div>
    )
}
