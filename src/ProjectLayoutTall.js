import React from 'react'
import TekkenProjectText from './TekkenProjectText'
import tekkennetLogo from './images/tekkennetLogo.svg'

export default function ProjectLayoutTall(props) {
    return (
        <div class='projectContainer tall'>
            <div class='projectInfo tall'>
                <div class='projectTextNew tall'>
                    <div class='projectHeader tall'>
                        {props.content==='tekkennet'&&<img class='projectTekkennetLogo tall' src={tekkennetLogo}/>}
                    </div>
                    {props.content==='tekkennet'&&<TekkenProjectText/>}

                </div>
            </div>
            <div class='projectPicture tall'>
                <div class='projectScreenshot tall' style={props.projectScreenshotStyle}></div>
                <div class='projectButtonContainer tall'>
                <button class='viewProjectButton introButtons'>View Project</button>
            </div>
            </div>

        </div>
    )
}
