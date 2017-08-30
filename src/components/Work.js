import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../styles/Work.css";
import soundcloudImg from "../styles/img/soundcloud_player.png";
import mysteryWordsImg from "../styles/img/mysteryword.png";
import gabbleImg from "../styles/img/gabble.png";
import magicShoppeImg from "../styles/img/Magic Shoppe.png";
import etsyImg from "../styles/img/etsy.png";
export default class Work extends Component {

  render () {
    return (
      <div id="work">
        <div className="container">
          <h2>Work</h2>

          <div className="row project" >
              <img className="d-block img-fluid col-md-8 project-img" src={etsyImg} alt="First slide" />
              <div className="col-md-4" id="project-info">
                  <h5>Etsy Homepage</h5>
                  <p>As a class, we split into four groups to build a copy of core pages of the Etsy site. We leveraged Etsy's API to dynamically populate content. My team focused on the Homepage and Navigation Menu. I specifically built the Carousel, Shop by Category, and Recent Review sections.</p>
                  <p>Technologies: React, Bootstrap</p>
                  <a href="http://etsyclassproject.surge.sh/" className="live-btn" target="_blank">Live Site</a>
                  <a href="https://github.com/swallsy/TIY-Etsy-Final" className="github-btn" target="_blank">GitHub</a>
              </div>
          </div>

          <div className="row project">
              <img className="d-block img-fluid col-md-8 project-img" src={soundcloudImg} alt="First slide" />
              <div className="col-md-4" id="project-info">
                  <h5>SoundCloud Music Player</h5>
                  <p>I built and designed this app during the fourth week at the Iron Yard. It's a music app that utilizes SoundCloud's API to return a list of songs based off of a search query.</p>
                  <p>Technologies: JavaScript, CSS and HTML</p>
                  <a href="https://swallsy.github.io/soundcloud_player/" className="live-btn" target="_blank">Live Site</a>
                  <a href="https://github.com/swallsy/soundcloud_player" className="github-btn" target="_blank" >GitHub</a>
              </div>
          </div>

          <div className="row project" >
              <img className="d-block img-fluid col-md-8 project-img" src={gabbleImg} alt="First slide" />
              <div className="col-md-4" id="project-info">
                  <h5>Gabble: Social Site</h5>
                  <p>Gabble is a social app that allows users to signup for an account, login, create and delete posts, like and unlike posts, and also view a list of a comment's likes. I built and designed this project within a week.</p>
                  <p>Technologies: Node.js, Express, Sequelize, PostgreSQL, Mustache, and Heroku</p>
                  <a href="https://protected-brook-54730.herokuapp.com/index" className="live-btn" target="_blank">Live Site</a>
                  <a href="https://github.com/swallsy/gabble_social_app" className="github-btn" target="_blank">GitHub</a>
              </div>
          </div>

          <div className="row project" >
              <img className="d-block img-fluid col-md-8 project-img" src={magicShoppeImg} alt="First slide" />
              <div className="col-md-4" id="project-info">
                  <h5>The Magic Shoppe: eCommerce Site</h5>
                  <p>As a group of four, over the span of a week, we built a mini eCommerce site that sold "magical items". Users are able to browse the collection, read reviews and add an item to their cart. We built our database and hosted it on Heroku for all API calls.</p>
                  <p>Technologies: Express, Node.js, PostegreSQL, Sequelize, React, and Bootstrap.</p>
                  <a href="http://magicshoppe.surge.sh/" className="live-btn" target="_blank">Live Site</a>
                  <a href="https://github.com/swallsy/Magic-Shoppe-Project" className="github-btn" target="_blank" >GitHub</a>
              </div>
          </div>

          <div className="row project" >
              <img className="d-block img-fluid col-md-8 project-img" src={mysteryWordsImg} alt="First slide" />
              <div className="col-md-4" id="project-info">
                  <h5>Mystery Words</h5>
                  <p>Utilizing Node.js, I built and designed this game modeled after the popular kids game 'Hangman'. In this version, players guess letters until they are able to guess the correct word. If they miss 8 letters, they lose. The app utilizes Apple's dictionary and gives players an option of Easy, Medium or Hard words.</p>
                  <p>Technologies: Node.js, Express, Mustache</p>
                  <a href="https://pure-citadel-81453.herokuapp.com/start" className="live-btn" target="_blank">Live Site</a>
                  <a href="https://github.com/swallsy/mystery_word_game" className="github-btn" target="_blank">GitHub</a>
              </div>
          </div>
          <a href="https://github.com/swallsy" className="view-more">View More On Github ></a>
        </div>
      </div>
    )
  }
}
