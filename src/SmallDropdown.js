import React from 'react'
import './styles/smallDropdown.css'
import DropdownMenu from './DropdownMenu'

export default function SmallDropdown(props) {
    return (
        <div id='smallDropdown'>
            <DropdownMenu burgerClick={props.burgerClick}/>
        </div>
    )
}
