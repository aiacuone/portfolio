import React, { useState, useEffect } from 'react'
import ProjectLayoutWide from './ProjectLayoutWide'
import ProjectLayoutTall from './ProjectLayoutTall'
import tekkenScreenshot from './images/tekkenScreenshot.jpg'
import freecodecampScreenshot from './images/freecodecampScreenshot.jpg'
import cheapsharkScreenshot from './images/cheapsharkScreenshot.jpg'

export default function ProjectLayout(props) {
	let [screenshotImage, setScreenshotImage] = useState('')
	//i dont think i need to have this in either state nor do i need to have this use effect? im sure i can just use this in a variable
	useEffect(() => {
		props.content === 'tekkennet' && setScreenshotImage(tekkenScreenshot)
		props.content === 'freecodecamp' &&
			setScreenshotImage(freecodecampScreenshot)
		props.content === 'cheapshark' && setScreenshotImage(cheapsharkScreenshot)
	})

	let buttonLink =
		props.content === 'tekkennet'
			? 'https://aiacuone-tekkenet.netlify.app/'
			: props.content == 'cheapshark'
			? 'https://aiacuone-cheapshark-api.netlify.app/'
			: props.content == 'freecodecamp'
			? 'https://freecodecamp-notes-portfolio.netlify.app/'
			: null

	let projectScreenshotStyle = {
		backgroundImage: 'url(' + screenshotImage + ')',
	}

	return (
		<div className="projectLayout">
			{props.windowWidth > props.windowHeight && (
				<ProjectLayoutWide
					content={props.content}
					projectScreenshotStyle={projectScreenshotStyle}
					buttonLink={buttonLink}
				/>
			)}

			{props.windowWidth <= props.windowHeight && (
				<ProjectLayoutTall
					content={props.content}
					projectScreenshotStyle={projectScreenshotStyle}
					buttonLink={buttonLink}
				/>
			)}
		</div>
	)
}
