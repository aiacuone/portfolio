import React from 'react'
import './styles/headerHamburger.css'
import hamburgerLogo from './images/hamburgerLogo.svg'


export default function HeaderHamburger(props) {

    function handleClick(value){
        value?props.burgerClick(false):props.burgerClick(true)
    }
    
    return (
        <div id='headerHamburger'>
            <div onClick={()=>handleClick(props.dropdown)} id='hamburgerLogoContainer'>
                <img id='hamburgerLogo'src={hamburgerLogo}/>
            </div>
            
        </div>
    )
}
