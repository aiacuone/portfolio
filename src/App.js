import React, { useState, useEffect } from 'react'
import Content from './Content'
import NameHeader from './NameHeader'
import LocationHeader from './LocationHeader'
import HeaderHome from './HeaderHome'

function App() {
	let [windowWidth, setWindowWidth] = useState(window.innerWidth)
	let [windowHeight, setWindowHeight] = useState(window.innerHeight)
	let [content, setContent] = useState('home')

	function handleResize() {
		setWindowWidth(window.innerWidth)
		setWindowHeight(window.innerHeight)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
	}, [])

	return (
		<div id="mainContentContainer">
			<div id="mainContentOverlay" />
			<div id="header">
				<NameHeader windowWidth={windowWidth} />
				<HeaderHome contentChange={(value) => setContent(value)} />
				<LocationHeader windowWidth={windowWidth} />
			</div>
			<div id="main">
				<Content
					contentChange={(value) => setContent(value)}
					content={content}
					windowHeight={windowHeight}
					windowWidth={windowWidth}
				/>
			</div>
		</div>
	)
}

export default App
