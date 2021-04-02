import React from 'react'
import interestsHeader from './images/interestsHeader.svg'
import javascriptLogo from './images/javascriptLogo.svg'
import reactLogo from './images/reactLogo.svg'

export default function InterestsWide(props) {
	return (
		<div class="interestsContainer wide">
			<div class="interestsInfoContainer wide">
				<div class="InterestsInfo">
					<text>
						<img class="interestsHeader" src={interestsHeader}></img>
						<br />
						I am at the early stages of my career, and would love to work within
						an experienced group, and absorb as much of their experience as I
						can.
						<br />
						More specifically, main focus is applications using both Javascript
						and React.
						<br />
						<img class="reactLogo interestsLogo wide" src={reactLogo} />
						<img
							class="javascriptLogo interestsLogo wide"
							src={javascriptLogo}
						/>
					</text>
				</div>
			</div>
			<div class="interestsPictureContainer wide">
				<div class="interestsPicture wide" />
			</div>
		</div>
	)
}
