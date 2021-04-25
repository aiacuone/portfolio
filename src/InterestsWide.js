import React from 'react'
import interestsHeader from './images/interestsHeader.svg'
import javascriptLogo from './images/javascriptLogo.svg'
import reactLogo from './images/reactLogo.svg'

export default function InterestsWide({ text }) {
	return (
		<div className="interestsContainer wide">
			<div className="interestsInfoContainer wide">
				<div className="InterestsInfo">
					<div>
						<img className="interestsHeader" src={interestsHeader} alt="" />
						{text}
						<img
							className="reactLogo interestsLogo wide"
							src={reactLogo}
							alt=""
						/>
						<img
							className="javascriptLogo interestsLogo wide"
							src={javascriptLogo}
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="interestsPictureContainer wide">
				<div className="interestsPicture wide" />
			</div>
		</div>
	)
}
