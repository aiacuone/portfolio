import React from 'react'
import './styles/name.css'
import nameTitleLong from './images/nameTitleSVG.svg'
import nameTitleShort from './images/nameTitleShort.svg'
import locationSVG from './images/location.svg'
import locationShortSVG from './images/locationSmall.svg'

export default function Name(props) {
	return (
		<div id="name">
			<div id="details">
				{props.windowWidth >= 800 && (
					<img id="nameFooterLong" alt="" src={nameTitleLong} />
				)}
				{props.windowWidth < 800 && (
					<img id="nameFooterShort" alt="" src={nameTitleShort} />
				)}
			</div>
			<div id="locationContainer">
				{props.windowWidth >= 800 && (
					<img id="location" alt="" src={locationSVG} />
				)}
				{props.windowWidth < 800 && (
					<img id="locationShort" alt="" src={locationShortSVG} />
				)}
			</div>
		</div>
	)
}
