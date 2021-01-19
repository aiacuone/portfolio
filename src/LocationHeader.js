import React from 'react'
import './styles/locationHeader.css'
import locationShort from './images/locationSmall.svg'
import locationLong from './images/location.svg'

export default function LocationHeader(props) {
    return (
        <div id='locationHeader'>
            {/* <img src={locationShort}/> */}
            {/* {props.windowWidth>800&&<img class='location header long'alt='test' src={locationLong}/>}
            {props.windowWidth<=800&&<img  class='location header short'alt='test' src={locationShort}/>} */}
            <img class='location header long'alt='test' src={locationLong}/>
        </div>
    )
}
