import React from 'react'
import TekkenProjectText from './TekkenProjectText'
import FreecodecampProjectText from './FreecodecampProjectText'
import CheapsharkProjectText from './CheapsharkProjectText'
import tekkennetLogo from './images/tekkennetLogo.svg'
import freecodecampLogo from './images/freecodecampLogo.svg'
import cheapsharkLogo from './images/cheapsharkLogo.svg'

export default function ProjectLayoutTall({
	content,
	projectScreenshotStyle,
	buttonLink,
}) {
	return (
		<div className="projectLayout tall">
			<div className="projectContainer">
				<div className="projectSubHeaderContainer">
					{content === 'tekkennet' && (
						<img className="projectLogo tall" src={tekkennetLogo} alt="" />
					)}
					{content === 'freecodecamp' && (
						<img className="projectLogo tall" src={freecodecampLogo} alt="" />
					)}
					{content === 'cheapshark' && (
						<img className="projectLogo tall" src={cheapsharkLogo} alt="" />
					)}
				</div>
				<div className="projectInfo tall">
					<div className="projectScreenshotContainer tall">
						<div
							className="projectScreenshot tall"
							style={projectScreenshotStyle}></div>
					</div>
					<div className="projectTextContainer tall">
						{content === 'tekkennet' && <TekkenProjectText />}
						{content === 'freecodecamp' && <FreecodecampProjectText />}
						{content === 'cheapshark' && <CheapsharkProjectText />}

						<div className="projectButtonContainer tall">
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
