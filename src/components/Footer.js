
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import bottom from "../styles/img/bottom.svg";

import "../styles/footer.css";

export default class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8" id="footer-image">
              <img src={bottom} id="footer-image" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 solid-footer">
              <p>Copyrights 2017 © | Sara Morgan Wall</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
