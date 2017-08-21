import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import triangles from '../styles/img/header_image.svg';

import About from "./About.js";
import Work from "./Work.js";
import Contact from "./Contact.js";
import NavBar from "./NavBar.js";


import "../styles/splash.css";

export default class Splash extends Component {

  render () {
        return (
          <div id="main-menu">
            <NavBar />
            <div className="container">
              <div className="row">
                <div className="col-md-7" id="header-image">
                  <img src={triangles} id="triangle-image" />
                </div>
              </div>
            </div>
          </div>
        )
     }
}
