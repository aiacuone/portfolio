import React from 'react'
import './styles/aboutMe.css'

export default function () {
    return (
        <div id='aboutMe' class='contentContainer'>
            <div class='pictureContainerLeft' id='aboutMePictureContainer'>
                <div class='pictureLeft' id='aboutMePicture'/>
            </div>
            <div class='textContainerRight' id='aboutMeTextContainer'>
                <div class='textRight' id='aboutMeText'>
                    <text>
                        <p>a little...</p><p class='bigText'>About Me</p>
                        <br/>
                        <div id='aboutMeInfo'>
                            <div id='aboutMeCategories'>
                                <br/>
                                Name:<br/>	 	    
                                Born:<br/> 		
                                Location:<br/> 	
                                Nationality:<br/> 	
                                Occupation:<br/> 	
                                Interests:<br/>
                            </div>
                            <div id='aboutMeSubCat'>
                                <br/>
                                Adrian Iacuone<br/>
                                May, 1987<br/>
                                Balham, London UK<br/>
                                Australian<br/>
                                Software Developer<br/>
                                Sports, Computers, Music, Stand Up Comedy, Coffee<br/>
                            </div>
                        </div>
                    </text>
                </div>
            </div>
        </div>
    )
}
