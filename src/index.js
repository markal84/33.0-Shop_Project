import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const Root = () => (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
