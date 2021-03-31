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
		<div class="projectLayout tall">
			<div class="projectContainer">
				<div class="projectSubHeaderContainer">
					{content === 'tekkennet' && (
						<img class="projectLogo tall" src={tekkennetLogo} />
					)}
					{content === 'freecodecamp' && (
						<img class="projectLogo tall" src={freecodecampLogo} />
					)}
					{content === 'cheapshark' && (
						<img class="projectLogo tall" src={cheapsharkLogo} />
					)}
				</div>
				<div class="projectInfo tall">
					<div class="projectScreenshotContainer tall">
						<div
							class="projectScreenshot tall"
							style={projectScreenshotStyle}></div>
					</div>
					<div class="projectTextContainer tall">
						{content === 'tekkennet' && <TekkenProjectText />}
						{content === 'freecodecamp' && <FreecodecampProjectText />}
						{content === 'cheapshark' && <CheapsharkProjectText />}

						<div class="projectButtonContainer tall">
							<a href={buttonLink} target="_blank">
								<button class="viewProjectButton introButton">
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
