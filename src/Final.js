import React from 'react'
import './styles/final.css'
import emailLogo from './images/emailSVG.svg'
import linkedInLogo from './images/linkedInSVG.svg'


export default function Final() {
    return (
        <div id='final'>
            <div id='finalText'>
                <p class='bigText'>Contact Me!</p>
                <div id='finalIcons'>
                <a href='mailto:aiacuone@gmail.com'><img id='finalEmailLogo' class='contactLogo' src={emailLogo}/></a>
                <a href='https://www.linkedin.com/in/adrian-iacuone/' target="_blank"><img id='finalLinkedInLogo' class='contactLogo' src={linkedInLogo}/></a>
                </div>
                <br/>
                <p>This portfolio was created ONLY using REACT, JAVASCRIPT, CSS and HTML
                <br/><br/>Thankyou for visiting :)</p>
            </div>           
        </div>
    )
}
