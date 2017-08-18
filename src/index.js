import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';


import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch}  from "react-router-dom";

import Splash from "./components/Splash.js";
import About from "./components/About.js";
import Work from "./components/Work.js";
import Contact from "./components/Contact.js";
import Main from "./components/Main.js";


ReactDOM.render (
  <BrowserRouter>
      <Switch>
  			 	<Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={Work} />
  				<Route path="/" component={Main} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
