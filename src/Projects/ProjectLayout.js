import React, { useState, useEffect } from 'react'
import ProjectLayoutWide from './ProjectLayoutWide'
import ProjectLayoutTall from './ProjectLayoutTall'
import tekkenScreenshot from './images/tekkenScreenshot.jpg'
import freecodecampScreenshot from './images/freecodecampScreenshot.jpg'

export default function ProjectLayout(props) {
	let [screenshotImage, setScreenshotImage] = useState('')

	useEffect(() => {
		props.content === 'tekkennet' && setScreenshotImage(tekkenScreenshot)
		props.content === 'freecodecamp' &&
			setScreenshotImage(freecodecampScreenshot)
	})

	let buttonLink =
		props.content === 'tekkennet'
			? 'https://aiacuone-tekkenet.netlify.app/'
			: props.content == 'cheapshark'
			? 'https://aiacuone-cheapshark-api.netlify.app/'
			: props.content == 'freecodecamp'
			? null
			: null

	let projectScreenshotStyle = {
		backgroundImage: 'url(' + screenshotImage + ')',
	}

	return (
		<div class="projectLayout">
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
