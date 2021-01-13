import React from 'react'
import './styles/introduction.css'
import './styles/index.css'


export default function Introduction(props) {
    return (
        <div id='introduction' class='contentContainer' onMouseEnter={()=>props.clickHamburger('normal')}>
            <div class='pictureContainerLeft' id='introPictureContainer'>
                <div class='pictureLeft' id='introPicture'></div>
            </div>
            <div class='textContainerRight' id='introTextContainer'>
                <div class='textRight' id='introText'>
                    <text>
                        <p>Hello and</p>
                        <p class='bigText'>Welcome!</p>
                        <br/>
                        <p>I am a self taught Software Developer living in London UK. I recently made the career change to Software Development in light of the extra time brought upon by Covid-19.
                        <br/>
                        <br/>
                        Please continue down for extra information!</p>
                    </text>
                </div>
            </div>

        </div>
    )
}
