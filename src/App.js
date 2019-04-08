import React, {Component}from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const User = ({match}) => {
  return (
    <h1> Welcome User {match.params.username} </h1>

  )

};


// Step 1) Using <Route/>
// established Routes using path, what to render, and :username for specific paths


class App extends Component {
  render() {
    return (
      <Router>


        <div className = "App">
          <h1>Something</h1>

        <Route
          exact strict
          path = "/"
          render = { () => <h1>Welcome Home</h1>}
        />

        <Route
          exact strict
          path = "/about"
          render = { () => <h1>Welcome About</h1>}
        />
          {/*
         <Route
          exact strict
          path = "/user"
          render = { User }
        />
          */}

        <Route
          exact strict
          path = "/user/:username"
          render = { User }
        />




          {/* Step 2) Add some Links now and specify path with   to = "PATHNAME"*/}
          {/*  we wrap in a div & use flex for some basic layout */}
          <div className = "links">
              <Link to  = "/"> Home </Link>
              <Link to  = "/about"> About </Link>
          </div>








        </div>

      </Router>




    )



  }

}

export default App;