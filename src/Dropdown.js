import React from 'react'
import './styles/dropdown.css'
import SmallDropdown from './SmallDropdown'
import LargeDropdown from './LargeDropdown'

export default function Dropdown(props) {
	return (
		<div
			id="dropdownContainer"
			onMouseLeave={(event) => props.burgerClick(false)}>
			{props.windowWidth <= 650 && (
				<LargeDropdown
					burgerClick={props.burgerClick}
					contentChange={(value) => props.contentChange(value)}
				/>
			)}

			{props.windowWidth > 650 && (
				<SmallDropdown
					burgerClick={props.burgerClick}
					contentChange={(value) => props.contentChange(value)}
				/>
			)}

			<div id="dropdown"></div>
		</div>
	)
}
