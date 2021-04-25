import React from 'react'
import introTitle from './images/introTitle.svg'

export default function IntroWide({ contentChange, text }) {
	return (
		<div className="introContainer wide">
			<div className="introInfo wide">
				<img className="introHeader wide" src={introTitle} alt="" />
				<br />
				{text}
			</div>
			<div className="introButtonsContainer wide">
				<button
					className="introButton wide"
					onClick={(event) => contentChange('aboutMe')}>
					<b>ABOUT ME</b>
				</button>
				<button
					className="introButton wide"
					onClick={(event) => contentChange('interests')}>
					<b>WORK INTERESTS</b>
				</button>
				<button
					className="introButton wide"
					onClick={(event) => contentChange('projects')}>
					<b>PROJECTS</b>
				</button>
				<button
					className="introButton wide"
					onClick={(event) => contentChange('contactMe')}>
					<b>CONTACT ME</b>
				</button>
			</div>
			<div className="introPictureContainer wide">
				<div className="introPicture wide" />
			</div>
		</div>
	)
}
