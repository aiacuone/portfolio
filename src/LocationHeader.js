import React from 'react'
import './styles/locationHeader.css'
import locationLong from './images/location.svg'

export default function LocationHeader(props) {
	return (
		<div id="locationHeader">
			<img className="location header long" alt="" src={locationLong} />
		</div>
	)
}
