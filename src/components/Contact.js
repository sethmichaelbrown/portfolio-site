// Packages
import React from 'react'
import { Route, Link } from 'react-router-dom'

// Components

// Images
import profile from '../images/smb-portrait.png'


// Styling
import '../App.css'
import '../Fonts.css'

const Contact = (props) => {

  const bio = `My name is Seth Brown, I am a full stack developer with an emphasis on frontend work in ReactJS. I have worked with individual clients looking for a website for their small business, non-profits, and large companies looking to move away from bulky and costly solutions like Wix. Clean aesthetics, ease of use and navigation, powerful capabilities, and clear communication during the build are goals I strive for on every project.`

  return (
    <div className="Contact container">
      <div className="row portfolio-intro my-2">
        <div className="col-lg-2 col-md-3 col-sm-6 mt-1">
          <div className="row justify-content-center">
            <a href="https://www.linkedin.com/in/seth-brown1/" target='_blank'><div className="smb-profile" /></a>
          </div>
        </div>
        <div className="col-lg-10 col-md-7 col-sm-6 profile-text my-auto">
          <div className="row contact-header">
            <h1>Get In Touch</h1>
          </div>

        </div>
      </div>


      <div className="row"></div>



    </div >
  )
}

export default Contact
