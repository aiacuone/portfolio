import React from 'react'
import interestsHeader from './images/interestsHeader.svg'
import javascriptLogo from './images/javascriptLogo.svg'
import reactLogo from './images/reactLogo.svg'

export default function InterestsTall({ text }) {
	return (
		<div className="interestsContainer tall">
			<div className="interestsInfoContainer tall">
				<div className="InterestsInfo tall">
					<div>
						<img
							className="interestsHeader tall"
							src={interestsHeader}
							alt=""
						/>
						<br />

						{text}
						<img
							className="reactLogo interestsLogo tall"
							src={reactLogo}
							alt=""
						/>
						<img
							className="javascriptLogo interestsLogo tall"
							src={javascriptLogo}
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="interestsPictureContainer tall">
				<div className="interestsPicture tall" />
			</div>
		</div>
	)
}
