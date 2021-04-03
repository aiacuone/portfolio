import React from 'react'
// import aboutMeHeader from './images/aboutMeHeader.svg'
import aboutMeHeader from './images/aboutMeHeader.svg'

export default function AboutMeWide({ windowHeight, windowWidth, text }) {
	return (
		<div class="aboutMeContainer wide">
			<div class="aboutMePictureContainer">
				<div class="aboutMePicture" />
			</div>
			<div class="aboutMeTextContainer">
				{windowHeight < windowWidth && (
					<img class="aboutMeHeader wide" src={aboutMeHeader}></img>
				)}
				{text}
			</div>
		</div>
	)
}
