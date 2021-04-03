import React from 'react'
import interestsHeader from './images/interestsHeader.svg'
import javascriptLogo from './images/javascriptLogo.svg'
import reactLogo from './images/reactLogo.svg'

export default function InterestsWide({ text }) {
	return (
		<div class="interestsContainer wide">
			<div class="interestsInfoContainer wide">
				<div class="InterestsInfo">
					<div>
						<img class="interestsHeader" src={interestsHeader}></img>
						{text}
						<img class="reactLogo interestsLogo wide" src={reactLogo} />
						<img
							class="javascriptLogo interestsLogo wide"
							src={javascriptLogo}
						/>
					</div>
				</div>
			</div>
			<div class="interestsPictureContainer wide">
				<div class="interestsPicture wide" />
			</div>
		</div>
	)
}
