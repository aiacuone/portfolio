import React from 'react'
import './styles/name.css'
// import name from './images/name.svg'
// import occupation from './images/occupation.svg'
import nameTitleLong from './images/nameTitleSVG.svg'
import nameTitleShort from './images/nameTitleShort.svg'
import locationSVG from './images/location.svg'
import locationShortSVG from './images/locationSmall.svg'


export default function Name(props) {

    return (
        <div id='name' >
            <div id='details'>
                {props.windowWidth>=800&&<img id='nameFooterLong' alt='test' src={nameTitleLong}/>}
                {props.windowWidth<800&&<img id='nameFooterShort' alt='test' src={nameTitleShort}/>}
            </div>
            <div id='locationContainer'>
            {props.windowWidth>=800&&<img id='location' alt='test' src={locationSVG}/>}
            {props.windowWidth<800&&<img id='locationShort' alt='test' src={locationShortSVG}/>}
                
            </div>
        </div>
    )
}
