// Packages
import React from 'react'
import { Route, Link } from 'react-router-dom'

// Components

import bts from './project-images/bts-app.png'
import riverfront from './project-images/riverfront-hearing.png'
import rjmusic from './project-images/rjmusic.png'

// Styling
import '../App.css'
import '../Fonts.css'

const Portfolio = (props) => {

  const projects = [
    {
      title: 'Bus To Show',
      description: "Member of a team that built, deployed, and continue to maintain the new Bus To Show website that allows for reservations to be fulfilled. Lead the frontend development & UI / UX, assisted with backend architecture.",
      link: '',
      image: bts,
      githubLink: 'https://github.com/sethmichaelbrown/bus-to-show-2',
      tools: 'ReactJS, JavaScript, HTML5+ CSS3, Node.js, Express, PostgreSQL'
    },
    {
      title: 'Riverfront Hearing',
      description: "Michigan’s leading family audiologist practice was looking to move away from using Wix and have a custom site, with ease of navigation and simplicity of design taking priority.",
      image: riverfront,
      link: 'http://riverfront.surge.sh',
      githubLink: 'https://github.com/sethmichaelbrown/riverfront-website',
      tools: 'JavaScript, MaterializeCSS, HTML5+ CSS3, Node.js'
    },
    {
      title: 'Robert James Music',
      description: "Boulder-based musician and guitar teacher, Robb James, needed a rebuild of his website to better facilitate bringing in new clients.",
      image: rjmusic,
      link: 'http://rj-music.surge.sh',
      githubLink: 'https://github.com/sethmichaelbrown/robert-james-music',
      tools: 'JavaScript, MaterializeCSS, HTML5+ CSS3, Node.js'
    },
  ]

  return (
    <div className="Portfolio container">
      <div className="row">
        <div className="col-5">
          Profile Image
        </div>
        <div className="col-7">
          Intro Text
      </div>

      </div>
      <div className="row">
        {projects.map(project => {
          return (
            <div className="col-md-6 col-sm-12 d-flex ">
              <div class="card flex-fill mb-2">
                <img src={project.image} class="card-img-top card-image" alt={project.title} />
                <div class="card-body">
                  <h5 class="card-title">{project.title}</h5>
                  <p class="card-text card-description">{project.description}</p>
                  {project.link ? 
                  <a href={project.link} class="btn mr-2">See Site</a> :
                  <a href={project.link} disabled class="btn mr-2 disabled">In Progress</a>
                  }
                  <a href={project.githubLink} class="btn ">See Code</a>
                </div>
              </div>
            </div>
          )
        }

        )}
      </div>



    </div>
  )
}

export default Portfolio
