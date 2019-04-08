import React, {Component}from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

const User = ({match}) => {
  return (
    <h1> Welcome User {match.params.username} </h1>

  )

};


// Step 1) Using <Route/>
// established Routes using path, what to render, and :username for specific paths


class App extends Component {
  state = {
    loggedIn: false,
  };

  loginHandle = () => {
    this.setState = {loggedIn: true}
  };


  render() {
    return (
      <Router>


        <div className = "App">
          <h1>Something</h1>

        <input type = "button" value = "log in" onClick = {() => this.loginHandle}/>


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
              <NavLink exact to  = "/" activeStyle = { {color: 'deeppink'} }> Home </NavLink>
              <NavLink exact to  = "/about" activeStyle = { {color: 'deeppink'} } > About </NavLink>
              <NavLink exact to  = "/user/Joe" activeStyle = { {color: 'deeppink'} } > Joe </NavLink>
              <NavLink exact to  = "/user/Beth" activeStyle = { {color: 'deeppink'} } > Beth</NavLink>
          </div>








        </div>

      </Router>




    )



  }

}

export default App;