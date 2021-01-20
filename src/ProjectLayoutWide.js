import React from 'react'
import TekkenProjectText from './TekkenProjectText'

export default function ProjectLayoutWide(props) {
    return (
        <div class='projectContainer wide'>
            <div class='projectPicture wide'>
                <div class='projectScreenshot wide' style={props.projectScreenshotStyle}></div>
            </div>
            <div class='projectInfo wide'>
                <div class='projectText wide'>
                {props.content==='tekkennet'&&<TekkenProjectText/>}
                    <div class='projectButtonContainer'>
                        <button class='viewProjectButton introButtons'>View Project</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
