import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Contx} from './Contx.js'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Contx><App /></Contx></BrowserRouter>, document.getElementById('root'));

