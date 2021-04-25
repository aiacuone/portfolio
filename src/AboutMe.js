import React from 'react'
import './styles/aboutMe.css'
import AboutMeWide from './AboutMeWide'
import AboutMeTall from './AboutMeTall'

export default function AboutMe(props) {
	let text = (
		<p>
			<b>Name:</b> Adrian Iacuone
			<br />
			<b>DOB:</b> <s />
			May 1987
			<br />
			<b>Location:</b> South-West London
			<br />
			<b>Nationality:</b> Australian
			<br />
			<b>Interests:</b> Computers & Technology, Sports, Gym, Music and Coffee
			<br />
			<b>Email:</b> aiacuone@gmail.com
		</p>
	)
	return (
		<div className="aboutMe">
			{props.windowHeight >= props.windowWidth && (
				<AboutMeTall
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
					text={text}
				/>
			)}
			{props.windowHeight < props.windowWidth && (
				<AboutMeWide
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
					text={text}
				/>
			)}
		</div>
	)
}
