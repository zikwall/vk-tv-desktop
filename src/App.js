import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import '@vkontakte/vkui/dist/vkui.css';
import { Main } from './pages/main';
import { Header } from "./components/header";
import { SVG } from "./components/svg";

import rootReducer from './redux/reducers';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

const App = () =>  {
    return (
        <Provider store={store}>
           <Header />
           <main className="app">
                <div className="master-container-fluid">
                    <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <Switch>
                            <Route exact path="/" component={ Main } />
                            <Route path="/main" component={ Main } />
                        </Switch>
                    </BrowserRouter>
                </div>
            </main>

            <SVG />
        </Provider>
    );
};

export default App;
