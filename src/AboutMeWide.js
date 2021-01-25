import React from 'react'
// import aboutMeHeader from './images/aboutMeHeader.svg'
import aboutMeHeader from './images/aboutMeHeader.svg'

export default function AboutMeWide(props) {
    return (
        <div class='aboutMeContainer wide'>
            <div class='aboutMePictureContainer'>
                <div class='aboutMePicture'/>
            </div>
            <div class='aboutMeTextContainer'>
                {/* {props.windowHeight>=props.windowWidth&&<img class='aboutMeHeader' src={aboutMeHeader}></img>} */}
                {props.windowHeight<props.windowWidth&&<img class='aboutMeHeader wide' src={aboutMeHeader}></img>}
                <div class='aboutMeText'>
                    <b>Name:</b> Adrian Iacuone<br/>
                    <b>DOB:</b> May 1987<br/>
                    <b>Location:</b> South London<br/>
                    <b>Nationality:</b> Australian<br/>
                    <b>Interests:</b> Computers, Sports, Gym, Music and Coffee<br/>
                    <b>Email:</b> aiacuone@gmail.com
                </div>
            </div>
        </div>
    )
}
