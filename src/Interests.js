import React from 'react'
import './styles/interests.css'
import InterestsWide from './InterestsWide.js'
import InterestsTall from './InterestsTall.js'

export default function Interests(props) {
	let text = (
		<text>
			<br />
			I am at the early stages of my career, and would love an opportunity to to work within an
			an organisation that will expand on my skills that i've learnt so far.
			<br />
			More specifically, my main focus is developing applications using both Javascript and
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
