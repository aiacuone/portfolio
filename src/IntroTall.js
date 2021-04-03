import React from 'react'
import introTitle from './images/introTitle.svg'

export default function IntroTall({ contentChange, text }) {
	return (
		<div class="introContainer tall">
			<div class="introInfo tall">
				<img class="introHeader tall" src={introTitle}></img>
				<br />
				{text}
			</div>
			<div class="introButtonsContainer tall">
				<div class="introButtonSubContainer">
					<button
						class="introButton tall"
						onClick={(event) => contentChange('aboutMe')}>
						<b>ABOUT ME</b>
					</button>
					<button
						class="introButton tall"
						onClick={(event) => contentChange('interests')}>
						<b>WORK INTERESTS</b>
					</button>
				</div>
				<div class="introButtonSubContainer">
					<button
						class="introButton tall"
						onClick={(event) => contentChange('projects')}>
						<b>PROJECTS</b>
					</button>
					<button
						class="introButton tall"
						onClick={(event) => contentChange('contactMe')}>
						<b>CONTACT ME</b>
					</button>
				</div>
			</div>
			<div class="introPictureContainer tall">
				<div class="introPicture tall" />
			</div>
		</div>
	)
}
