import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactDOMServer from 'react-dom/server';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();