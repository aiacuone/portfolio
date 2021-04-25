import React from 'react'
// import aboutMeHeader from './images/aboutMeHeader.svg'
import aboutMeHeader from './images/aboutMeHeader.svg'

export default function AboutMeWide({ windowHeight, windowWidth, text }) {
	return (
		<div className="aboutMeContainer wide">
			<div className="aboutMePictureContainer">
				<div className="aboutMePicture" />
			</div>
			<div className="aboutMeTextContainer">
				{windowHeight < windowWidth && (
					<img className="aboutMeHeader wide" src={aboutMeHeader} alt="" />
				)}
				{text}
			</div>
		</div>
	)
}
