import React from 'react'
import './styles/interests.css'
import InterestsWide from './InterestsWide.js'
import InterestsTall from './InterestsTall.js'

export default function Interests(props) {
	let text = (
		<text>
			<br />
			I am at the early stages of my career, and would love to work within an
			experienced group, and absorb as much of their experience as I can.
			<br />
			More specifically, main focus is applications using both Javascript and
			React.
			<br />
		</text>
	)
	return (
		<div class="interests">
			{props.windowHeight > props.windowWidth && <InterestsTall text={text} />}
			{props.windowHeight <= props.windowWidth && <InterestsWide text={text} />}
		</div>
	)
}
