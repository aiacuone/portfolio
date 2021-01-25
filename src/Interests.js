import React from 'react'
import './styles/interests.css'
import InterestsWide from './InterestsWide.js'
import InterestsTall from './InterestsTall.js'

export default function Interests(props) {
    return (
        <div class='interests'>
            {props.windowHeight>props.windowWidth&&<InterestsTall/>}
            {props.windowHeight<=props.windowWidth&&<InterestsWide/>}
        </div>
    )
}
