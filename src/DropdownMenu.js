import React from 'react'
import './styles/dropdownMenu.css'
import linkedInLogo from './images/linkedInSVG.svg'
import emailSVG from './images/emailHamburgerSVG.svg'

export default function DropdownMenu(props) {
	function handleClick(value) {
		props.burgerClick(false)
		props.contentChange(value)
	}

	return (
		<div id="dropdownMenu">
			<h3 className="burgerSelect" onClick={() => handleClick('intro')}>
				HOME
			</h3>
			<h3 className="burgerSelect" onClick={() => handleClick('aboutMe')}>
				ABOUT ME
			</h3>
			<h3 className="burgerSelect" onClick={() => handleClick('interests')}>
				WORK INTERESTS
			</h3>
			<h3 className="burgerSelect" onClick={() => handleClick('projects')}>
				PROJECTS
			</h3>
			<h3 className="burgerSelect" onClick={() => handleClick('contactMe')}>
				CONTACT ME
			</h3>
			<div id="burgerLogos">
				<img
					alt="image"
					className="burgerLogo"
					id="burgerLinkedIn"
					src={linkedInLogo}
				/>
				<img
					className="burgerLogo"
					id="burgerEmail"
					src={emailSVG}
					alt="image"
				/>
			</div>
		</div>
	)
}
