import React from 'react';
import ReactDOM from 'react-dom';
import '@vkontakte/vkui/dist/vkui.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
/*import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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