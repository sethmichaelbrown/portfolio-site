// Packages
import React from 'react'
import { Route, Link } from 'react-router-dom'

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
        <button className="navbar-toggler custom toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

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
