import React from 'react'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Interests from './Interests'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe'
import ProjectLayout from './Projects/ProjectLayout'

export default function Content(props) {
	return (
		<div id="content">
			{props.content === 'home' && (
				<Intro
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
					contentChange={(value) => props.contentChange(value)}
				/>
			)}

			{props.content === 'aboutMe' && (
				<AboutMe
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
				/>
			)}

			{props.content === 'interests' && (
				<Interests
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
				/>
			)}

			{props.content === 'projects' && (
				<Projects
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
					contentChange={(value) => props.contentChange(value)}
				/>
			)}

			{props.content === 'contactMe' && (
				<ContactMe
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
				/>
			)}

			{props.content === 'tekkennet' && (
				<ProjectLayout
					content={props.content}
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
				/>
			)}

			{props.content === 'freecodecamp' && (
				<ProjectLayout
					content={props.content}
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
				/>
			)}

			{props.content === 'cheapshark' && (
				<ProjectLayout
					content={props.content}
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
				/>
			)}
			{props.content === 'noteTaker' && (
				<ProjectLayout
					content={props.content}
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
				/>
			)}
		</div>
	)
}
