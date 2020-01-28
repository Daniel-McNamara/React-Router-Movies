import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';

/*wrap router around app*/
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
