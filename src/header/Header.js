import React, { Component } from 'react';
import logo from './images/logo.png'
import './header.css'

class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg ftco_navbar  "
          id="ftco-navbar">
          <div class="container">
            <a href="#"><span className="navbar-brand web-name"><i class="left-bar"></i><i class="right-bar"><h4>
              <img src={logo} alt="logo" className="logo"/>Music</h4></i></span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" 
              aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="oi oi-menu"></span> Menu
            </button>
            <div class="collapse navbar-collapse " id="ftco-nav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item page-head">Album</li>
                <li class="nav-item page-head">Songs</li>
                <li class="nav-item page-head">Join</li>
                <li class="nav-item page-head">Login</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;