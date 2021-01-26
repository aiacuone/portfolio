import React from 'react'
import TekkenProjectText from './TekkenProjectText'
import FreecodecampProjectText from './FreecodecampProjectText'
import tekkennetLogo from './images/tekkennetLogo.svg'
import freecodecampLogo from './images/freecodecampLogo.svg'

export default function ProjectLayoutTall(props) {
    return (
        <div class='projectLayout tall'>
            <div class='projectContainer'>

            <div class='projectSubHeaderContainer'>

                {props.content==='tekkennet'&&<img class='projectLogo tall' src={tekkennetLogo}/>}
                {props.content==='freecodecamp'&&<img class='projectLogo tall' src={freecodecampLogo}/>}

            </div>
            <div class='projectInfo tall'>

                <div class='projectScreenshotContainer tall'>
                    <div class='projectScreenshot tall' style={props.projectScreenshotStyle}></div>
                </div>
                <div class='projectTextContainer tall'>
                    {props.content==='tekkennet'&&<TekkenProjectText/>}
                    {props.content==='freecodecamp'&&<FreecodecampProjectText/>}

                    <div class='projectButtonContainer tall'>
                        <button class='viewProjectButton introButton'>View Project</button>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}
