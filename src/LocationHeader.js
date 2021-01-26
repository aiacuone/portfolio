import React from 'react'
import './styles/locationHeader.css'
import locationShort from './images/locationSmall.svg'
import locationLong from './images/location.svg'

export default function LocationHeader(props) {
    return (
        <div id='locationHeader'>
            <img class='location header long'alt='test' src={locationLong}/>
        </div>
    )
}
