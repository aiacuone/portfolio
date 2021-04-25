import React from 'react'

export default function ProjectLayoutTall({ content, info }) {
	let logo = info[content].logo
	let text = info[content].text
	let screenshot = info[content].screenshot
	let github = info[content].github
	let button = info[content].button

	return (
		<div className="projectLayout tall">
			<div className="projectContainer">
				<div className="projectSubHeaderContainer">
					<img className="projectLogo tall" src={logo} alt="" />
				</div>
				<div className="projectInfo tall">
					<div className="projectScreenshotContainer tall">
						<div
							className="projectScreenshot tall"
							style={{ backgroundImage: 'url(' + screenshot + ')' }}></div>
					</div>
					<div className="projectTextContainer tall">
						{text}
						<div className="projectButtonContainer tall">
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
