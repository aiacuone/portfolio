import React from 'react'
import aboutMeHeader from './images/aboutMeHeader.svg'
// import aboutMeHeaderWide from './images/aboutMeHeaderWide.svg'

export default function AboutMeTall(props) {
    return (
        <div class='aboutMeContainer tall'>
            <div class='aboutMeTextContainer tall'>
                {props.windowHeight>=props.windowWidth&&<img class='aboutMeHeader tall' src={aboutMeHeader}></img>}
                {/* {props.windowHeight<props.windowWidth&&<img class='aboutMeHeader' src={aboutMeHeaderWide}></img>} */}
                <div class='aboutMeText tall'>
                    <text>
                        <b>Name:</b> Adrian Iacuone<br/>
                        <b>DOB:</b> <s/>May 1987<br/>
                        <b>Location:</b> South London<br/>
                        <b>Nationality:</b> Australian<br/>
                        <b>Interests:</b> Computers, Sports, Gym, Music and Coffee<br/>
                        <b>Email:</b> aiacuone@gmail.com
                    </text>
                </div>
            </div>
            <div class='aboutMePictureContainer tall'>
                <div class='aboutMePicture tall'/>
            </div>
        </div>
    )
}
