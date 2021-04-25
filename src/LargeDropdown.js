import React from 'react'
import './styles/largeDropdown.css'
import DropdownMenu from './DropdownMenu'

export default function LargeDropdown(props) {
	return (
		<div id="largeDropdown">
			<DropdownMenu
				burgerClick={props.burgerClick}
				contentChange={(value) => props.contentChange(value)}
			/>
		</div>
	)
}
