import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import About from "./About.js";
import Skills from "./Skills.js";
import Work from "./Work.js";
import Contact from "./Contact.js";


import "../styles/splash.css";

export default class Splash extends Component {
  constructor(props){
    super(props);
    this.state = {
      splash:
            <section className="col-8-md" id="splash-content">
              <div className="row">
                <h1 className="splash-words animated fadeOut fadeIn">
                Hi, I'm Sara
                </h1>
              </div>
            </section>
    };

    this.changeText = this.changeText.bind(this);
    this.dissolveToMainMenu = this.dissolveToMainMenu.bind(this);
  }

  componentDidMount() {
    var timer1 = setTimeout(this.changeText, 2000);
    var timer2 = setTimeout(this.dissolveToMainMenu, 4000);
  }

  changeText() {
    this.setState({splash:
      <div className="row">
        <section className="col-8-md" id="splash-content">
          <h1 className="splash-words animated fadeOut fadeIn">
            I design and build websites.
          </h1>
        </section>
      </div>
    });
  }

  dissolveToMainMenu() {
    this.setState({splash:
      <div className="row">
        <section className="col-6-md nameAndTitle ">
          <h3>Sara Wall</h3>
          <h4>Frontend Developer</h4>
        </section>
        <section className="col-6-md navigation">
          <ul>
            <li><Link className="navlink" to={'/about'}>About</Link></li>
          </ul>
        </section>
      </div>
    })
  }

  // set the render states to numbers, render the initial state of one, on component did mount triggers set timeout to make the function be this.set.state = 2,then this.set.state.... set to 2, if state is not 2 and it's not 1, set it to 3.

  render () {
    return (
      <div className="splash">
        <div className="container">
            {this.state.splash}
        </div>
     </div>
   )}
}
