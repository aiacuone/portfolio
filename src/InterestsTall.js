import React from 'react'
import interestsHeader from './images/interestsHeader.svg'
import javascriptLogo from './images/javascriptLogo.svg'
import reactLogo from './images/reactLogo.svg'

export default function InterestsTall(props) {
    return (
        <div class='interestsContainer tall'>
            <div class='interestsInfoContainer tall'>
                <div class='InterestsInfo tall'>
                    <text>
                        {/* <h2 class='interestsHeader'><b>Work Interests</b></h2> */}
                        <img class='interestsHeader tall'src={interestsHeader}></img><br/>
                            I am at the early stages of my career, and would love to work within an experienced group, so I can learn what they have to offer.<br/>
                            More specifically, main focus is applications using both Javascript and React.<br/>
                        <img class='reactLogo interestsLogo tall'src={reactLogo}/>
                        <img class='javascriptLogo interestsLogo tall'src={javascriptLogo}/>
                    </text>
                </div>
            </div>
            <div class='interestsPictureContainer tall'>
                <div class='interestsPicture tall'/>
            </div>
        </div>
    )
}
