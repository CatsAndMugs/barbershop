import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import config from '../aws-exports';

Amplify.configure(config);

export default class navbar extends Component {
  
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h1>Barbershop</h1>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/admin" className="navbar-item">
              Admin
            </a>
          </div>

          <div className="navbar-end">
            <a href="/" className="navbar-item">
                Guest
            </a>

            <div className="navbar-item">
              <div className="buttons">
                <button onClick={() => Auth.federatedSignIn()}>Sign in / Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

