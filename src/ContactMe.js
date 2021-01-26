import React from 'react'
import './styles/contactMe.css'
import contactMeHeader from './images/contactMeHeader.svg'

export default function ContactMe() {
    return (
        <div class='contactMe'>
             <img class='contactMeHeader' src={contactMeHeader}/>
             <text class='contactMeText'>

                 <b class='contactMeSubHeader'>Email:</b> <b>aiacuone@gmail.com</b><br/>
                 <b class='contactMeSubHeader'>Linked-in:</b> <b>www.linkedin.com/in/adrian-iacuone</b><br/><br/>
             </text>
             <text>
             
                 I am currently available for work, please dont hesitate to ask any questions :) Thankyou<br/>
             </text>
        </div>
    )
}
