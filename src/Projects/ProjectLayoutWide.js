import React from 'react'
import TekkenProjectText from './TekkenProjectText'
import FreecodecampProjectText from './FreecodecampProjectText'
import tekkennetLogo from './images/tekkennetLogo.svg'
import freecodecampLogo from './images/freecodecampLogo.svg'
export default function ProjectLayoutWide(props) {


    return (
        <div class='projectLayout wide'>

            <div class='projectContainer'>

                <div class='projectSubHeaderContainer'>

                    {props.content==='tekkennet'&&<img class='projectLogo wide' src={tekkennetLogo}/>}
                    {props.content==='freecodecamp'&&<img class='projectLogo wide' src={freecodecampLogo}/>}

                </div>
                <div class='projectInfo wide'>

                    <div class='projectScreenshotContainer wide'>
                        <div class='projectScreenshot wide' style={props.projectScreenshotStyle}></div>
                    </div>
                    <div class='projectTextContainer wide'>
                        {props.content==='tekkennet'&&<TekkenProjectText/>}
                        {props.content==='freecodecamp'&&<FreecodecampProjectText/>}
                        <div class='projectButtonContainer wide'>
                            <button class='viewProjectButton introButton'>View Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
