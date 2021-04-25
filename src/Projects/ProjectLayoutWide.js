import React from 'react'
import TekkenProjectText from './TekkenProjectText'
import FreecodecampProjectText from './FreecodecampProjectText'
import CheapsharkProjectText from './CheapsharkProjectText'
import tekkennetLogo from './images/tekkennetLogo.svg'
import freecodecampLogo from './images/freecodecampLogo.svg'
import cheapsharkLogo from './images/cheapsharkLogo.svg'

export default function ProjectLayoutWide({
	content,
	projectScreenshotStyle,
	buttonLink,
}) {
	return (
		<div className="projectLayout wide">
			<div className="projectContainer">
				<div className="projectSubHeaderContainer">
					{content === 'tekkennet' && (
						<img className="projectLogo wide" src={tekkennetLogo} alt=''/>
					)}
					{content === 'freecodecamp' && (
						<img className="projectLogo wide" src={freecodecampLogo} alt=''/>
					)}
					{content === 'cheapshark' && (
						<img className="projectLogo wide" src={cheapsharkLogo} alt=''/>
					)}
				</div>
				<div className="projectInfo wide">
					<div className="projectScreenshotContainer wide">
						<div
							className="projectScreenshot wide"
							style={projectScreenshotStyle}></div>
					</div>
					<div className="projectTextContainer wide">
						{content === 'tekkennet' && <TekkenProjectText />}
						{content === 'freecodecamp' && <FreecodecampProjectText />}
						{content === 'cheapshark' && <CheapsharkProjectText />}
						<div className="projectButtonContainer wide">
							<a href={buttonLink} target="_blank">
								<button className="viewProjectButton introButton">
									View Project
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
