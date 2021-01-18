import React from 'react'
import './styles/headerLogo.css'
import aiLogo from './images/aiLogo.svg'

export default function HeaderLogo() {
    return (
        <div id='headerLogo'>
            <img id='aiLogo'src={aiLogo}/>
        </div>
    )
}
