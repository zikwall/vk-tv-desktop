import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import '@vkontakte/vkui/dist/vkui.css';
import { Main } from './pages/main';
import { Header } from "./components/header";
import { SVG } from "./components/svg";

const App = () =>  {
    return (
       <>
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
        </>
    );
};

export default App;
