import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css";
import logo from "../styles/img/sw_logo.svg";


export default class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="row" id="navigation-area">
          <a href="#about" className="nav-link">
            ABOUT
          </a>
          <a href="#work" className="nav-link">
            WORK
          </a>
          <a href="#contact" className="nav-link" id="last-item">
            CONTACT
          </a>
        </nav>
      </div>
    );
  }
}
