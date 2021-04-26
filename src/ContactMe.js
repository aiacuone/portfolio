import React from 'react'
import './styles/contactMe.css'
import contactMeHeader from './images/contactMeHeader.svg'

export default function ContactMe() {
	return (
		<div className="contactMe">
			<img className="contactMeHeader" src={contactMeHeader} alt="" />
			<p className="contactMeText">
				<b className="contactMeSubHeader">Email:</b>{' '}
				<a href="mailto:aiacuone@gmail.com">
					<b>aiacuone@gmail.com</b>
				</a>
				<br />
				<b className="contactMeSubHeader">LinkedIn:</b>{' '}
				<a href="https://www.linkedin.com/in/adrian-iacuone/">
					<b>www.linkedin.com/in/adrian-iacuone</b>
				</a>
				<div className="phoneNumberWrapper">
					<b className="contactMeSubHeader">Phone:</b>{' '}
					<p className="phonenumber">07 393 961 334</p>
				</div>
				<br />
				<br />
			</p>
			<p>
				I am currently available for work, please dont hesitate to get in touch
				:) Thankyou
				<br />
			</p>
		</div>
	)
}
