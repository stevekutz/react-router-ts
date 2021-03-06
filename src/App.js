import React, {Component}from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt} from 'react-router-dom';

const User = (params) => {
  return (
    <h1> Welcome User {params.username} </h1>

  )

};


// Step 1) Using <Route/>
// established Routes using path, what to render, and :username for specific paths


class App extends Component {
  state = {
    loggedIn:false
  };
  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  };
/*
        <input
          type = "button"
          value = {
            this.state.loggedIn
            ? 'logout'
            : 'login'
          }
          onClick={this.loginHandle.bind(this)}
        />
*/


  render() {
    return (
      <Router>


        <div className = "App">
          <h1>Something</h1>

          <input
            type = "button"
            value = {
              this.state.loggedIn
                ? 'logout'
                : 'login'
            }
            onClick={ () => this.loginHandle()}
          />

          <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
              return location.pathname.startsWith('/user') ? 'Are you sure?' : true
            }}
          />


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
          render = {  ({match}) => (    //    (match) will not work
            this.state.loggedIn
              ? (<User username = {match.params.username}/>)
              : (<Redirect  to = "/" />)

          )
             }
        />




          {/* Step 2) Add some Links now and specify path with   to = "PATHNAME"*/}
          {/*  we wrap in a div & use flex for some basic layout */}
          <div className = "links">
              <NavLink exact to  = "/" activeStyle = { {color: 'deeppink'} }> Home </NavLink>
              <NavLink exact to  = "/about" activeStyle = { {color: 'deeppink'} } > About </NavLink>
              <NavLink exact to  = "/user/Joeeee" activeStyle = { {color: 'deeppink'} } > Joe </NavLink>
              <NavLink exact to  = "/user/Beth" activeStyle = { {color: 'deeppink'} } > Beth</NavLink>
          </div>








        </div>

      </Router>




    )



  }

}

export default App;