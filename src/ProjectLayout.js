import React, {useState,useEffect} from 'react'
import './styles/projectLayout.css'
import tekkennetLogo from './images/tekkennetLogo.svg'
import ProjectLayoutWide from './ProjectLayoutWide'
import tekkenScreenshot from './images/tekkenScreenshot.jpg'

export default function ProjectLayout(props) {

    let [screenshotImage, setScreenshotImage]=useState('')

    useEffect(()=>{
        props.content==='tekkennet'&&setScreenshotImage(tekkenScreenshot)
    })

    let projectScreenshotStyle={
        backgroundImage:'url('+screenshotImage+')'
    }

    return (
        <div class='projectLayout'>
            <div class='projectHeader'>
                {props.content==='tekkennet'&&<img src={tekkennetLogo}/>}
            </div>

            {props.windowWidth>props.windowHeight&&<div class='projectContainer wide'>
                <div class='projectPicture wide'>
                    {/* {props.content==='tekkennet'&&<div class='projectScreenshot tekkennetScreenshot wide'></div>} */}
                    <div class='projectScreenshot wide' style={projectScreenshotStyle}></div>
                </div>
                <div class='projectInfo wide'>
                    <div class='projectText wide'>
                        <text>
                            <b>Summary:</b> <br/>Tekken, a game created 18+ years ago, with 50+ characters, each character having 80+ moves, with each move having their on characteristics and attributes.<br/>
                            Tekken-Net provides and easy to use system, with various ways to filter and search any you wish.<br/><br/>
                            <b>Languages:</b> <br/> React, Javascript, HTML, CSS<br/>
                            <b>Skills:</b> <br/> Regex, Loops, Arrays, Array Methods, Objects, Object methods, Functions
                        </text>
                        <div class='projectButtonContainer'>
                            <button class='viewProjectButton introButtons'>View Project</button>
                        </div>

                    </div>

                </div>
            </div>}
            
        </div>
    )
}
