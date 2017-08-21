import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css";


export default class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar row" id="navigation-area">
          <a href="#about" className="nav-link">
            ABOUT
          </a>
          <a href="#work" className="nav-link">
            WORK
          </a>
          <a href="#contact" className="nav-link" id="last-item">
            CONTACT
          </a>
        </div>
      </div>
    );
  }
}
