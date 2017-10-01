import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animateHamburger: "collapse"
    };
  }

  render() {

    return (
    <nav className="navbar navbar-inverse navbar-static-top navigation-area" id="master" role="navigation">
        <div className="container">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="hamburger-navbar">
              <ul className="nav navbar-nav">
                  <li><a href="#a" onClick={this.handleNav}>Home</a></li>
                  <li><a href="#about" onClick={this.handleNav}>About</a></li>
                  <li><a href="#work" onClick={this.handleNav}>Work</a></li>
                  <li><a href="#contact" onClick={this.handleNav}>Contact</a></li>
              </ul>
            </div>
          </div>
            <button type="button" ref="navToggle" className="navbar-toggler collapsed is-active"
             data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            id="hamburger-button">
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
          </div>
    </nav>
    );
  }

  handleNav = () => {
    this.refs.navToggle.click();
  }
}
