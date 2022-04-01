import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalCSS from './components/styled/global.css';

ReactDOM.render(
  <>
    <GlobalCSS />
    <App />
  </>, document.getElementById('app'));
