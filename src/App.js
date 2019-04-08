import React, {Component}from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

const User = () => {
  return (
    <h1> Welcome User</h1>

  )

};


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
          path = "/about/"
          render = { () => <h1>Welcome About</h1>}
        />

        <Route
          exact strict
          path = "/user"
          render = { User }
        />

        </div>
      </Router>




    )



  }

}

export default App;