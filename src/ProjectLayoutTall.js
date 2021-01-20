import React from 'react'
import TekkenProjectText from './TekkenProjectText'

export default function ProjectLayoutTall(props) {
    return (
        <div class='projectContainer tall'>
            <div class='projectInfo tall'>
                <div class='projectText tall'>
                    {props.content==='tekkennet'&&<TekkenProjectText/>}
                    <div class='projectButtonContainer tall'>
                        <button class='viewProjectButton introButtons'>View Project</button>
                    </div>
                </div>
            </div>
            <div class='projectPicture tall'>
                <div class='projectScreenshot tall' style={props.projectScreenshotStyle}></div>
            </div>
        </div>
    )
}
