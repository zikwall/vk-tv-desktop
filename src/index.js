import React from 'react';
import ReactDOM from 'react-dom';

import 'overlayscrollbars/css/OverlayScrollbars.css';
import './assets/css/main.css'
import './assets/css/anumation.css';
import './assets/css/custom.css';

import App from './App';


import reducer from './redux/reducers';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);