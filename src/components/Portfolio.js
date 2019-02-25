// Packages
import React from 'react'

// Components

// Images
import bts from './project-images/bts-app.png'
import riverfront from './project-images/riverfront-hearing.png'
import rjmusic from './project-images/rjmusic.png'
import road from './project-images/road.png'

// Styling
import '../App.css'
import '../Fonts.css'

const Portfolio = (props) => {

  const bio = `My name is Seth Brown, I am a full stack developer with an emphasis on frontend work in ReactJS. I have worked with individual clients looking for a website for their small business, non-profits, and large companies looking to move away from bulky and costly solutions like Wix. Clean aesthetics, ease of use and navigation, powerful capabilities, and clear communication during the build are goals I strive for on every project.`
  const bio2 = `Please feel free to check out my GitHub account, or get in contact me regarding your project. I look forward to hearing from you!`

  let key = 1

  const projects = [
    {
      title: 'Bus To Show',
      description: "Member of a team that built, deployed, and continues to maintain the new Bus To Show website. The site currently allows for reservations to be taken and fulfilled. Lead the frontend development & UI / UX, assisted with backend architecture.",
      link: '',
      image: bts,
      githubLink: 'https://github.com/sethmichaelbrown/bus-to-show-2',
      tools: 'ReactJS, JavaScript, HTML5+ CSS3, Node.js, Express, PostgreSQL'
    },
    {
      title: 'Riverfront Hearing',
      description: "Michigan’s leading family audiologist practice was looking to move away from using Wix. They wanted a custom site with ease of navigation and simplicity of design taking priority.",
      image: riverfront,
      link: 'http://riverfront.surge.sh',
      githubLink: 'https://github.com/sethmichaelbrown/riverfront-website',
      tools: 'JavaScript, MaterializeCSS, HTML5+ CSS3, Node.js'
    },
    {
      title: 'Robert James Music',
      description: "Boulder-based musician and guitar teacher, Robert James, needed a rebuild of his website to better facilitate bringing in new clients.",
      image: rjmusic,
      link: 'http://rj-music.surge.sh',
      githubLink: 'https://github.com/sethmichaelbrown/robert-james-music',
      tools: 'JavaScript, MaterializeCSS, HTML5+ CSS3, Node.js'
    },
    {
      title: 'Currently Seeking Opportunities',
      description: "If you need a web development project completed - from a basic site to a scalable app - get in touch with me.",
      image: road,
      link: 'https://github.com/sethmichaelbrown/',
      githubLink: 'https://github.com/sethmichaelbrown/',
      tools: 'ReactJS, JavaScript, HTML5+ CSS3, Node.js, Express, PostgreSQL & more!'
    },
  ]

  return (
    <div className="Portfolio">
      <div className="row portfolio-intro my-2">
        <div className="col-lg-2 col-md-3 col-sm-6 mt-1">
          <div className="row justify-content-center">
            <a href="https://www.linkedin.com/in/seth-brown1/" target='_blank'><div className="smb-profile" /></a>
          </div>
        </div>
        <div className="col-lg-10 col-md-7 col-sm-6 profile-text">
          <p>{bio}</p>
          <p>{bio2}</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {projects.map(project => {
            return (
              <div key={key++} className="col-md-6 col-sm-12 d-flex">
                <div className="card portfolio-card flex-fill mb-2">
                  <img src={project.image} className="card-img-top card-image" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text card-description">{project.description}</p>
                    <p className="card-text card-description">{project.tools}</p>
                    {project.link ?
                      <a href={project.link} rel="noopener noreferrer" target='_blank' className="btn mr-2">See Site</a> :
                      <a href={project.link} disabled className="btn mr-2 disabled">In Progress</a>
                    }
                    <a href={project.githubLink} className="btn ">See Code</a>
                  </div>
                </div>
              </div>
            )
          }

          )}
        </div>
      </div>



    </div >
  )
}

export default Portfolio
