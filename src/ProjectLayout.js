import React, {useState,useEffect} from 'react'
import './styles/projectLayout.css'
import tekkennetLogo from './images/tekkennetLogo.svg'
import ProjectLayoutWide from './ProjectLayoutWide'
import ProjectLayoutTall from './ProjectLayoutTall'
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
            {props.windowWidth>props.windowHeight&&<ProjectLayoutWide content={props.content} projectScreenshotStyle={projectScreenshotStyle}/>}
            {props.windowWidth<=props.windowHeight&&<ProjectLayoutTall content={props.content} projectScreenshotStyle={projectScreenshotStyle}/>}
            
        </div>
    )
}
