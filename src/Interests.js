import React from 'react'
import './styles/interests.css'
import reactLogo from './images/reactLogo.svg'
import javascriptLogo from './images/javascriptLogo.svg'

export default function Interests() {
    return (
        <div id='interests' class='contentContainer'>
            <div class='textContainerLeft' id='interestsTextContainer'>
                <div class='textLeft' id='interestsText'>
                    <text>
                        <p>What are my</p>
                        <p class='bigText'>Work Interests?</p>
                        
                        <br/>
                        <br/>
                        - Applications involving the use of REACT and JAVASCRIPT<br/>- Front, and Back End Software Development
                        <br/>
                        
                        <img class='interestsLogo' src={reactLogo}/>
                        <img class='interestsLogo' src={javascriptLogo}/>
                    </text>
                </div>
            </div>
            
            <div class='pictureContainerRight' id='interestsPictureContainer'>
                <div class='pictureRight' id='interestsPicture'>

                </div>
            </div>
            
        </div>
    )
}
