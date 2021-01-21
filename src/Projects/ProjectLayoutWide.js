import React from 'react'
import TekkenProjectText from './TekkenProjectText'
import tekkennetLogo from './images/tekkennetLogo.svg'
import screenshot from './images/tekkenScreenshot.jpg'

export default function ProjectLayoutWide(props) {


    return (
        <div class='projectLayout wide'>

            <div class='projectContainer'>

                <div class='projectSubHeaderContainer'>

                    {props.content==='tekkennet'&&<img class='projectLogo wide' src={tekkennetLogo}/>}

                </div>
                <div class='projectInfo wide'>

                    <div class='projectScreenshotContainer wide'>
                        <div class='projectScreenshot wide' style={props.projectScreenshotStyle}></div>
                    </div>
                    <div class='projectTextContainer wide'>
                        {props.content==='tekkennet'&&<TekkenProjectText/>}
                        <div class='projectButtonContainer wide'>
                            <button class='viewProjectButton introButtons'>View Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
