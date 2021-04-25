import React from 'react'

export default function ProjectLayoutWide({ content, info }) {
	let logo = info[content].logo
	let text = info[content].text
	let screenshot = info[content].screenshot
	let github = info[content].github
	let button = info[content].button
	
	return (
		<div className="projectLayout wide">
			<div className="projectContainer">
				<div className="projectSubHeaderContainer">
					<img className="projectLogo wide" src={logo} alt="" />
				</div>
				<div className="projectInfo wide">
					<div className="projectScreenshotContainer wide">
						<div
							className="projectScreenshot wide"
							style={{ backgroundImage: 'url(' + screenshot + ')' }}></div>
					</div>
					<div className="projectTextContainer wide">
						{text}
						<div className="projectButtonContainer wide">
							<a href={button} target="_blank">
								<button className="viewProjectButton introButton">
									View Project
								</button>
							</a>
							{github && (
								<a href={github} target="_blank">
									<button className="viewProjectButton introButton">
										Github
									</button>
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
