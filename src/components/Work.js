import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "../styles/Work.css";
import soundcloudImg from "../styles/img/soundcloud_player.png";
import mysteryWordsImg from "../styles/img/mysteryword.png";
import gabbleImg from "../styles/img/gabble.png";
import magicShoppeImg from "../styles/img/Magic Shoppe.png";
import etsyImg from "../styles/img/etsy.png";


export default class Work extends Component {

  render() {
    return (
      <div id="work">
        <div className="container">
          <div className="row project">
            <img className="d-block img-fluid col-md-8 project-img" src={etsyImg} alt="First slide"/>
            <div className="col-md-4" id="project-info">
              <h5>Etsy Homepage</h5>
              <p>Leveraging Etsy's API, this is a recreation of the Etsy homepage. The overall goal of this project was to utilize the React framework, React Routing and Etsy's API, as such the focus was not put on making the project mobile responsive. My specific contributions include the Carousel, Shop by Category, and Recent Review sections.</p>
              <p>Technologies: React, Bootstrap</p>
              <a href="http://etsyclassproject.surge.sh/" className="live-btn" target="_blank">Live Site</a>
              <a href="https://github.com/swallsy/TIY-Etsy-Final" className="github-btn" target="_blank">GitHub</a>
            </div>
          </div>
          <div className="row project">
            <img className="d-block img-fluid col-md-8 project-img" src={soundcloudImg} alt="First slide"/>
            <div className="col-md-4" id="project-info">
              <h5>SoundCloud Music Player</h5>
              <p>This music app utilizes SoundCloud's API to return a list of songs based off of a search query. I used custom css to accomplish the animations as well as media queries to make it mobile responsive.</p>
              <p>Technologies: JavaScript, CSS and HTML</p>
              <a href="https://swallsy.github.io/soundcloud_player/" className="live-btn" target="_blank">Live Site</a>
              <a href="https://github.com/swallsy/soundcloud_player" className="github-btn" target="_blank">GitHub</a>
            </div>
          </div>

          <div className="row project">
            <img className="d-block img-fluid col-md-8 project-img" src={gabbleImg} alt="First slide"/>
            <div className="col-md-4" id="project-info">
              <h5>Gabble: Social Site</h5>
              <p>Gabble is a social site app that allows users to signup for an account, login, create and delete posts, like and unlike posts, and also view a list of a comment's likes.</p>
              <p>Technologies: Node.js, Express, Sequelize, PostgreSQL, Mustache, and Heroku</p>
              <a href="https://protected-brook-54730.herokuapp.com/index" className="live-btn" target="_blank">Live Site</a>
              <a href="https://github.com/swallsy/gabble_social_app" className="github-btn" target="_blank">GitHub</a>
            </div>
          </div>

          <div className="row project">
            <img className="d-block img-fluid col-md-8 project-img" src={magicShoppeImg} alt="First slide"/>
            <div className="col-md-4" id="project-info">
              <h5>The Magic Shoppe: eCommerce Site</h5>
              <p>As a group of four, we built a mini eCommerce site that sold "magical items". Users are able to browse the collection, read reviews and add an item to their cart. We built our database and hosted it on Heroku for all API calls.</p>
              <p>Technologies: Express, Node.js, PostegreSQL, Sequelize, React, and Bootstrap.</p>
              <a href="http://magicshoppe.surge.sh/" className="live-btn" target="_blank">Live Site</a>
              <a href="https://github.com/swallsy/Magic-Shoppe-Project" className="github-btn" target="_blank">GitHub</a>
            </div>
          </div>

          <div className="row project">
            <img className="d-block img-fluid col-md-8 project-img" src={mysteryWordsImg} alt="First slide"/>
            <div className="col-md-4" id="project-info">
              <h5>Mystery Words</h5>
              <p>Players guess letters until they are able to guess the correct word. If they miss 8 letters, they lose. The app utilizes Apple's dictionary and gives players an option of Easy, Medium or Hard words.</p>
              <p>Technologies: Node.js, Express, Mustache</p>
              <a href="https://pure-citadel-81453.herokuapp.com/start" className="live-btn" target="_blank">Live Site</a>
              <a href="https://github.com/swallsy/mystery_word_game" className="github-btn" target="_blank">GitHub</a>
            </div>
          </div>
          <a href="https://github.com/swallsy" className="view-more">View More On Github ></a>
        </div>
    </div>
  )}
}
