import React from 'react'
import aboutMeHeader from './images/aboutMeHeader.svg'

export default function AboutMeTall({ windowHeight, windowWidth, text }) {
	return (
		<div className="aboutMeContainer tall">
			<div className="aboutMeTextContainer tall">
				{windowHeight >= windowWidth && (
					<img class="aboutMeHeader tall" src={aboutMeHeader} alt="" />
				)}
				<div className="aboutMeText tall">{text}</div>
			</div>
			<div className="aboutMePictureContainer tall">
				<div className="aboutMePicture tall" />
			</div>
		</div>
	)
}
