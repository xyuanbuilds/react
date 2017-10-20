import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

require ('./css/index.css')

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
registerServiceWorker();
