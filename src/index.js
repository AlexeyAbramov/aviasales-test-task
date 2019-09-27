import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store, {subscribe} from './redux/store';

let reRender = (store) => {
    ReactDOM.render(<App state={store.state}/>, document.getElementById('root'));
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reRender(store);
subscribe(reRender);
serviceWorker.unregister();
