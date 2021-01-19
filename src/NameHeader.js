import React from 'react'
import './styles/nameHeader.css'
import nameLong from './images/nameTitleSVG.svg'
import nameShort from './images/nameTitleShort.svg'

export default function NameHeader(props) {
    return (
        <div class='name header container'>
            {props.windowWidth>800&&<img class='name header long' alt='test' src={nameLong}/>}
            {props.windowWidth<=800&&<img class='name header short' id='nameHeaderShort' alt='test' src={nameShort}/>}
        </div>
    )
}
