import React from 'react';
import ReactDOM from 'react-dom';

import './CSS/index.css';
import './CSS/sectionTop.css';
import './CSS/tasks.css';
import './CSS/sectionMiddle.css';
import './CSS/sectionBottom.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();