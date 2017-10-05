import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './Calendar.css';
import './News.css';
import './Thesaurus.css';
import './WoD.css';
import './Yelp.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
