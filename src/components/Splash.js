import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import triangles from '../styles/img/main_header.svg';

import About from "./About.js";
import Work from "./Work.js";
import Contact from "./Contact.js";
import NavBar from "./NavBar.js";


import "../styles/splash.css";

export default class Splash extends Component {
  constructor(props){
    super(props);
    this.state = {
      splash: 1
    };

    this.increment1 = this.increment1.bind(this);
    this.increment2 = this.increment2.bind(this);
    this.increment3 = this.increment3.bind(this);
  }

  componentDidMount() {
    var timer1 = setTimeout(this.increment1, 2000);
    var timer2 = setTimeout(this.increment2, 4000);
    var timer3 = setTimeout(this.increment3, 6000);
  }

  increment1 () {
    this.setState({
      splash: 2
    })
  }

  increment2 () {
    this.setState({
      splash: 3
    })
  }

  increment3 () {
    this.setState({
      splash: 4
    })
  }


  render () {
    if (this.state.splash === 1) {
      return (
        <div className="splash">
          <div className="container">
            <section className="col-12-md splash-content">
              <div className="row">
                <h1 className="splash-words animated fadeOut fadeIn">
                Hi, I'm Sara
                </h1>
              </div>
            </section>
          </div>
       </div>
     )
   } else if (this.state.splash === 2) {
       return (
         <div className="splash">
           <div className="container">
             <div className="row">
               <section className="col-12-md splash-content">
                 <h1 className="splash-words animated fadeOut fadeIn">
                   I design and build websites
                 </h1>
              </section>
           </div>
         </div>
       </div>
      )
    } else if (this.state.splash === 3) {
        return (
          <div className="splash">
            <div className="container">
              <div className="row">
                <section className="col-12-md splash-content" id="frame3">
                  <h1 className="splash-words animated fadeOut fadeIn">
                    using Javascript and <i className="fa fa-heart" id="heart" aria-hidden="true"></i>
                  </h1>
               </section>
            </div>
          </div>
        </div>
       )
     } else {
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
}
