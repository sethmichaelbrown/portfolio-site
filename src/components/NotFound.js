// Packages
import React from 'react'
import { Route, Link } from 'react-router-dom'

// Components



// Styling
import '../App.css'
import '../Fonts.css'

const NotFound = (props) => {


  return (
    <div className="NotFound container">
      <div className="row justify-content-center mt-5">
        <h1>Page Not Found</h1>
      </div>

      <div className="row">
        <div className="col-12 btn-container">
          <Link className='link-text' to='/'>
            <button type="button" className="btn btn-lg mb-3">Home</button>
          </Link>
          {/* <Link className='link-text' to='/contact'>
            <button type="button" className="btn btn-lg mb-3 ml-1">Contact</button>
          </Link> */}

        </div>
      </div>



    </div >
  )
}

export default NotFound
