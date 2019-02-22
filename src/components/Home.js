// Packages
import React from 'react'
import { Route, Link } from 'react-router-dom'

// Components

// Styling
import '../App.css'
import '../Fonts.css'

const Home = (props) => {

  return (
    <div className="Home">
      <div className="row header-row">
        <div className="col-12 header mt-3">
          <h2>Built, Beautifully</h2>
          <h6>Full Stack || ReactJS || UI/UX</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-12 btn-container">
          <Link className='link-text' to='/portfolio'>
            <button type="button" className="btn btn-lg mb-3">Portfolio</button>
          </Link>

        </div>
      </div>



    </div>
  )
}

export default Home
