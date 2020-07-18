import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactDOMServer from 'react-dom/server';

ReactDOM.render(<App />, document.getElementById('app'));
console.log(ReactDOMServer.renderToString(<App />));

module.hot.accept();