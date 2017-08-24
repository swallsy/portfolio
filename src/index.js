import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';


import registerServiceWorker from './registerServiceWorker';

import Main from "./components/Main.js";


ReactDOM.render(<Main />, document.getElementById('root'));

registerServiceWorker();
