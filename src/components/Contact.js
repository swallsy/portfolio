import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../styles/contact.css";

export default class Contact extends Component {

  render () {
    return (
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8" id="contact-wrapper">
              <h2 id="contact-title">Contact</h2>
              <div id="contact-info">
                <p> Have questions or want to chat about a project? Feel free to drop a line via email, LinkedIn or Github. Thanks for checking out my portfolio!</p>
                <div id="name-and-links">
                  <p id="name">Sara Morgan Wall<br/>
                  Front-End Developer<br/>
                  smwall84@gmail.com</p>
                  <div id="icons">
                    <a href="https://github.com/swallsy"><i className="fa fa-github-square social-icons" id="github" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/saramorganwall/"><i className="fa fa-linkedin-square social-icons" aria-hidden="true"></i></a>
                    <a href="mailto:smwall84@gmail.com"><i className="fa fa-envelope-square social-icons" aria-hidden="true"></i></a>
                  </div>
               </div>
            </div>
          </div>
        </div>
			</div>
    </div>
    )
  }
}
