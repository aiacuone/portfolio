import React from 'react'
import './styles/projects.css'
import projectsHeader from './images/projectsHeader.svg'
import tekkennetLogo from './images/tekkennetLogo.svg'
import freecodecampLogo from './images/freecodecampLogo.svg'
import cheapsharkLogo from './images/cheapsharkLogo.jpg'
import noteTakerLogo from './images/noteTakerLogo.svg'
import latest from './images/latest.svg'

export default function Projects(props) {
	return (
		<div className="projects">
			<div className="projectsInfo">
				<img className="projectsHeader" src={projectsHeader} alt="" />
				<div className="projectsText">
					<p>
						To showcase my skillset, the below are the projects ive developed.
						My innovative mindset is always looking to create something new, so
						check in frequently for future projects.
					</p>
				</div>
				<div className="projectsLogosContainer">
					<div className="projectsLogosBackground" />
					<h5 className="projectsLogosHeader">SELECT A PROJECT:</h5>
					<img
						className="tekkennetLogo projectsLogo"
						src={tekkennetLogo}
						onClick={(event) => props.contentChange('tekkennet')}
						alt=""
					/>
					<img
						className="freecodecampLogo projectsLogo"
						src={freecodecampLogo}
						onClick={(event) => props.contentChange('freecodecamp')}
						alt=""
					/>
					<img
						className="cheapshark projectsLogo"
						src={cheapsharkLogo}
						onClick={(event) => props.contentChange('cheapshark')}
						alt=""
					/>
					<div class='projectsLogo latestWrapper'>
						<img class='latest' src={ latest}/>
						<img
							className="noteTaker projectsLogo"
							src={noteTakerLogo}
							onClick={(event) => props.contentChange('noteTaker')}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
