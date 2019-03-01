// Packages
import React from 'react'
import { Link } from 'react-browser-router'

// Components

// Images
import resume from '../images/Website_Seth_Brown_Resume_2019.pdf'

// Styling
import '../App.css'
import '../Fonts.css'

const Contact = (props) => {

  const missionStatment = 'My mission is to bring value, efficiency, and strong communication to all aspects of the project. Whether client or employer, I will work to ensure your project is completed in a timely manner. I will work with you to find the best solutions to the problems you need solved. From inception to realization or anywhere in between, I can help to optimize, refactor or build a solution tailored to you. Building, management, optimization/ SEO services all available.'
  const technicalSkills = [
    'AWS (Amplify, Cloudwatch, Cognito, Gateway, Lambda, & more)',
    'ReactJS',
    'React Native',
    'JavaScript (ES6+)',
    'CoffeeScript',
    'Python',
    'Django',
    'PostgreSQL',
    'Express.js',
    'Node.js',
    'HTML5 + CSS3',
    'Materialize/ Bootstrap',
    'Knex',
    'Database Creation/ Mgmt.',
    'Git & Github',
  ].sort().reverse()

  const nonTechnicalSkills = [
    'Operational Leadership',
    'Pair Programming',
    'Wireframing',
    'Project Management',
    'UI/ UX Development',
    'Test Driven Development',
    'Jira Project Tracking',
    'SCRUM Workflow',
    'Agile Workflow',
    'Responsive Design'
  ].sort()

  return (
    <div className="Contact">
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

      <div className="container">
        <div class="accordion" id="smb-accordion">
          <div class="card mt-1">
            <div class="card-header" role="button" id="heading1" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
              <h2>Mission Statement</h2>
            </div>
            <div id="collapse1" class="collapse show" aria-labelledby="heading1" data-parent="#smb-accordion">
              <div class="card-body contact-card-body">
                <p>{missionStatment}</p>
              </div>
            </div>

            <div class="card mt-1">
              <div class="card-header" id="heading2" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                <h2>Skills & Services</h2>
              </div>
              <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#smb-accordion">
                <div class="card-body contact-card-body">
                  <p>Please see my resume <a rel="noopener noreferrer" target='_blank' href={resume}>here</a></p>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <p>Coding Skills</p>
                      <ul>
                        {technicalSkills.map(skill => <li><p>{skill}</p></li>)}
                      </ul>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <p>Workflow Skills</p>
                      <ul>
                        {nonTechnicalSkills.map(skill => <li><p>{skill}</p></li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mt-1">
              <div class="card-header" id="heading3" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                <h2>Contact</h2>
              </div>
              <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#smb-accordion">
                <div class="card-body contact-card-body">
                  <p>Connect with me on
                    <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/seth-brown1/"> LinkedIn</a>
                  </p>
                  <p>Checkout my code on
                    <a rel="noopener noreferrer" target='_blank' href="https://github.com/sethmichaelbrown"> Github</a>
                  </p>
                  <p>View past projects in my
                    <Link className='link-text' to='/portfolio'> Portfolio</Link>
                  </p>
                  <p>Send me an
                    <a rel="noopener noreferrer" target='_blank' href="mailto:sethmichaelbrown@gmail.com?subject=Contacting from Site"> email</a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact
