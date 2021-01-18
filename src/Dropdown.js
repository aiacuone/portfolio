import React from 'react'
import './styles/dropdown.css'
import SmallDropdown from './SmallDropdown'
import LargeDropdown from './LargeDropdown'

export default function Dropdown(props) {
    return (
        <div id='dropdownContainer'>
            {props.windowWidth<=650&&<LargeDropdown/>}
            {props.windowWidth>650&&<SmallDropdown/>}
            <div id='dropdown'>
            </div>
        </div>
    )
}
