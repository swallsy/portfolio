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
    <nav className="navbar navbar-inverse navbar-static-top navigation-area" role="navigation">
        <div className="container">
          <div className="collapse navbar-collapse hamburger hamburger-navbar" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                  <li><a href="#about" onClick={this.handleNav}>About</a></li>
                  <li><a href="#work" onClick={this.handleNav}>Work</a></li>
                  <li><a href="#contact" onClick={this.handleNav}>Contact</a></li>
              </ul>
          </div>
            <div className="navbar-header">
                <button type="button" ref="navToggle" className="navbar-toggler collapsed is-active"
                 data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                id="hamburger-button">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
        </div>
    </nav>
      // <div className="container-fluid">
      //   <div className="navbar row" id="navigation-area">
      //     <div className="col-md-8 navigation-items">
      //       <a href="#about" className="nav-link">
      //         ABOUT
      //       </a>
      //       <a href="#work" className="nav-link">
      //         WORK
      //       </a>
      //       <a href="#contact" className="nav-link" id="last-item">
      //         CONTACT
      //       </a>
      //     </div>
      //   </div>
      // </div>
    );
  }

  handleNav = () => {
    this.refs.navToggle.click();
  }
}
