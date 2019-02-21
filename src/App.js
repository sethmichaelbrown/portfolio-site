// Packages
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Components
import NavBar from './components/NavBar'

// Styling
import './App.css'
import './Fonts.css'

class App extends Component {
  state = {
    displayPortfolio: false,
  }

  changeDisplayPortfolio = () => {
    const newState = { ...this.state }
    newState.displayPortfolio = !newState.displayPortfolio
    this.setState({ displayPortfolio: newState.displayPortfolio })
  }


  render() {
    return (

      <div className="App">
        <Router>

          <NavBar 
            changeDisplayPortfolio={this.changeDisplayPortfolio}
            displayPortfolio={this.state.displayPortfolio}/>

        </ Router>
      </div>
    )
  }
}

export default App
