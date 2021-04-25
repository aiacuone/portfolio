import React from 'react'
import headerHomeLogo from './images/headerHome.svg'

export default function headerHome(props) {
	return (
		<div className="headerHome">
			<img
				onClick={(event) => props.contentChange('home')}
				className="headerHomeLogo"
				src={headerHomeLogo}
				alt=""
			/>
		</div>
	)
}
