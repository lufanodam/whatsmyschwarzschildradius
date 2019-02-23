import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
