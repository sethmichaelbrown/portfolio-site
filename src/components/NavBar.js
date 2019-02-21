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
              <Link className="nav-link" to='/portfolio'>Portfolio</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Link</a> */}
            </li>
            <li className="nav-item dropdown">
              {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a> */}
              {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </nav>


      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
    </div>
  )
}

export default NavBar
