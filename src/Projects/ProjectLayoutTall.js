import React from 'react'
import TekkenProjectText from './TekkenProjectText'
import tekkennetLogo from './images/tekkennetLogo.svg'

export default function ProjectLayoutTall(props) {
    return (
        <div class='projectLayout tall'>
            <div class='projectContainer'>

            <div class='projectSubHeaderContainer'>

                {props.content==='tekkennet'&&<img class='projectLogo tall' src={tekkennetLogo}/>}

            </div>
            <div class='projectInfo tall'>

                <div class='projectScreenshotContainer tall'>
                    <div class='projectScreenshot tall' style={props.projectScreenshotStyle}></div>
                </div>
                <div class='projectTextContainer tall'>
                    {props.content==='tekkennet'&&<TekkenProjectText/>}
                    <div class='projectButtonContainer tall'>
                        <button class='viewProjectButton introButtons'>View Project</button>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}
