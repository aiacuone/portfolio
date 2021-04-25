import React from 'react'
import introTitle from './images/introTitle.svg'

export default function IntroTall({ contentChange, text }) {
	return (
		<div className="introContainer tall">
			<div className="introInfo tall">
				<img className="introHeader tall" src={introTitle} alt="" />
				<br />
				{text}
			</div>
			<div className="introButtonsContainer tall">
				<div className="introButtonSubContainer">
					<button
						className="introButton tall"
						onClick={(event) => contentChange('aboutMe')}>
						<b>ABOUT ME</b>
					</button>
					<button
						className="introButton tall"
						onClick={(event) => contentChange('interests')}>
						<b>WORK INTERESTS</b>
					</button>
				</div>
				<div className="introButtonSubContainer">
					<button
						className="introButton tall"
						onClick={(event) => contentChange('projects')}>
						<b>PROJECTS</b>
					</button>
					<button
						className="introButton tall"
						onClick={(event) => contentChange('contactMe')}>
						<b>CONTACT ME</b>
					</button>
				</div>
			</div>
			<div className="introPictureContainer tall">
				<div className="introPicture tall" />
			</div>
		</div>
	)
}
