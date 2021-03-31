import React from 'react'
import TekkenProjectText from './TekkenProjectText'
import FreecodecampProjectText from './FreecodecampProjectText'
import tekkennetLogo from './images/tekkennetLogo.svg'
import freecodecampLogo from './images/freecodecampLogo.svg'
export default function ProjectLayoutWide({ content,projectScreenshotStyle,buttonLink}) {


    return (
        <div class='projectLayout wide'>

            <div class='projectContainer'>

                <div class='projectSubHeaderContainer'>

                    {content==='tekkennet'&&<img class='projectLogo wide' src={tekkennetLogo}/>}
                    {content==='freecodecamp'&&<img class='projectLogo wide' src={freecodecampLogo}/>}

                </div>
                <div class='projectInfo wide'>

                    <div class='projectScreenshotContainer wide'>
                        <div class='projectScreenshot wide' style={projectScreenshotStyle}></div>
                    </div>
                    <div class='projectTextContainer wide'>
                        {content==='tekkennet'&&<TekkenProjectText/>}
                        {content==='freecodecamp'&&<FreecodecampProjectText/>}
                        <div class='projectButtonContainer wide'>
                            <a href={buttonLink } target='_blank'><button class='viewProjectButton introButton' >View Project</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
