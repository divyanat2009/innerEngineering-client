import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import DATA from './data.js';



ReactDOM.render(
  <BrowserRouter>
    <App data={DATA}/>
  </BrowserRouter>,
  document.getElementById('root')
);
