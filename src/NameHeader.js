import React from 'react'
import './styles/nameHeader.css'
import nameLong from './images/nameTitleSVG.svg'
import nameShort from './images/nameTitleShort.svg'

export default function NameHeader(props) {
	return (
		<div className="name header container">
			{props.windowWidth > 800 && (
				<img className="name header long" alt="" src={nameLong} />
			)}
			{props.windowWidth <= 800 && (
				<img
					className="name header short"
					id="nameHeaderShort"
					alt=""
					src={nameShort}
				/>
			)}
		</div>
	)
}
