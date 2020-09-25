import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import admin from './components/admin';
import signin from './components/signin';
import logo from './logo.svg'
import './App.css'
import Navbar from './components/navbar';

import { Auth } from 'aws-amplify'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar>
            <Switch>
              <Route exact path="/admin" component={admin} />
              <Route exact path="/signin" component={signin} />
            </Switch>
            </Navbar>
          </div>
        </Router>
      </div>
    );
  }
}

/*function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err))
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
        <button onClick={checkUser}>Check User</button>
        <button onClick={signOut}>Sign Out</button>
      </header>
    </div>
  )
}*/

export default App
