import React, { useState, useEffect } from 'react'
import ProjectLayoutWide from './ProjectLayoutWide'
import ProjectLayoutTall from './ProjectLayoutTall'
import tekkenScreenshot from './images/tekkenScreenshot.jpg'
import freecodecampScreenshot from './images/freecodecampScreenshot.jpg'
import cheapsharkScreenshot from './images/cheapsharkScreenshot.jpg'
import noteTakerScreenshot from './images/noteTakerScreenshot.jpg'
import TekkenProjectText from './TekkenProjectText'
import FreecodecampProjectText from './FreecodecampProjectText'
import CheapsharkProjectText from './CheapsharkProjectText'
import tekkennetLogo from './images/tekkennetLogo.svg'
import freecodecampLogo from './images/freecodecampLogo.svg'
import cheapsharkLogo from './images/cheapsharkLogo.svg'
import noteTakerLogo from './images/noteTakerLogo.svg'
import NoteTakerProjectText from './NoteTakerProjectText'

export default function ProjectLayout(props) {

	let info = {
		noteTaker: {
			logo: noteTakerLogo,
			text: <NoteTakerProjectText />,
			screenshot: noteTakerScreenshot,
			github: 'https://github.com/aiacuone/note_taker.git',
			button: 'https://aiacuone-note-taker.netlify.app/',
		},
		freecodecamp: {
			logo: freecodecampLogo,
			text: <FreecodecampProjectText />,
			screenshot: freecodecampScreenshot,
			github: '',
			button: 'https://freecodecamp-notes-portfolio.netlify.app/',
		},
		tekkennet: {
			logo: tekkennetLogo,
			text: <TekkenProjectText />,
			screenshot: tekkenScreenshot,
			github: 'https://github.com/aiacuone/tekkenet-React.git',
			button: 'https://aiacuone-tekkenet.netlify.app/',
		},
		cheapshark: {
			logo: cheapsharkLogo,
			text: <CheapsharkProjectText />,
			screenshot: cheapsharkScreenshot,
			github: 'https://github.com/aiacuone/Cheapshark.git',
			button: 'https://aiacuone-cheapshark-api.netlify.app/',
		},
	}


	return (
		<div className="projectLayout">
			{props.windowWidth > props.windowHeight && (
				<ProjectLayoutWide
					content={props.content}
					info={ info}
				/>
			)}

			{props.windowWidth <= props.windowHeight && (
				<ProjectLayoutTall
					content={props.content}
					info={ info}
				/>
			)}
		</div>
	)
}
