import React from 'react'
import './styles/intro.css'
import IntroTall from './IntroTall'
import IntroWide from './IntroWide'

export default function Intro(props) {
	let text = (
		<p>
			I made a career change to Software Development, to utilise the extra time
			brought upon by Covid-19.
			<br />
			During that time, i've put the majority of my focus towards courses and
			projects using both React and Javascript.
			<br />
			To Continue, please select from one of the following options!
		</p>
	)

	return (
		<div id="intro">
			{props.windowWidth >= props.windowHeight && (
				<IntroWide
					windowWidth={props.windowWidth}
					contentChange={(value) => props.contentChange(value)}
					text={text}
				/>
			)}
			{props.windowWidth < props.windowHeight && (
				<IntroTall
					contentChange={(value) => props.contentChange(value)}
					text={text}
				/>
			)}
		</div>
	)
}
