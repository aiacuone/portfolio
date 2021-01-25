import React from 'react'
import './styles/aboutMe.css'
import AboutMeWide from './AboutMeWide'
import AboutMeTall from './AboutMeTall'
// import aboutMeHeader from './images/aboutMeHeader.svg'
// import aboutMeHeaderWide from './images/aboutMeHeaderWide.svg'

export default function AboutMe(props) {
    return (
        <div class='aboutMe'>
             {props.windowHeight>=props.windowWidth&&<AboutMeTall
                windowWidth={props.windowWidth} 
                windowHeight={props.windowHeight}/>}
            {props.windowHeight<props.windowWidth&&<AboutMeWide
                windowWidth={props.windowWidth} 
                windowHeight={props.windowHeight}/>}
            {/* <AboutMeTall
                windowWidth={props.windowWidth} 
                windowHeight={props.windowHeight}/> */}
            {/* <AboutMeWide
                windowWidth={props.windowWidth} 
                windowHeight={props.windowHeight}/> */}
            {/* <div class='aboutMePictureContainer'>
                <div class='aboutMePicture'/>
            </div>
            <div class='aboutMeTextContainer'>
                {props.windowHeight>=props.windowWidth&&<img class='aboutMeHeader' src={aboutMeHeader}></img>}
                {props.windowHeight<props.windowWidth&&<img class='aboutMeHeader' src={aboutMeHeaderWide}></img>}
                <div class='aboutMeText'>
                    Name: Adrian Iacuone<br/>
                    DOB: May 1987<br/>
                    Location: South London<br/>
                    Nationality: Australian<br/>
                    Interests: Computers, Sports, Gym, Music and Coffee
                </div>
                
            </div> */}
        </div>
    )
}
