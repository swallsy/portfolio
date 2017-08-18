import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../styles/App.css";

import Splash from "./Splash.js";
import About from "./About.js";
import NavBar from "./NavBar.js";
import Work from "./Work.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js"

export default class Main extends Component {

  render () {
    return (
      <div className="main">
        <Splash />
        <About />
        <Work />
        <Contact />
        <Footer />
			</div>
    )
  }
}
