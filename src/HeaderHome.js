import React from 'react'
import headerHomeLogo from './images/headerHome.svg'

export default function headerHome(props) {
    return (
        <div class='headerHome'>
            <img onClick={event=>props.contentChange('home')} class='headerHomeLogo'src={headerHomeLogo}/>
        </div>
    )
}
