import React from 'react'
import interestsHeader from './images/interestsHeader.svg'
import javascriptLogo from './images/javascriptLogo.svg'
import reactLogo from './images/reactLogo.svg'

export default function InterestsTall({ text }) {
	return (
		<div class="interestsContainer tall">
			<div class="interestsInfoContainer tall">
				<div class="InterestsInfo tall">
					<div>
						<img class="interestsHeader tall" src={interestsHeader}></img>
						<br />

						{text}
						<img class="reactLogo interestsLogo tall" src={reactLogo} />
						<img
							class="javascriptLogo interestsLogo tall"
							src={javascriptLogo}
						/>
					</div>
				</div>
			</div>
			<div class="interestsPictureContainer tall">
				<div class="interestsPicture tall" />
			</div>
		</div>
	)
}
