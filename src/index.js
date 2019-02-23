import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/Home';
import Main from './components/main/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Main />, document.getElementById('main'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
