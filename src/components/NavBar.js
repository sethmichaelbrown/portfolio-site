// Packages
import React from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Components
import Home from './Home'
import Portfolio from './Portfolio'

// Styling
import '../App.css'
import '../Fonts.css'

const NavBar = (props) => {

  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-*">
        <Link className="navbar-brand name" to="/">Seth Michael Brown</Link>

        <div>
          <a className='mr-2' target='_blank' href="https://github.com/sethmichaelbrown">
            <FontAwesomeIcon className='fa-icon' size='lg' color='#FFF4E0' icon={faGithub} />
          </a>
          <a className='mr-2' target='_blank' href="https://linkedin.com/in/seth-brown1/">
            <FontAwesomeIcon className='fa-icon' size='lg' color='#FFF4E0' icon={faLinkedin} />
          </a>
          <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>



        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/contact'>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/portfolio'>Portfolio</Link>
            </li>

          </ul>

        </div>
      </nav>


      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
    </div>
  )
}

export default NavBar
