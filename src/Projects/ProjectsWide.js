import React from 'react'
import projectsHeader from './images/projectsHeader.svg'
import tekkennetLogo from './images/tekkennetLogo.svg'

export default function ProjectsWide(props) {
    return (
        <div class='projectsContainer wide'>
            <div class='projectsInfo wide'>
                <img class='projectsHeader wide' src={projectsHeader}/>
                <div class='projectsText wide'>
                    <text>
                        These are the projects ive created. Im constantly creatinng something new. Check in frequently, this list will be continually growing!<br/><br/>
                        
                    </text>
                </div>
            </div>
            <div class='projectsLogos'>
            <b>SELECT A PROJECT:</b>
                <img class='tekkennetLogo projectsLogo'src={tekkennetLogo} onClick={event=>props.contentChange('tekkennet')}/>
            </div>
        </div>
    )
}
