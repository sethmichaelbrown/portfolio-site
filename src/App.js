// Packages
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'


// Components
import NavBar from './components/NavBar'

// Styling
import './App.css'
import './Fonts.css'

class App extends Component {

  render() {
    return (

      <div className="App">
        <Router>

          <NavBar/>

        </ Router>
      </div>
    )
  }
}

export default App
